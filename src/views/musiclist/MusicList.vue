<template>
  <div class="main-music-list">
    <div>
      <div class="catlist-button">全部歌单</div>
      <div class="catlist">
        <div class="all-music-list">
          <a href="#">全部歌单</a>
        </div>
        <div class="categories" v-for="(items, index) in categories.categories">
          <div class="category-name">{{items}}</div>
          <div class="category-details">
            <div v-for="item in correctCategory(index)">
              <a href="#">
                {{item.name}}
              </a>
            </div>
          </div>
        </div>
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
        categories: ''
      }
    },
    activated() {
      axios.all([
        request({
          url: '/playlist/catlist'
        }),
        request({
          url: '/top/playlist'
        })
      ]).then(axios.spread((res1, res2) => {
        this.categories = res1
        console.log(res2);
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
      }
    }
  }
</script>

<style>
  .main-music-list {
    padding: 20px;
    overflow: auto;
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
    overflow: auto;
  }

  .main-music-list .catlist .all-music-list {
    padding: 20px;
  }

  .main-music-list .catlist .all-music-list a {
    padding: 5px 10px;
    border-radius: 50px;
  }

  .main-music-list .catlist .categories {
    display: flex;
    padding: 20px;
  }

  .main-music-list .catlist .categories .category-name {
    width: 15%;
    font-size: 15px;
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
    width: 20%;
    height: 50px;
  }

  .main-music-list .catlist .categories .category-details a {
    font-size: 15px;
    padding: 5px 10px;
    border-radius: 50px;
  }

  .main-music-list .catlist a {
    text-decoration: none;
    color: #000;
  }

  .main-music-list .catlist a:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>