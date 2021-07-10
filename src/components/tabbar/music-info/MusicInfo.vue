<template>
  <div class="music-info">
    <div class="cover">
      <a href="#">
        <div class="container">
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <slot name="img">
        </slot>
      </a>
    </div>
    <div class="message">
      <slot name="song-name">
      </slot>
      <slot name="singer">
      </slot>
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

  .line {
    width: 20px;
    height: 1px;
    background-color: rgba(255, 255, 255, 1);
  }

  .line:nth-child(1) {
    transform: translateX(3px) rotate(-45deg);
  }

  .line:nth-child(2) {
    transform: translateX(-3px) rotate(45deg);
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