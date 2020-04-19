<template>
  <div class="game-zone">
    <div class="game-zone__title">
      <h2>Игровое поле</h2>
    </div>
    <Map />
  </div>
</template>

<script>
import Map from './Map.vue';

export default {
  name: 'GameZone',
  components: {
    Map
  }
};
</script>

<style lang="scss" scoped>
.game-zone {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 70%;
  width: 100%;
}

.game-zone__title {
  & > h2 {
    font-weight: bold;
  }
}
</style>
