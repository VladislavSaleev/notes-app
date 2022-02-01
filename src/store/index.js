import { createStore } from 'vuex'

export default createStore({
  // //like a data(){}
  state: () => ({
    likes: 123,
    isAuth: false,
  }),
  // //like a computed
  // getters: {
  //   doubleLikes(state) {
  //     return state.likes * 2
  //   }
  // },
  // mutations: {
  //   incrementLikes(state) {
  //     state.likes += 1
  //   },
  //   decrementLikes(state) {
  //     state.likes -= 1
  //   }
  // },
  // actions: {

  // },
  modules: {

  }
})