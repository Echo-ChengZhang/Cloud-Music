<template>
  <div class="side-bar">
    <menu-list></menu-list>
    <music-list></music-list>
  </div>
</template>

<script>
import MenuList from './menulist/MenuList.vue'
import MusicList from './musiclist/MusicList.vue'
export default {
  components: {
    MenuList,
    MusicList
  }
}
</script>

<style>
  .side-bar {
    width: 200px;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>