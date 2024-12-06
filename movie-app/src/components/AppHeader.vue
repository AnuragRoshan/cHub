<template>
  <!-- Top Header -->
  <header class="header-top">
    <div class="left">
      <div class="logo">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="TMDB Logo"
        />
      </div>
      <div class="hamburger" @click="toggleMenu">
        <LucideMenu size="24" />
      </div>
      <div class="nav-top">
        <ul>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>People</li>
          <li>More</li>
        </ul>
      </div>
    </div>

    <!-- Actions -->
    <div :class="['actions-top', { open: isMenuOpen }]">
      <div><button>Login</button></div>
      <div><button>Join TMDB</button></div>
      <div>
        <button class="search">
          <LucideSearch size="18" />
        </button>
      </div>
    </div>
  </header>

  <!-- Main Header -->
  <header class="header">
    <nav>
      <ul>
        <li>Overview</li>
        <li>Media</li>
        <li>Fandom</li>
        <li>Share</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { LucideSearch, LucideMenu } from "lucide-vue-next";

export default {
  components: {
    LucideSearch,
    LucideMenu,
  },
  data() {
    return {
      isMenuOpen: false, // State for toggling the menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle menu state
    },
  },
};
</script>

<style>
/* Reset any browser defaults */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #0b1b35;
  color: white;
}

/* Header Top */
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem;
  background-color: #04213b;
  color: white;
  position: relative;
  z-index: 1000;
}

.header-top .left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.header-top .logo img {
  height: 30px;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.nav-top ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav-top ul li {
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: white;
}

.actions-top {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease-in-out;
}

.actions-top.open {
  display: block;
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  background-color: #04213b;
  padding: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.actions-top button {
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
}

.search {
  background: none;
  border: none;
  cursor: pointer;
}

/* Main Header */
.header {
  background: white;
  color: black;
  padding: 1rem 2rem;
}

.header nav ul {
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  font-weight: bold;
}

.header nav ul li {
  cursor: pointer;
  font-size: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-top {
    flex-direction: row;
    justify-content: space-between;
  }

  .hamburger {
    display: block;
    order: 2;
  }

  .nav-top ul {
    display: none;
  }

  .actions-top {
    display: none;
    flex-direction: column;
    gap: 1rem;
  }

  .actions-top.open {
    display: flex;
  }

  .actions-top button {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .header-top .logo img {
    height: 25px;
  }

  .nav-top ul li {
    font-size: 0.9rem;
  }

  .actions-top button {
    font-size: 0.8rem;
  }

  .header nav ul li {
    font-size: 0.9rem;
  }
}
</style>
