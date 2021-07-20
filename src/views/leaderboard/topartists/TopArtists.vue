<template>
  <div class="top-artists">
    <div class="title">
      <h2>云音乐歌手榜</h2>
      <span @click="typeClick(1)" :class="{'isBold': currentType == 1}">华语</span>
      <span @click="typeClick(2)" :class="{'isBold': currentType == 2}">欧美</span>
      <span @click="typeClick(3)" :class="{'isBold': currentType == 3}">韩国</span>
      <span @click="typeClick(4)" :class="{'isBold': currentType == 4}">日本</span>
      <span>更新时间：{{transDate(updateTime)}}</span>
    </div>
    <div class="artists">
      <div v-for="(item, index) in artistToplist" class="artist" :class="{'single': index % 2 == 0}" @click="toArtist(item)">
        <div class="artist-info">
          <div>{{index + 1}}</div>
          <div>
            <img :src="item.picUrl" alt="">
          </div>
          <div>{{item.name}}</div>
        </div>
        <div class="artist-score">热度：{{item.score}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    request
  } from '@/api/request';

  export default {
    data() {
      return {
        artistToplist: '',
        updateTime: 0,
        currentType: 1
      }
    },
    created() {
      request({
        url: '/toplist/artist',
        params: {
          type: 1
        }
      }).then(res => {
        console.log(res);
        this.artistToplist = res.list.artists
        this.updateTime = res.list.updateTime
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      transDate(time) {
        let day = new Date(time)
        let month = day.getMonth() + 1;
        let date = day.getDate();
        return (month + '月' + date + '日');
      },
      typeClick(num) {
        request({
        url: '/toplist/artist',
        params: {
          type: num
        }
      }).then(res => {
        console.log(res);
        this.currentType = num
        this.artistToplist = res.list.artists
        this.updateTime = res.list.updateTime
      }).catch(err => {
        console.log(err);
      })
      },
      toArtist(item) {
        this.$store.commit('changeSingerId', item.id)
        this.$store.commit('changeSingerInfo')
        this.$router.push('/singer-info')
      }
    }
  }
</script>

<style>
  .top-artists .title {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 20px;
    position: relative;
  }

  .top-artists .title .isBold {
    font-weight: bold;
  }

  .top-artists .title h2 {
    margin: 0 0 10px;
  }

  .top-artists .title span {
    margin: 10px 20px 0 0;
    cursor: pointer;
  }

  .top-artists .title span:nth-child(6) {
    position: absolute;
    right: 0;
    bottom: 20px;
    cursor: auto;
    color: rgba(0, 0, 0, 0.5);
  }

  .top-artists .artists div {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .top-artists .artists .artist:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .top-artists .artists img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }

  .top-artists .artists .artist-info div {
    margin-left: 20px;
  }

  .top-artists .artists .artist-score {
    margin-right: 20px;
  }

  .top-artists .artists .single {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>