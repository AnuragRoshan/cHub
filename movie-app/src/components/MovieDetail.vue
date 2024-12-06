<template>
  <section class="movie-details">
    <div class="content-wrapper">
      <!-- Left Panel -->
      <div class="left-panel">
        <img
          :src="movie.Poster"
          :alt="movie.Title + ' Poster'"
          class="movie-poster"
        />
        <div class="stream">
          <div class="stream-logo">
            <img
              src="https://media.themoviedb.org/t/p/original/zdTSUEVZFXp3E0EkOMGN99QPVJp.jpg"
              alt="Streaming Service Logo"
            />
          </div>
          <div class="hotstar">
            <p>Now Streaming</p>
            <p>Watch on Hotstar</p>
          </div>
        </div>
      </div>

      <!-- Right Panel -->
      <div class="right-panel">
        <h1 class="movie-title">
          {{ movie.Title }} <span>({{ movie.Year }})</span>
        </h1>
        <div class="movie-meta">
          <div
            v-for="(info, index) in [
              movie.Rated,
              movie.Runtime,
              movie.Genre,
              movie.Released,
            ]"
            :key="index"
          >
            {{ info }}
          </div>
        </div>
        <div class="user-score">
          <div class="score-circle">
            <svg viewBox="0 0 36 36" class="circular-chart">
              <path
                class="circle-bg"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="circle"
                :stroke-dasharray="`${Math.round(
                  parseFloat(movie.imdbRating) * 10
                )}, 100`"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" class="percentage">
                {{ Math.round(parseFloat(movie.imdbRating) * 10) }}%
              </text>
            </svg>
          </div>
          <p>User Score</p>
        </div>
        <div class="action-buttons">
          <button
            class="action-button like"
            @click="toggleLike"
            :class="{ active: isLiked }"
          >
            <LucideHeart :stroke="isLiked ? '#21D07A' : 'white'" size="18" />
          </button>
          <button
            class="action-button bookmark"
            @click="toggleBookmark"
            :class="{ active: isBookmarked }"
          >
            <LucideBookmark
              :stroke="isBookmarked ? '#21D07A' : 'white'"
              size="18"
            />
          </button>

          <button class="play-trailer">
            <span class="play-icon">▶</span> Play Trailer
          </button>
        </div>

        <div class="overview">
          <h3>Overview</h3>
          <p>{{ movie.Plot }}</p>
        </div>
        <div class="credits">
          <div class="credit-item">
            <h4>Director</h4>
            <p>{{ movie.Director }}</p>
          </div>
          <div class="credit-item">
            <h4>Writers</h4>
            <p>{{ movie.Writer }}</p>
          </div>
          <div class="credit-item">
            <h4>Box Office</h4>
            <p>{{ movie.BoxOffice }}</p>
          </div>
        </div>
        <div class="ratings">
          <h3>Ratings</h3>
          <ul>
            <li v-for="rating in movie.Ratings" :key="rating.Source">
              <strong>{{ rating.Source }}:</strong> {{ rating.Value }}
            </li>
          </ul>
        </div>
        <div class="cast">
          <h3>Top Cast</h3>
          <ul>
            <li v-for="actor in cast" :key="actor">{{ actor }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchMovieDetails } from "@/services/api";
import {
  Bookmark as LucideBookmark,
  Heart as LucideHeart,
} from "lucide-vue-next";

export default {
  components: {
    LucideBookmark,
    LucideHeart,
  },
  data() {
    return {
      movie: {},
      cast: [],
      isBookmarked: false,
      isLiked: false,
    };
  },
  async created() {
    const data = await fetchMovieDetails();
    this.movie = data;
    this.cast = data.Actors.split(", ");
  },
  methods: {
    toggleBookmark() {
      this.isBookmarked = !this.isBookmarked;
    },
    toggleLike() {
      this.isLiked = !this.isLiked;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");

.movie-details {
  display: flex;
  color: #ffffff;
  font-family: "Poppins", Arial, sans-serif;
  min-height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(10, 26, 76, 2.9),
      rgba(3, 13, 51, 0.7)
    ),
    url("https://media.themoviedb.org/t/p/w600_and_h900_bestv2/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.content-wrapper {
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 2rem;
  gap: 4rem;
}

.left-panel {
  flex: 0 0 300px;
}

.movie-poster {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.stream {
  display: flex;
  background-color: rgba(3, 37, 65, 0.8);
  border-radius: 5px;
  padding: 15px;
  align-items: center;
}

.stream-logo img {
  width: 40px;
  height: auto;
  margin-right: 15px;
}

.hotstar {
  font-size: 0.9rem;
}

.hotstar p:first-child {
  color: #01b4e4;
  margin-bottom: 2px;
  font-weight: bold;
}

.right-panel {
  flex: 1;
}

.movie-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.movie-title span {
  font-weight: 300;
  opacity: 0.8;
}

.movie-meta {
  font-size: 0.9rem;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.user-score {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.score-circle {
  width: 60px;
  height: 60px;
  margin-right: 15px;
}

.circular-chart {
  display: block;
  max-width: 100%;
  max-height: 100%;
}

.circle-bg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 2.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
  stroke: #21d07a;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.percentage {
  fill: #fff;
  font-size: 0.5em;
  text-anchor: middle;
}

.play-trailer {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  display: inline-flex;
  align-items: center;
}

.play-trailer:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.play-icon {
  margin-right: 8px;
}

.overview,
.credits,
.ratings,
.cast {
  margin-top: 30px;
}

h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.overview p {
  font-size: 1rem;
  line-height: 1.6;
}

.credits {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.credit-item h4 {
  font-size: 1rem;
  margin-bottom: 5px;
  color: #01b4e4;
}

.ratings ul,
.cast ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.ratings li,
.cast li {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.ratings li:hover,
.cast li:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.action-buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
}

.action-button {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  display: inline-flex;
  align-items: center;
}

.action-button:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.action-button.active {
  background-color: rgba(33, 208, 122, 0.6);
}

.action-button .icon {
  margin-right: 8px;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    padding: 1rem;
  }

  .left-panel {
    flex: 0 0 auto;
    margin-bottom: 2rem;
  }

  .movie-title {
    font-size: 2rem;
  }

  .movie-meta {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
