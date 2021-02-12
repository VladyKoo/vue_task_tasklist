<template>
  <div class="task">
    <div class="task__wrapper">
      <form class="form" @submit.prevent="changeTask">
        <div class="form__title">
          <h2>Название</h2>
          <input
            type="text"
            placeholder="Введите название задачи"
            v-model="title"
          />
          <transition name="title-warning">
            <span class="form__title-warning" v-show="titleIsNeeded">
              Необходимо ввести название
            </span>
          </transition>
        </div>
        <div class="form__textarea">
          <h2>Описание</h2>
          <textarea
            placeholder="Опишите задачу"
            v-model="description"
          ></textarea>
        </div>
        <div class="form__status">
          <h2>Статус</h2>
          <div
            v-for="(button, index) of statusName"
            :key="index"
            class="form__radio"
          >
            <input
              :id="`radio-${index}`"
              type="radio"
              name="radio"
              :value="button"
              v-model="status"
            />
            <label :for="`radio-${index}`">{{ button.ruName }}</label>
          </div>
        </div>
        <button class="form__submit-btn" type="submit">Изменить задачу</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "Task",
  components: {},
  props: {},
  data: () => ({
    title: null,
    description: null,
    titleIsNeeded: false,
    status: { name: "new", ruName: "Новая" }
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    ...mapState(["statusName", "tasks"])
  },
  methods: {
    changeTask() {
      const title = this.title || ""
      const description = this.description || ""
      if (!title.trim()) {
        this.titleIsNeeded = true
        return
      }
      this.$store.commit("changeTask", {
        id: this.id,
        title: title.trim(),
        description: description.trim(),
        status: this.status
      })
      this.$router.push({ name: "TaskList" })
    }
  },
  mounted() {
    const task = this.$store.getters.getTasksById(this.id)
    this.title = task.title
    this.description = task.description
    this.status = task.status
  }
}
</script>

<style lang="scss">
@import "../styles/task.scss";
</style>
