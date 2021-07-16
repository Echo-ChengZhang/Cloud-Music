<template>
  <div class="player">
    <audio :src="'https://music.163.com/song/media/outer/url?id=' + $store.state.currentMusicId + '.mp3'" id="audio"
      @canplay="handleCanPlay" @timeupdate="handleTimeUpdate" autoplay loop></audio>
    <div class="control-button">
      <div class="control-button-item">
          <img src="~@/assets/img/tabbar-icon/previous.svg" alt="">
      </div>
      <div class="control-button-item" id="play-and-pause">
        <div v-if="!isPlaying" @click="playMusic">
            <img src="~@/assets/img/tabbar-icon/play.svg" alt="">
        </div>
        <div v-else @click="pauseMusic">
            <img src="~@/assets/img/tabbar-icon/pause.svg" alt="">
        </div>
      </div>
      <div class="control-button-item">
          <img src="~@/assets/img/tabbar-icon/next.svg" alt="">
      </div>
    </div>
    <div class="progress-bar">
      <div class="current-time">{{trunsformTime(musicInfo.currentTime)}}</div>
      <div class="progress-line">
        <div class="current-line"
          :style="[{'background-color': this.$store.state.theme.baseColor}, {'width': playProgress}]">
          <div class="current-point" :style="{'left': playProgress}"></div>
        </div>
      </div>
      <div class="total-time">{{trunsformTime(musicInfo.duration)}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isPlaying: false,
        musicInfo: {
          currentTime: 0,
          duration: 0
        }
      }
    },
    methods: {
      playMusic() {
        const player = document.getElementById('audio')
        this.startRotate()
        player.play();
      },
      pauseMusic() {
        const player = document.getElementById('audio')
        this.pauseRotate()
        player.pause();
      },
      handleCanPlay(event) {
        this.musicInfo.duration = event.target.duration;
      },
      handleTimeUpdate(event) {
        this.musicInfo.currentTime = event.target.currentTime;
      },
      startRotate() {
        let rotateDuration = 10;
        let rotateStep = 0.04
        let that = this;
        let clockNum = setInterval(function () {
          that.$store.commit('changeRotateDeg', rotateStep);
        }, rotateDuration);
        this.$store.commit('changeClockNum', clockNum);
        this.isPlaying = true
      },
      pauseRotate() {
        this.$store.commit('changeClockNum', clearInterval(this.$store.state.clockNum))
        this.isPlaying = false
      },
      trunsformTime(time) {
        let tempTime = Math.floor(time)
        let minute = 0;
        let second = 0;
        if (time < 60) {
          second = tempTime
        } else {
          minute = Math.floor(tempTime / 60)
          second = tempTime % 60
        }
        if (minute < 10) {
          minute = '0' + minute
        }
        if (second < 10) {
          second = '0' + second
        }
        return minute + ':' + second
      }
    },
    computed: {
      playProgress() {
        let percent = 0
        percent = this.musicInfo.currentTime / this.musicInfo.duration * 100
        return percent + '%'
      }
    }
  }
</script>

<style>
  .player {
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .control-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .control-button-item {
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 30px;
    cursor: pointer;
  }

  .control-button-item img {
    width: 20px;
    height: 20px;
  }

  #play-and-pause {
    background-color: rgba(0, 0, 0, 0.05);
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
  }

  #play-and-pause div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #play-and-pause:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  #play-and-pause img {
    width: 25px;
    height: 25px;
  }

  .progress-bar {
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }

  .progress-line {
    height: 6px;
    width: 30vw;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 0 10px;
    border-radius: 3px;
    position: relative;
  }

  .current-line {
    height: 6px;
    width: 0;
    border-radius: 3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    background-size: 14px 6px;
    background-position: 0 0;
  }

  .current-point {
    width: 10px;
    height: 10px;
    transform: translate(-50%, 0%);
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
    position: absolute;
    top: -2px;
  }
</style>