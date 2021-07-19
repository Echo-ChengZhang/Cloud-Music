<template>
  <div class="leader-board">
    <div class="offical-list">
      <h2>官方榜</h2>
      <div class="offical-list-item" v-for="officalListItem in officalList()">
        <div class="offical-list-item-img" @click="toLeaderBoardDetails(officalListItem)">
          <img :src="officalListItem.coverImgUrl" alt="">
        </div>
        <div @click="toLeaderBoardDetails(officalListItem)">
          <div v-for="(item, index) in officalListItem.tracks" class="offical-list-item-songs" :class="{'singleLine': index % 2 == 0}">
            <span>{{index + 1}}&nbsp&nbsp&nbsp{{item.first}}</span>
            <span>{{item.second}}</span>
          </div>
          <div>
            <div class="to-details">查看全部 ></div>
          </div>
        </div>
      </div>
      <div class="offical-list-item">
        <div class="offical-list-item-img">
          <img :src="artistToplist.coverUrl" alt="">
        </div>
        <div>
          <div v-for="(item, index) in artistToplist.artists" class="offical-list-item-songs" :class="{'singleLine': index % 2 == 0}">
            <span>{{index + 1}}&nbsp&nbsp&nbsp{{item.first}}</span>
          </div>
          <div>
            <div class="to-details">查看全部 ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="global-list">
      <h2>全球榜</h2>
      <div>
        <div class="global-list-item" v-for="globalListItem in globalList()">
          <router-link to="/music-list-details" @click="$store.commit('changeCurrentMusicListId', globalListItem.id)">
            <img :src="globalListItem.coverImgUrl" alt="">
            <div>{{globalListItem.name}}</div>
          </router-link>
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
        leaderBoardInfo: '',
        artistToplist: ''
      }
    },
    activated() {
      request({
        url: '/toplist/detail'
      }).then(res => {
        console.log(res);
        this.leaderBoardInfo = res.list
        this.artistToplist = res.artistToplist
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      officalList() {
        const officalListArrey = new Array()
        for (let i = 0; i < this.leaderBoardInfo.length; i++) {
          let element = this.leaderBoardInfo[i];
          if (i < 4) {
            officalListArrey.push(element)
          }
        }
        return officalListArrey
      },
      globalList() {
        const officalListArrey = new Array()
        for (let i = 0; i < this.leaderBoardInfo.length; i++) {
          let element = this.leaderBoardInfo[i];
          if (i > 4) {
            officalListArrey.push(element)
          }
        }
        return officalListArrey
      },
      toLeaderBoardDetails(item) {
        this.$store.commit('changeCurrentMusicListId', item.id)
        this.$router.push('/music-list-details')
      }
    }
  }
</script>

<style>
  .leader-board {
    padding: 20px;
  }

  .leader-board .offical-list h2 {
    margin: 20px;
  }

  .leader-board .offical-list .offical-list-item {
    display: flex;
    width: 100%;
    margin: 20px;
  }

  .leader-board .offical-list .offical-list-item .offical-list-item-img img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-right: 20px;
    cursor: pointer;
  }

  .leader-board .offical-list .offical-list-item .offical-list-item-img img:hover {
    opacity: 0.8;
  }

  .leader-board .offical-list .offical-list-item div:nth-child(2) {
    flex: 1;
  }

  .leader-board .offical-list .offical-list-item .offical-list-item-songs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 40px;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
  }

  .leader-board .offical-list .offical-list-item .offical-list-item-songs:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .leader-board .offical-list .offical-list-item .to-details {
    padding: 10px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
  }

  .leader-board .offical-list .offical-list-item .to-details:hover {
    color: #000;
  }

  .leader-board .offical-list .offical-list-item .singleLine {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .leader-board .global-list {
    margin: 40px 20px 20px;
  }

  .leader-board .global-list div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .leader-board .global-list .global-list-item img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin: 20px 20px 0;
  }

  .leader-board .global-list .global-list-item img:hover {
    opacity: 0.8;
  }

  .leader-board .global-list .global-list-item a {
    color: #000;
    text-decoration: none;
  }

  .leader-board .global-list .global-list-item div {
    margin: 0 20px;
  }

  .leader-board .global-list .global-list-item div:hover {
    font-weight: bold;
  }
</style>