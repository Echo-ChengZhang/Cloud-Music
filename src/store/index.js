import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    theme: {
      baseColor: '#636e72',
      otherColor: '#2d3436',
      colorBox: ''
    },
    currentMusicId: 1828858733,
    currentMusicName: '',
    currentMusicSinger: [],
    currentMusicListId: 0,
    currentAlbumId: 0,
    currentAlbumName: '',
    currentAlbumPicUrl: '',
    singerId: 0,

    lastMusicId: 0,
    nextMusicId: 0,

    sideBarIsShow: true,
    rotateDeg: 0,
    clockNum: 0,
    isPlaying: false,

    searchKeywords: ''
  },
  mutations: {
    changeBaseColor(state, color) {
      state.theme.baseColor = color
    },
    changeOtherColor(state, color) {
      state.theme.otherColor = color
    },
    changeColorBox(state, color) {
      state.theme.colorBox = color
    },
    changeSideBarStyle(state) {
      state.sideBarIsShow = !state.sideBarIsShow
    },
    exchangePlayStatus(state, boolean) {
      state.isPlaying = boolean
    },
    startRotate(state) {
      let rotateDuration = 10;
      let rotateStep = 0.04;
      let clockNum = setInterval(function () {
        state.rotateDeg += rotateStep;
      }, rotateDuration);
      state.clockNum = clockNum;
    },
    pauseRotate(state) {
      clearInterval(state.clockNum)
    },

    changeCurrentMusicId(state, info) {
      state.currentMusicId = info
    },
    changeCurrentMusicName(state, info) {
      state.currentMusicName = info
    },
    changeCurrentMusicSinger(state, info) {
      state.currentMusicSinger = info
    },

    changeCurrentAlbumId(state, info) {
      state.currentAlbumId = info
    },
    changeCurrentAlbumName(state, info) {
      state.currentAlbumName = info
    },
    changeCurrentAlbumPicUrl(state, info) {
      state.currentAlbumPicUrl = info
    },

    changeCurrentMusicListId(state, info) {
      state.currentMusicListId = info
    },

    changeSingerId(state, info) {
      state.singerId = info
    },

    changeLastMusicId(state, info) {
      state.lastMusicId = info
    },
    changeNextMusicId(state, info) {
      state.nextMusicId = info
    },

    changeSearchKeywords(state, info) {
      state.searchKeywords = info
    }
  },
  actions: {},
  modules: {}
})