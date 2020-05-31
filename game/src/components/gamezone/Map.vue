<script>
  import MapCell from './MapCell';

  export default {
    name: 'Map',
    components: {
      MapCell
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
    data() {
      return {};
    },
    computed: {},
    watch: {},
    created() {},
    methods: {
      selectRowMoreThanAnything(rowIndex) {
        return (rowIndex + this.numberDice[0]) > this.countRow;
      },
      selectCellMoreThanAnything(cellIndex) {
        return (cellIndex + this.numberDice[1]) > this.countCell;
      },
      handleClickCell() {
        if (this.numberDice.length) {
          this.$emit('click', { mapCells: this.mapCells });
        }
      },
      handleSelectCell({ rowIndex, cellIndex, active }) {
        let activeRows = [];
        let activeCells = [];

        if (this.numberDice.length) {
          if (this.selectRowMoreThanAnything(rowIndex)) {
            for (let i = rowIndex; i > (rowIndex - this.numberDice[0]); i--) {
              activeRows.push(i);
            }
          } else {
            for (let i = rowIndex; i < (rowIndex + this.numberDice[0]); i++) {
              activeRows.push(i);
            }
          }

          if (this.selectCellMoreThanAnything(cellIndex)) {
            for (let i = cellIndex; i > (cellIndex - this.numberDice[1]); i--) {
              activeCells.push(i);
            }
          } else {
            for (let i = cellIndex; i < (cellIndex + this.numberDice[1]); i++) {
              activeCells.push(i);
            }
          }

          if (!this.mapCells[rowIndex][cellIndex].selectable) {
            this.mapCells.forEach((row, indexRow) => row.forEach((cell, indexCell) => {
              if (!cell.selectable) {
                cell.active = activeRows.includes(indexRow) && activeCells.includes(indexCell);
              }
            }));
          }
        } else if (!this.mapCells[rowIndex][cellIndex].selectable) {
          this.mapCells[rowIndex][cellIndex].active = active;
        }
      }
    }
  };
</script>

<template>
  <div class="map">
    <div
      v-for="(row, rowIndex) in mapCells"
      :key="rowIndex"
      class="map-row"
    >
      <map-cell
        v-for="(cell, cellIndex) in row"
        :key="cellIndex"
        :rowIndex="rowIndex"
        :cellIndex="cellIndex"
        :cell="cell"
        @select="handleSelectCell"
        @click="handleClickCell"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .map {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    max-width: 800px;
    width: 100%;
    max-height: 500px;
    height: 500px;

    border: 1px solid gainsboro;
    border-radius: 5px;
  }
  .map-row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>
