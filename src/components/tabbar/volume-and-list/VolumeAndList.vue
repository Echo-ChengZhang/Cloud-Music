<template>
  <div class="volume-and-list">
    <slot name=""></slot>
    这里是音量控制按键和歌曲列表
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .volume-and-list {
    width: 25vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>