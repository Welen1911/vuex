import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: "Welen",
      pass: "Welen123",
      email: 'welen@teste.com'
    },
    products: [],
    cart: []
  },
  getters: {
  },
  mutations: {
    user(s, data) {
      s.user = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
