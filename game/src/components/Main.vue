<script>
  export default {
    name: 'Main',
    props: {
      players: {
        type: Array,
        default: () => []
      },
      activePlayer: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        numberDice: [],
        disabled: false
      };
    },
    watch: {
      activePlayer() {
        this.numberDice = [];
        this.disabled = !this.disabled;

        this.$emit('set-number-dice', {
          numberDice: this.numberDice
        });

        this.rollDice();
      }
    },
    created() {
      this.rollDice();
    },
    methods: {
      displayedRollDice(numberDice) {
        if (numberDice.length) {
          return `${numberDice[0]} : ${numberDice[1]}`;
        } else {
          return '';
        }
      },
      getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      rollDice() {
        this.disabled = !this.disabled;
        const firstCube = this.getRandomArbitrary(1, 7);
        const secondCube = this.getRandomArbitrary(1, 7);

        this.numberDice = [firstCube, secondCube];

        this.$emit('set-number-dice', {
          numberDice: this.numberDice
        });
      },
      switchDice() {
        this.numberDice.reverse();
      }
    }
  };
</script>

<template>
  <div class="main">
    <div class="main__title">
      <h2>Zone</h2>
    </div>
    <div class="main__display-players">
      <div
        v-for="player in players"
        :key="player.name"
        class="main__player main__player"
        :class="[
          { 'main__player main__player--active' : player.active },
          { 'main__player main__player--blue' : player.color === 'blue' && player.active },
          { 'main__player main__player--red' : player.color === 'red' && player.active }
        ]"
      >
        <div class="main__player-image" />
        <div class="main__player-info">
          <div class="main__player-label">
            {{ player.name }}
          </div>
          <div class="main__player-score">{{ player.score }}</div>
        </div>
      </div>
    </div>
    <div class="main__dice-wrapper">
      <div
        class="main__dice"
        v-html="displayedRollDice(numberDice)"
      />
      <button
        type="button"
        class="main__dice-button"
        @click="switchDice"
      >
        Повернуть фигуру
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 30%;
    width: 100%;

    padding-left: 1rem;
  }

  .main__title {
    width: 100%;

    margin: 1rem auto;

    & > h2 {
      text-align: center;
      font-weight: bold;
    }
  }

  .main__display-players {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    width: 100%;

    border: 1px solid gainsboro;
    border-radius: 5px;
  }
  .main__player {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 100%;

    background-color: white;

    padding: 1rem;

    box-sizing: border-box;
    transition: background-color 0.2s ease;

    &--blue {
      background-color: lightblue;
    }

    &--red {
      background-color: lightcoral;
    }
  }
  .main__player-image {
    width: 30px;
    height: 30px;
    background-color: gainsboro;
    margin-right: 1rem;
  }
  .main__player-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  }

  .main__player-label {}

  .main__dice-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    padding: 1rem;
  }

  .main__dice {
    width: 100%;

    padding: 0 0 1rem;

    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
</style>
