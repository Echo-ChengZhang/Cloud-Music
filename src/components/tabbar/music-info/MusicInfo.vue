<template>
  <div class="music-info">
    <div>
      <slot name="img">
      </slot>
    </div>
    <div>
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

  .music-info img {
    width: 80px;
    height: 80px;
    line-height: 10vh;
  }
</style>