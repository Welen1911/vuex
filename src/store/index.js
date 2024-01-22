import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: "Welen",
      pass: "Welen123",
      email: 'welen@teste.com'
    },
    products: [
      {
        id: 1,
        name: "Bola",
        price: 100
      },
      {
        id: 2,
        name: "Chuteira",
        price: 200
      },
      {
        id: 3,
        name: "Meião",
        price: 50
      }
    ],
    cart: []
  },
  getters: {
  },
  mutations: {
    user(s, data) {
      s.user = data;
    },
    toCart(state, data) {
      state.cart.push(data);
    },
    removeCart(state, id) {
      const index = state.cart.findIndex(p => p.id == id);
      state.cart.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
