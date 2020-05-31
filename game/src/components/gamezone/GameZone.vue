<script>
  import Map from './Map.vue';

  export default {
    name: 'GameZone',
    components: {
      Map
    },
    props: {
      numberDice: {
        type: Array,
        default: () => []
      },
      activePlayer: {
        type: Object,
        default: () => {}
      },
      mapCells: {
        type: Array,
        default: () => []
      },
      countCell: {
        type: Number,
        default: null
      },
      countRow: {
        type: Number,
        default: null
      }
    },
    methods: {
      handleClickCell({ mapCells }) {
        this.$emit('click', { mapCells });
      }
    }
  };
</script>

<template>
  <div class="game-zone">
    <div class="game-zone__title">
      <h2>Game filed</h2>
    </div>
    <Map
      :numberDice="numberDice"
      :activePlayer="activePlayer"
      :mapCells="mapCells"
      :countCell="countCell"
      :countRow="countRow"
      @click="handleClickCell"
    />
  </div>
</template>

<style lang="scss" scoped>
  .game-zone {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 70%;
    width: 100%;
  }

  .game-zone__title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;

    margin: 1rem auto;

    & > h2 {
      font-weight: bold;
    }
  }
</style>
