<template>
  <main-container></main-container>
  <nav-bar></nav-bar>
  <tab-bar></tab-bar>
</template>

<script>
  import TabBar from '@/components/tabbar/TabBar.vue'
  import NavBar from '@/components/navbar/NavBar.vue'
  import MainContainer from '@/components/maincontainer/MainContainer.vue'

  export default {
    components: {
      TabBar,
      NavBar,
      MainContainer
    }
  }
</script>

<style>
  @import url('~@/assets/css/base.css');
</style>