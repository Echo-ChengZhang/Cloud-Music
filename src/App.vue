<template>
  <div id="app">
    <nav-bar></nav-bar>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar.vue'
import NavBar from './components/navbar/NavBar.vue'
export default {
  components: {
    TabBar,
    NavBar
  }
}
</script>

<style>
@import url('~@/assets/css/base.css');
</style>
