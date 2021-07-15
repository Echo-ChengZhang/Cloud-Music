<template>
  <div class="music-info">
    <div class="cover">
      <router-link to="/playing">
        <div class="container">
          <img src="~@/assets/img/tabbar-icon/up.svg" alt="">
        </div>
        <slot name="img"></slot>
      </router-link>
    </div>
    <div class="message">
      <slot name="song-name"></slot>
      <div>
        <slot name="singer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .music-info {
    height: 10vh;
    width: 25vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .music-info a {
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;
  }

  .music-info .cover img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin: 10px 20px;
  }

  .music-info .cover .container {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
  }

  .music-info .cover .container img {
    width: 25px;
    height: 25px;
  }

  .music-info .cover div:hover {
    opacity: 1;
    backdrop-filter: blur(2px);
  }

  .music-info .message {
    display: flex;
    flex-direction: column;
  }

  .music-info .message h2 {
    font-size: 15px;
    line-height: 15px;
    height: 15px;
    margin: 5px 0;
  }

  .music-info .message div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .music-info .message span {
    font-size: 10px;
    line-height: 10px;
    height: 10px;
    margin: 5px 5px 5px 0;
  }
</style>