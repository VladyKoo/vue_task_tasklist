import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: [
      { name: "active", lable: "Активна" },
      { name: "work", lable: "В работе" },
      { name: "complited", lable: "Завершена" }
    ],
    tasks: [
      {
        id: 2,
        title: "Task 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, officia!",
        status: "active",
        date: 1613061696072
      },
      {
        id: 3,
        title: "Task 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, officia!",
        status: "work",
        date: 1613061696072
      },
      {
        id: 1,
        title: "Task 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, officia!",
        status: "complited",
        date: 1613061696072
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
