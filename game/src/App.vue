<template>
  <div id="app">
    <GameZone />
    <Main />
  </div>
</template>

<script>
import GameZone from './components/gamezone/GameZone.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    GameZone,
    Main
  }
};
</script>

<style lang="scss">
:root {
  --white: #ffffff;
  --black: #000000;
}
</style>

<style lang="scss" scoped>
#app {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  max-width: 1170px;
  width: 100%;
  height: 100vh;

  margin: 1rem auto;
}
</style>
