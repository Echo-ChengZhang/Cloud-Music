<template>
  <div class="side-bar" :class="{'side-bar-actived': !$store.state.sideBarIsShow}">
    <menu-list></menu-list>
  </div>
</template>

<script>
  import MenuList from './menulist/MenuList.vue'
  export default {
    components: {
      MenuList
    }
  }
</script>

<style>
  .side-bar {
    width: 200px;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .side-bar-actived {
    position: absolute;
    left: -200px;
  }
</style>