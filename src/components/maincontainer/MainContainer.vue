<template>
  <div class="main-container">
    <side-bar></side-bar>
    <router-view v-slot="{ Component }" class="views">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
  import SideBar from '@/components/sidebar/SideBar.vue'

  export default {
    components: {
      SideBar
    },

  }
</script>

<style>
  .main-container {
    width: 100vw;
    height: 80vh;
    position: fixed;
    top: 9vh;
    display: flex;
  }

  .views {
    flex: 1;
    overflow: auto;
  }
</style>