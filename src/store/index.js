import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: {
      baseColor: '#636e72',
      otherColor: '#2d3436',
      colorBox: ''
    }
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
    }
  },
  actions: {
  },
  modules: {
  }
})
