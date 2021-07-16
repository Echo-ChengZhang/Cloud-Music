<template>
  <div class="music-list-details">
    <div class="music-list-details-title">
      <div>
        <img :src="musicListInfo.playlist?.coverImgUrl" alt="" class="music-list-img">
      </div>
      <div>
        <h2>{{musicListInfo.playlist?.name}}</h2>
        <div class="creator-info">
          <img :src="musicListInfo.playlist?.creator.avatarUrl" alt="" class="creator-img">
          <p>{{musicListInfo.playlist?.creator.nickname}}&nbsp;&nbsp;{{transDate(musicListInfo.playlist?.createTime)}}创建
          </p>
        </div>
      </div>
    </div>
    <div class="music-list-details-list">
      <ul>
        <li v-for="(item, index) in musicListInfo.playlist?.tracks">
          <div class="music-info"  :class="{'singleLine': index % 2 == 0}">
            <div>
              <router-link to="/playing" @click="toMusic(item)">{{item.name}}</router-link>
            </div>
            <div class="music-info-singer">
              <router-link to="/artist" v-for="singer in item.ar" @click="toSinger(singer)">
                <div>{{singer.name}}</div>
              </router-link>
            </div>
          </div>
        </li>
      </ul>
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
        musicListInfo: ''
      }
    },
    activated() {
      request({
        url: '/playlist/detail',
        params: {
          id: this.$store.state.currentMusicListId
        }
      }).then(res => {
        this.musicListInfo = res
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      transDate(time) {
        let day = new Date(time)
        let year = day.getFullYear();
        let month = day.getMonth() + 1;
        let date = day.getDate();
        return ([year, month, date].join('-'));
      },
      toMusic(item) {
        this.$store.commit('changeCurrentMusicId', item.id)
        this.$store.commit('changeCurrentMusicName', item.name)
        this.$store.commit('changeCurrentMusicSinger', item.ar)
        this.$store.commit('changeCurrentAlbumPicUrl', item.al.picUrl)
        this.$store.commit('changeCurrentAlbumName', item.al.name)
        this.$store.commit('changeCurrentAlbumId', item.al.id)
        this.$store.commit('startRotate')
      },
      toSinger(singer) {
        this.$store.commit('changeSingerId', singer.id)
      },
    }
  }
</script>

<style>
  .music-list-details {
    padding: 20px 20px 10px;
    overflow: auto;
  }

  .music-list-details-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .music-list-details-title h2 {
    margin: 0;
  }

  .music-list-img {
    width: 200px;
    height: 200px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin-right: 20px;
  }

  .creator-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .creator-img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 10px;
  }

  .music-list-details-list ul {
    list-style-type: none;
    padding: 0;
  }

  .music-list-details-list .music-info {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .music-list-details-list .music-info a {
    color: #000;
    text-decoration: none;
    font-size: 15px;
    padding-left: 10px;
  }

  .music-list-details-list .music-info div {
    flex: 1;
    height: 100%;
  }

  .singleLine {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .music-list-details-list .music-info:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .music-info-singer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>