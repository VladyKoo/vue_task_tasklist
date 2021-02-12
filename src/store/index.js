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
        status: state.statusName[0],
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
