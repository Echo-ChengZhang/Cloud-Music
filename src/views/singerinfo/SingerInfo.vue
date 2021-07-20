<template>
  <div class="singer-info">
    <div class="singer-info-title">
      <div class="singer-img">
        <img :src="$store.state.singerInfo.cover" alt="">
      </div>
      <div class="singer-main-info">
        <h2>{{$store.state.singerInfo.name}}</h2>
        <p>单曲数：{{$store.state.singerInfo.musicSize}}&nbsp&nbsp&nbsp&nbsp专辑数：{{$store.state.singerInfo.albumSize}}</p>
      </div>
    </div>
    <div class="singer-info-content">
      <router-link to="/singer-info/album">
        <div>专辑</div>
      </router-link>
      <router-link to="/singer-info/desc">
        <div>歌手详情</div>
      </router-link>
      <router-link to="/singer-info/simi-artist">
        <div>相似歌手</div>
      </router-link>
    </div>
    <div>
      <router-view v-slot="{ Component }" class="views">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .singer-info {
    padding: 20px;
  }

  .singer-info .singer-info-title {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .singer-info .singer-info-title .singer-img img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-right: 20px;
  }

  .singer-info .singer-info-title .singer-main-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .singer-info .singer-info-content {
    margin-top: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .singer-info .singer-info-content div {
    margin: 0 40px 10px 0;
    padding-bottom: 5px;

  }

  .singer-info .singer-info-content a {
    color: #000;
    text-decoration: none;
  }

  .singer-info .singer-info-content .router-link-active div {
    border-bottom: 5px solid #000;
    font-weight: bold;
    background-color: #fff;
  }
</style>