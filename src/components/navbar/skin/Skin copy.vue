<template>
  <div class="skin">
    <a href="#" @click="skinListDispaly">
      <img src="~@/assets/img/navbar-icon/skin.svg" alt="">
    </a>
    <div class="skin-list" :style="{'display': isDisplay}">
      <a href="#" @click="theme1Click(theme1)">
        <div class="theme-color" id="theme1"></div>
      </a>
      <a href="#">
        <div class="theme-color" id="theme2"></div>
      </a>
      <a href="#">
        <div class="theme-color" id="theme3"></div>
      </a>
      <a href="#">
        <div class="theme-color" id="theme4"></div>
      </a>
      <a href="#">
        <div class="theme-color" id="theme5"></div>
      </a>
      <a href="#">
        <div class="theme-color" id="theme6"></div>
      </a>
      <a href="#">
        <div class="theme-color" id="theme7"></div>
      </a>
      <a href="#">
        <div class="theme-color" id="theme8"></div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isDisplay: 'none',
        theme1: {
          baseColor: '#fd79a8',
          others: '#e84393'
        },
        theme2: {
          baseColor: '#ff7675',
          others: '#d63031'
        },
        theme3: {
          baseColor: '#fab1a0',
          others: '#e17055'
        },
        theme4: {
          baseColor: '#ffeaa7',
          others: '#fdcb6e'
        },
        theme5: {
          baseColor: '#55efc4',
          others: '#00b894'
        },
        theme6: {
          baseColor: '#81ecec',
          others: '#00cec9'
        },
        theme7: {
          baseColor: '#74b9ff',
          others: '#0984e3'
        },
        theme8: {
          baseColor: '#a29bfe',
          others: '#6c5ce7'
        }
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
      theme1Click() {

      }
    }
  }
</script>

<style>
  .skin a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skin img {
    height: 25px;
    width: 25px;
    margin: 0 20px;
  }

  .skin-list {
    width: 280px;
    height: 140px;
    border-radius: 10px;
    position: absolute;
    top: 9vh;
    right: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
  }

  .theme-color {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  #theme1 {
    background-color: #fd79a8;
  }

  #theme2 {
    background-color: #ff7675;
  }

  #theme3 {
    background-color: #fab1a0;
  }

  #theme4 {
    background-color: #ffeaa7;
  }

  #theme5 {
    background-color: #55efc4;
  }

  #theme6 {
    background-color: #81ecec;
  }

  #theme7 {
    background-color: #74b9ff;
  }

  #theme8 {
    background-color: #a29bfe;
  }
</style>