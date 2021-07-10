<template>
  <div class="player">
    <div class="control-button">
      <span>播放模式</span> |
      <span>上一首</span> |
      <span>暂停/播放</span> |
      <span>下一首</span> |
      <span>歌词</span>
    </div>
    <div class="progress-bar">
      ----------------这里是进度条----------------
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .player {
    width: 50vw;
  }

  .control-button, .progress-bar {
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>