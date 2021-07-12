<template>
  <div class="music-info">
    <div class="cover">
      <a href="#">
        <div class="container">
          <img src="~@/assets/img/tabbar-icon/up.svg" alt="">
        </div>
        <slot name="img"></slot>
      </a>
    </div>
    <div class="message">
      <a href="#">
        <slot name="song-name"></slot>
      </a>
      <a href="#">
        <slot name="singer"></slot>
      </a>
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
  }

  .cover img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin: 10px 20px;
  }

  .container {
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

  .container img {
    width: 25px;
    height: 25px;
  }

  .cover div:hover {
    opacity: 1;
    backdrop-filter: blur(2px);
  }

  .message {
    display: flex;
    flex-direction: column;
  }

  .message h2 {
    font-size: 20px;
    line-height: 20px;
    height: 20px;
    margin: 5px 0;
  }

  .message p {
    line-height: 20px;
    height: 20px;
    margin: 5px 0;
  }
</style>