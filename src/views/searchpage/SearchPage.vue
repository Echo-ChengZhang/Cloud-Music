<template>
  <div class="search-page">
    <h2>找到{{searchSongs.length}}首单曲</h2>
    <div class="search-list">
      <ul>
        <li v-for="(item, index) in searchSongs">
          <div class="music-info" :class="{'single': index % 2 == 0}">
            <div>
              <router-link to="/playing" @click="songClick(item)">{{item.name}}</router-link>
            </div>
            <div class="music-info-singer">
              <router-link to="/artist" v-for="singer in item.artists" @click="singerClick(singer)">
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
  } from '@/api/request'

  export default {
    data() {
      return {
        searchSongs: {}
      }
    },
    activated() {
      request({
        url: '/search',
        params: {
          keywords: this.$store.state.searchKeywords
        }
      }).then(res => {
        console.log(res.result.songs);
        this.searchSongs = res.result.songs
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      songClick(item) {
        this.$store.commit('changeCurrentMusicId', item.id)
        this.$store.commit('changeCurrentMusicName', item.name)
        this.$store.commit('changeCurrentMusicSinger', item.artists)
        this.$store.commit('changeCurrentAlbumName', item.album.name)
        this.$store.commit('changeCurrentAlbumId', item.album.id)
        request({
          url: '/album',
          params: {
            id: item.album.id
          }
        }).then(res => {
          this.$store.commit('changeCurrentAlbumPicUrl', res.album.picUrl)
        })
      },
      singerClick(singer) {
        this.$store.commit('changeSingerId', singer.id)
      }
    }
  }
</script>

<style>
  .search-page {
    padding: 20px;
  }

  .search-page h2 {
    margin: 10px;
  }

  .search-list ul {
    list-style-type: none;
    padding: 0;
  }

  .search-list .music-info {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .search-list .music-info a {
    color: #000;
    text-decoration: none;
    font-size: 15px;
    padding-left: 10px;
  }

  .search-list .music-info div {
    flex: 1;
    height: 100%;
  }

  .search-list .single {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .search-list .music-info:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .search-list .music-info .music-info-singer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>