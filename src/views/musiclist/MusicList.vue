<template>
  <div class="main-music-list">
    <div>
      <div class="catlist-button">全部歌单</div>
      <div class="catlist">
        <div class="categories" v-for="(items, index) in categories.categories">
          <div class="category-name">
            <div>{{items}}</div>
            <a class="category-details" v-for="item in categories.sub">{{item.category}}</a>
          </div>
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
        categories: {}
      }
    },
    activated() {
      request({
        url: '/playlist/catlist'
      }).then(res => {
        console.log(res);
        this.categories = res
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      isShow(item, index) {
        if (item.category == index) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style>
  .main-music-list {
    padding: 20px;
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
    top: 112px;
    display: flex;
  }
</style>