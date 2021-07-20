<template>
  <div class="main-music-list">
    <div>
      <div class="catlist-button" @click="catlistClick">{{currentCat}}</div>
      <div class="catlist" :style="{'display': isDisplay}">
        <div class="all-music-list">
          <div>
            <span @click="allClick">全部歌单</span>
          </div>
        </div>
        <div class="categories" v-for="(items, index) in categories.categories">
          <div class="category-name">{{items}}</div>
          <div class="category-details">
            <div v-for="item in correctCategory(index)">
              <span @click="itemClick(item)">
                {{item.name}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="play-list">
      <div v-for="item in playlistsInfo" class="play-list-item">
        <router-link @click="musicListClick(item)" to="/music-list-details">
          <img :src="item.coverImgUrl" alt="">
          <div>{{item.name}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {
    request
  } from '@/api/request';

  export default {
    data() {
      return {
        categories: '',
        isDisplay: 'none',
        currentCat: '全部歌单',
        playlistsInfo: ''
      }
    },
    created() {
      axios.all([
        request({
          url: '/playlist/catlist'
        }),
        request({
          url: '/top/playlist'
        })
      ]).then(axios.spread((res1, res2) => {
        this.categories = res1
        this.playlistsInfo = res2.playlists
      })).catch(err => {
        console.log(err);
      })
    },
    methods: {
      correctCategory(index) {
        const newArrey = new Array()
        for (let i = 0; i < this.categories.sub.length; i++) {
          let element = this.categories.sub[i];
          if (element.category == index) {
            newArrey.push(element)
          }
        }
        return newArrey
      },
      catlistClick() {
        if (this.isDisplay == 'none') {
          this.isDisplay = 'block'
        } else {
          this.isDisplay = 'none'
        }
      },
      allClick() {
        this.isDisplay = 'none'
        this.currentCat = '全部歌单'
        request({
          url: '/top/playlist',
          params: {
            cat: '全部'
          }
        }).then(res => {
          this.playlistsInfo = res.playlists
        }).catch(err => {
          console.log(err);
        })
      },
      itemClick(item) {
        this.isDisplay = 'none'
        this.currentCat = item.name
        request({
          url: '/top/playlist',
          params: {
            cat: item.name
          }
        }).then(res => {
          this.playlistsInfo = res.playlists
        }).catch(err => {
          console.log(err);
        })
      },
      musicListClick(item) {
        this.$store.commit('changeCurrentMusicListId', item.id)
        this.$store.commit('changeCurrentMusicList')
      }
    }
  }
</script>

<style>
  .main-music-list {
    padding: 20px;
    position: relative;
  }

  .main-music-list .catlist-button {
    width: 150px;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    line-height: 50px;
    cursor: pointer;
    margin: 20px;
  }

  .main-music-list .catlist-button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .main-music-list .catlist {
    width: 60vw;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    position: absolute;
    font-size: 15px;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
  }

  .main-music-list .catlist .all-music-list {
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .main-music-list .catlist .all-music-list div {
    padding: 5px 10px;
    border-radius: 50px;
  }

  .main-music-list .catlist .categories {
    display: flex;
    padding: 20px;
  }

  .main-music-list .catlist .categories .category-name {
    width: 15%;
    color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
  }

  .main-music-list .catlist .categories .category-details {
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .main-music-list .catlist .categories .category-details div {
    width: 17%;
    height: 50px;
    padding: 5px 10px;
    border-radius: 50px;
  }

  .main-music-list .catlist span {
    cursor: pointer;
    padding: 5px;
    border-radius: 50px;
  }

  .main-music-list .catlist span:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .main-music-list .play-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .main-music-list .play-list .play-list-item {
    margin: 10px;
  }

  .main-music-list .play-list .play-list-item a {
    text-decoration: none;
    color: #000;
  }

  .main-music-list .play-list .play-list-item img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin: 10px;
  }

  .main-music-list .play-list .play-list-item img:hover {
    opacity: 0.8;
  }

  .main-music-list .play-list .play-list-item div {
    font-size: 15px;
    width: 200px;
    height: 30px;
    margin: 0 10px;
  }

  .main-music-list .play-list .play-list-item div:hover {
    font-weight: bold;
  }
</style>