<template>
  <div class="singers">
    <div class="singers-area">
      <div>语种：</div>
      <div class="singers-area-item">
        <div><span :class="{'area-active': isAreaActive == -1}" @click="areaClick(-1)">全部</span></div>
        <div><span :class="{'area-active': isAreaActive == 7}" @click="areaClick(7)">华语</span></div>
        <div><span :class="{'area-active': isAreaActive == 96}" @click="areaClick(96)">欧美</span></div>
        <div><span :class="{'area-active': isAreaActive == 8}" @click="areaClick(8)">日本</span></div>
        <div><span :class="{'area-active': isAreaActive == 16}" @click="areaClick(16)">韩国</span></div>
        <div><span :class="{'area-active': isAreaActive == 0}" @click="areaClick(0)">其他</span></div>
      </div>
    </div>
    <div class="singers-type">
      <div>分类：</div>
      <div class="singers-type-item">
        <div><span :class="{'type-active': isTypeActive == -1}" @click="typeClick(-1)">全部</span></div>
        <div><span :class="{'type-active': isTypeActive == 1}" @click="typeClick(1)">男歌手</span></div>
        <div><span :class="{'type-active': isTypeActive == 2}" @click="typeClick(2)">女歌手</span></div>
        <div><span :class="{'type-active': isTypeActive == 3}" @click="typeClick(3)">乐队组合</span></div>
      </div>
    </div>
    <div class="singers-initial">
      <div>筛选：</div>
      <div class="singers-initial-item">
        <div><span :class="{'initial-active': isInitialActive == -1}" @click="initialClick(-1)">热门</span></div>
        <div v-for="item in letters()"><span :class="{'initial-active': isInitialActive == item}"
            @click="initialClick(item)">{{item}}</span></div>
        <div><span :class="{'initial-active': isInitialActive == 0}" @click="initialClick(0)">#</span></div>
      </div>
    </div>
    <div class="singers-list">
      <div class="singers-list-item" v-for="singer in artists">
        <router-link to="/singer-info" @click="$store.commit('changeSingerId', singer.id)">
          <img :src="singer.picUrl" alt="">
          <div>{{singer.name}}</div>
        </router-link>
      </div>
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
        artists: '',
        isAreaActive: -1,
        isTypeActive: -1,
        isInitialActive: -1
      }
    },
    created() {
      request({
        url: '/artist/list',
        params: {
          type: -1,
          area: -1,
          initial: -1
        }
      }).then(res => {
        console.log(res);
        this.artists = res.artists
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      letters() {
        const letters = new Array()
        for (let i = 0; i < 26; i++) {
          let letter = String.fromCharCode(65 + i)
          letters.push(letter)
        }
        return letters
      },
      areaClick(num) {
        this.isAreaActive = num
        request({
          url: '/artist/list',
          params: {
            type: this.isTypeActive,
            area: this.isAreaActive,
            initial: this.isInitialActive
          }
        }).then(res => {
          console.log(res);
          this.artists = res.artists
        }).catch(err => {
          console.log(err);
        })
      },
      typeClick(num) {
        this.isTypeActive = num
        request({
          url: '/artist/list',
          params: {
            type: this.isTypeActive,
            area: this.isAreaActive,
            initial: this.isInitialActive
          }
        }).then(res => {
          console.log(res);
          this.artists = res.artists
        }).catch(err => {
          console.log(err);
        })
      },
      initialClick(num) {
        this.isInitialActive = num
        request({
          url: '/artist/list',
          params: {
            type: this.isTypeActive,
            area: this.isAreaActive,
            initial: this.isInitialActive
          }
        }).then(res => {
          console.log(res);
          this.artists = res.artists
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style>
  .singers {
    padding: 20px;
  }

  .singers .singers-area {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .singers .singers-area div:nth-child(1) {
    width: 60px;
  }

  .singers .singers-area .singers-area-item {
    flex: 1;
    margin: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .singers .singers-area .singers-area-item div {
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .singers .singers-area .singers-area-item span {
    padding: 5px 15px;
    border-radius: 50px;
    cursor: pointer;
  }

  .singers .singers-area .singers-area-item span:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .singers .singers-type {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .singers .singers-type div:nth-child(1) {
    width: 60px;
  }

  .singers .singers-type .singers-type-item {
    flex: 1;
    margin: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .singers .singers-type .singers-type-item div {
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .singers .singers-type .singers-type-item span {
    padding: 5px 15px;
    border-radius: 50px;
    cursor: pointer;
  }

  .singers .singers-type .singers-type-item span:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .singers .singers-initial {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .singers .singers-initial div:nth-child(1) {
    width: 60px;
  }

  .singers .singers-initial .singers-initial-item {
    flex: 1;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }

  .singers .singers-initial .singers-initial-item div {
    width: 80px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .singers .singers-initial .singers-initial-item span {
    padding: 5px 15px;
    border-radius: 50px;
    cursor: pointer;
  }

  .singers .singers-initial .singers-initial-item span:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .singers .singers-area .singers-area-item .area-active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .singers .singers-type .singers-type-item .type-active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .singers .singers-initial .singers-initial-item .initial-active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .singers .singers-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
  }

  .singers .singers-list .singers-list-item img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin: 20px 20px 0;
  }

  .singers .singers-list .singers-list-item img:hover {
    opacity: 0.8;
  }

  .singers .singers-list .singers-list-item a {
    color: #000;
    text-decoration: none;
  }

  .singers .singers-list .singers-list-item div {
    margin: 0 20px;
  }

  .singers .singers-list .singers-list-item div:hover {
    font-weight: bold;
  }
</style>