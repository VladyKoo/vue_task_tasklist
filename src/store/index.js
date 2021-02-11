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
        id: 1,
        title: "Task 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, officia!",
        status: "active",
        date: 1613061696072
      },
      {
        id: 2,
        title: "Task 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, officia!",
        status: "work",
        date: 1613061696072
      },
      {
        id: 3,
        title: "Task 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, officia!",
        status: "complited",
        date: 1613061696072
      },
      {
        id: 4,
        title: "Task 4",
        description: `Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации систем массового участия. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. `,
        status: "complited",
        date: 1613061696072
      },
      {
        id: 5,
        title: "Task 5",
        description: `Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой процесс внедрения и модернизации систем массового участия. `,
        status: "complited",
        date: 1613061696072
      }
    ]
  },
  mutations: {
    deleteTask(state, id) {
      const tasks = state.tasks.filter((elem) => !(elem.id === id))
      state.tasks = tasks
    }
  },
  actions: {},
  modules: {}
})
