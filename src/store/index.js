import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: {
      baseColor: '#636e72',
      otherColor: '#2d3436',
      colorBox: ''
    },
    currentMusicId: 1303289043,
    currentMusicName: '',
    currentMusicUrl: '',
    currentMusicSinger: [],
    currentMusicListId: 0,
    currentAlbumId: 0,
    currentAlbumName: '',
    lastMusicId: 0,
    nextMusicId: 0,
    sideBarIsShow: true,
    rotateDeg: 0,
    clockNum: 0
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
    changeCurrentMusicId(state, info) {
      state.currentMusicId = info
    },
    changeCurrentMusicName(state, info) {
      state.currentMusicName = info
    },
    changeCurrentMusicUrl(state, info) {
      state.currentMusicUrl = info
    },
    changeCurrentMusicSinger(state, info) {
      state.currentMusicSinger = info
    },
    changeCurrentMusicInfo(state, info) {
      state.currentMusicInfo = info
    },
    changeCurrentMusicListId(state, info) {
      state.currentMusicListId = info
    },
    changeSingerId(state, info) {
      state.singerId = info
    },
    changeCurrentAlbumId(state, info) {
      state.currentAlbumId = info
    },
    changeCurrentAlbumName(state, info) {
      state.currentAlbumName = info
    },
    changeLastMusicId(state, info) {
      state.lastMusicId = info
    },
    changeNextMusicId(state, info) {
      state.nextMusicId = info
    },
    changeSideBarStyle(state) {
      state.sideBarIsShow = !state.sideBarIsShow
    },
    changeRotateDeg(state, num) {
      state.rotateDeg += num
    },
    changeClockNum(state, num) {
      state.clockNum = num
    }
  },
  actions: {
  },
  modules: {
  }
})
