<script>
  export default {
    name: 'MapCell',
    props: {
      rowIndex: {
        type: Number,
        default: null
      },
      cellIndex: {
        type: Number,
        default: null
      },
      cell: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        active: false
      };
    },
    methods: {
      handleSelectCell() {
        this.active = !this.active;
        this.$emit('select', { rowIndex: this.rowIndex, cellIndex: this.cellIndex, active: this.active });
      },
      handleClickCell() {
        this.$emit('click');
      }
    }
  };
</script>

<template>
  <div
    class="map-cell"
    :class="[
      { 'map-cell--active' : cell.active },
      { 'map-cell--blue' : cell.color === 'blue' && cell.selectable },
      { 'map-cell--red' : cell.color === 'red' && cell.selectable }
    ]"
    @mouseover="handleSelectCell"
    @mouseleave="handleSelectCell"
    @click="handleClickCell"
  >
  </div>
</template>

<style lang="scss" scoped>
  /* TODO: заменить на динамические значения из constant */
  .map-cell {
    width: calc((800px / 32) - 2px);
    height: calc((800px / 32) - 2px);

    background-color: white;

    border: 0.5px solid gainsboro;

    cursor: pointer;
    transition: background-color 0.2s ease;

    &--active {
      background-color: gainsboro;
    }

    &--blue {
      background-color: lightblue;
    }

    &--red {
      background-color: lightcoral;
    }
  }
</style>
