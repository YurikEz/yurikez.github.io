<script>
  import { SETTINGS } from './constant';
  import GameZone from './components/gamezone/GameZone.vue';
  import Main from './components/Main.vue';

  export default {
    name: 'App',
    components: {
      GameZone,
      Main
    },
    data() {
      return {
        numberDice: [],
        players: [
          {
            name: 'Player 1',
            active: true,
            color: 'blue',
            score: null
          },
          {
            name: 'Player 2',
            active: false,
            color: 'red',
            score: null
          }
        ],
        fieldWidth: SETTINGS.fieldWidth,
        fieldHeight: SETTINGS.fieldHeight,
        fieldSize: SETTINGS.fieldSize,
        mapCells: []
      };
    },
    computed: {
      activePlayer() {
        return this.players.filter((item) => item.active)[0];
      },
      cellWidth() {
        return this.fieldWidth / this.fieldSize;
      },
      cellHeight() {
        return this.fieldHeight / this.cellWidth;
      },
      countCell() {
        return this.fieldSize;
      },
      countRow() {
        return Math.round(this.cellHeight);
      }
    },
    watch: {},
    created() {
      for (let i = 0; i < this.countRow; i++) {
        this.mapCells.push([]);
        for (let j = 0; j < this.countCell; j++) {
          this.mapCells[i].push({
            active: false,
            selectable: false,
            color: ''
          });
        }
      }
    },
    methods: {
      setNumberDice({ numberDice }) {
        this.numberDice = numberDice;
      },
      handleClickCell({ mapCells }) {
        let countCells = null;

        mapCells.forEach((row) => row.forEach((cell) => {
          if (cell.active && !cell.selectable) {
            cell.selectable = cell.active;
            cell.color = this.activePlayer.color;
          }

           if (cell.selectable && cell.color === this.activePlayer.color) {
             countCells += 1;
           }
        }));

        this.players.forEach((item) => {
          if (item.active) {
            item.score = countCells;
          }

          item.active = !item.active;
        });
      }
    }
  };
</script>

<template>
  <div id="app">
    <GameZone
      :numberDice="numberDice"
      :activePlayer="activePlayer"
      :mapCells="mapCells"
      :countCell="countCell"
      :countRow="countRow"
      @click="handleClickCell"
    />
    <Main
      :players="players"
      :activePlayer="activePlayer"
      @set-number-dice="setNumberDice"
    />
  </div>
</template>

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

    margin: 1rem auto;
  }
</style>
