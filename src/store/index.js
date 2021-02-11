import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "task1",
        description: "task description",
        status: "active",
        date: 1613061696072
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
