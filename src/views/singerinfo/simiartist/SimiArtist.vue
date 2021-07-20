<template>
  <div class="simi-artists">
    <div class="simi-artist" v-for="item in simiArtists">
      <router-link to="/singer-info" @click="simiArtistClick(item)">
        <img :src="item.picUrl" alt="">
        <p>{{item.name}}</p>
      </router-link>
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
        simiArtists: ''
      }
    },
    activated() {
      request({
        url: '/simi/artist',
        params: {
          id: this.$store.state.singerId
        }
      }).then((res) => {
        console.log(res);
        this.simiArtists = res.artists
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      simiArtistClick(item) {
        this.$store.commit('changeSingerId', item.id)
        this.$store.commit('changeSingerInfo')
      }
    }
  }
</script>

<style>
  .simi-artists {
    margin-top: 20px;
  }

  .simi-artists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .simi-artists .simi-artist {
    margin: 20px;
  }

  .simi-artists .simi-artist a {
    color: #000;
    text-decoration: none;
  }

  .simi-artists .simi-artist img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
  }

  .simi-artists .simi-artist p {
    margin: 5px;
  }
</style>