<template>
  <div id="app">
    <AppHeader />
    <main>
      <MovieDetails />
    </main>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import MovieDetails from "./components/MovieDetail.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    MovieDetails,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  background-color: #0b1b35;
  color: white;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #0b1b35;
  overflow-x: hidden;
}

main {
}
</style>
