import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusName: [
      { name: "new", ruName: "Новая" },
      { name: "work", ruName: "В работе" },
      { name: "complited", ruName: "Выполнена" }
    ],
    // tasks: [
    //   {
    //     id: "1",
    //     title: "Task 1",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, officia!",
    //     status: { name: "new", ruName: "Новая" },
    //     date: 1613061696072
    //   },
    //   {
    //     id: "2",
    //     title: "Task 2",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, officia!",
    //     status: { name: "work", ruName: "В работе" },
    //     date: 1613061696072
    //   },
    //   {
    //     id: "3",
    //     title: "Task 3",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, officia!",
    //     status: { name: "complited", ruName: "Выполнена" },
    //     date: 1613061696072
    //   }
    // ],
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]")
  },
  getters: {
    getTasksById: (s) => (id) => s.tasks.find((task) => task.id === id)
  },
  mutations: {
    deleteTask(state, id) {
      const tasks = state.tasks.filter((task) => !(task.id === id))
      state.tasks = tasks
      localStorage.setItem("tasks", JSON.stringify(state.tasks))
    },
    addTask(state, payload) {
      const task = {
        id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
        title: payload.title,
        description: payload.description,
        status: { name: "new", ruName: "Новая" },
        date: Date.now()
      }
      state.tasks.push(task)
      localStorage.setItem("tasks", JSON.stringify(state.tasks))
    },
    changeTask(state, payload) {
      const tasks = state.tasks.concat()
      const taskIndex = tasks.findIndex((task) => task.id === payload.id)
      const task = {
        id: payload.id,
        title: payload.title,
        description: payload.description,
        status: payload.status,
        date: tasks[taskIndex].date
      }
      state.tasks[taskIndex] = task
      localStorage.setItem("tasks", JSON.stringify(state.tasks))
    }
  },
  actions: {}
})
