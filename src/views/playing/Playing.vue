<template>
  <div class="playing">
    <h2>{{$store.state.currentMusicName}}</h2>
    <div class="artist">
      <span>歌手：</span>
      <router-link v-for="item in $store.state.currentMusicSinger" to="/artist">
        {{item.name}}
      </router-link>
    </div>
    <div class="album">
      <span>专辑：</span>
      <router-link to="/album">{{$store.state.currentAlbumName}}</router-link>
    </div>
    <div class="album-pic">
      <img :src="$store.state.currentAlbumPicUrl" alt="" :style="{'transform': 'rotate(' + $store.state.rotateDeg + 'deg)'}">
    </div>
    <div class="comments">
      <h2>精选评论</h2>
      <div comment-info v-for="item in currentMusicComments" class="comments-container">
        <div class="user-img">
          <img :src="item.user.avatarUrl" alt="">
        </div>
        <div class="main-content">
          <p>
            <span class="user-name">{{item.user.nickname}}：&nbsp</span>
            <span class="comment-detail">{{item.content}}</span>
          </p>
          <p class="time-and-liked">
            <span>{{transDate(item.time)}}</span>
            <span>点赞数：&nbsp{{item.likedCount}}</span>
          </p>
        </div>
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
        albumInfo: {},
        currentMusicComments: []
      }
    },
    activated() {
      if (this.$store.state.isPlaying) {
        this.$store.commit('startRotate')
      }
      this.$store.commit('changeSideBarStyle')
      request({
          url: '/comment/hot',
          params: {
            id: this.$store.state.currentMusicId,
            type: 0
          }
        }).then(res => {
          this.currentMusicComments = res.hotComments
        }).catch(err => {
          console.log(err);
        })
    },
    deactivated() {
      this.$store.commit('changeSideBarStyle')
      this.$store.commit('pauseRotate')
    },
    methods: {
      transDate(time) {
        let day = new Date(time)
        let year = day.getFullYear();
        let month = day.getMonth() + 1;
        let date = day.getDate();
        let hour = day.getHours();
        let minute = day.getMinutes();
        return ([year, month, date].join('-') + ' ' + ([hour, minute].join(':')));
      }
    }
  }
</script>

<style>
  .playing {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .playing h2 {
    font-size: 40px;
    font-weight: normal;
    margin: 20px 0 10px;
  }

  .artist {
    margin-bottom: 10px;
  }

  .artist a {
    text-decoration: none;
    color: #000;
    height: 30px;
    line-height: 30px;
    margin-right: 10px;
  }

  .artist a:hover {
    font-weight: bold;
  }

  .album {
    margin-bottom: 10px;
  }

  .album a {
    text-decoration: none;
    color: #000;
    height: 30px;
    line-height: 30px;
    margin-right: 10px;
  }

  .album a:hover {
    font-weight: bold;
  }

  .album-pic img {
    width: 300px;
    height: 300px;
    margin: 40px;
    border-radius: 150px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  }

  .comments {
    width: 60%;
    margin: 40px;
  }

  .comments h2 {
    font-size: 30px;
    font-weight: normal;
    margin: 20px;
  }

  .comments-container {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: flex-start;
  }

  .comments-container .user-img img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 20px;
  }

  .comments-container .main-content {
    padding: 10px;
    flex: 1;
  }

  .comments-container .main-content p {
    margin: 10px 0;
  }

  .comments-container .main-content .user-name {
    color: #0984e3;
  }

  .comments-container .main-content .time-and-liked {
    display: flex;
    justify-content: space-between;
  }
</style>