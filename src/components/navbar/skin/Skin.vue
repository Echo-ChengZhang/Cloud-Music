<template>
  <div class="skin">
    <div @click="skinListDispaly">
      <img src="~@/assets/img/navbar-icon/skin.svg" alt="">
    </div>
    <div class="skin-list" :style="{'display': isDisplay}">
      <div class="theme-color" v-for="item in themes" @click="themeClick(item)"
        :style="{'background-color': item.baseColor}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isDisplay: 'none',
        themes: [{
            baseColor: '#fd79a8',
            otherColor: '#e84393'
          },
          {
            baseColor: '#ff7675',
            otherColor: '#d63031'
          },
          {
            baseColor: '#fab1a0',
            otherColor: '#e17055'
          },
          {
            baseColor: '#ffeaa7',
            otherColor: '#fdcb6e'
          },
          {
            baseColor: '#55efc4',
            otherColor: '#00b894'
          },
          {
            baseColor: '#81ecec',
            otherColor: '#00cec9'
          },
          {
            baseColor: '#74b9ff',
            otherColor: '#0984e3'
          },
          {
            baseColor: '#a29bfe',
            otherColor: '#6c5ce7'
          }
        ]
      }
    },
    methods: {
      skinListDispaly() {
        if (this.isDisplay == 'none') {
          this.isDisplay = 'flex'
        } else {
          this.isDisplay = 'none'
        }
      },
      themeClick(item) {
        this.$store.commit('changeBaseColor', item.baseColor)
        this.$store.commit('changeOtherColor', item.otherColor)
        this.$store.commit('changeColorBox', item.otherColor)
      }
    }
  }
</script>

<style>
  .skin {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skin img {
    height: 25px;
    width: 25px;
    margin: 0 20px;
    cursor: pointer;
  }

  .skin-list {
    width: 280px;
    height: 140px;
    border-radius: 10px;
    position: absolute;
    top: 9vh;
    right: 0;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    z-index: 10;
  }

  .theme-color {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
</style>