<template>
  <div class="menu-list">
    <router-link v-for="(item, index) in menu" @click="menuClick(item, index)" :to="item.link">
      <div class="menu-item">{{item.name}}</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menu: [{
            link: '/recommendation',
            name: '个性推荐'
          },
          {
            link: '/music-list',
            name: '歌单'
          },
          {
            link: '/leader-board',
            name: '排行榜'
          },
          {
            link: '/singers',
            name: '歌手'
          }
        ]
      }
    },
    methods: {
      menuClick(item) {
        this.$router.push(item.link)
      }
    }
  }
</script>

<style>
  .menu-list {
    margin: 10px 10px 20px;
  }

  .menu-list a {
    color: #000;
    text-decoration: none;
    font-size: 20px;
  }

  .menu-item {
    padding: 6px 10px;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  .menu-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .router-link-active div {
    background-color: rgba(0, 0, 0, 0.1);
    font-weight: bolder;
  }
</style>