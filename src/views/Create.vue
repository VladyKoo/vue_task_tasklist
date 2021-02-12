<template>
  <div class="task">
    <div class="task__wrapper">
      <form class="form" @submit.prevent="addTask">
        <div class="form__title">
          <h2>Название</h2>
          <input type="text" placeholder="Введите название задачи" v-model="title" />
          <transition name="title-warning">
            <span class="form__title-warning" v-show="titleIsNeeded">
              Необходимо ввести название
            </span>
          </transition>
        </div>
        <div class="form__textarea">
          <h2>Описание</h2>
          <textarea placeholder="Опишите задачу" v-model="description"></textarea>
        </div>
        <button class="form__submit-btn" type="submit">Создать задачу</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  data: () => ({
    title: null,
    description: null,
    titleIsNeeded: false
  }),
  methods: {
    addTask() {
      const title = this.title || ""
      const description = this.description || ""
      if (!title.trim()) {
        this.titleIsNeeded = true
        return
      }
      this.$store.commit("addTask", { title: title.trim(), description: description.trim() })
      this.$router.push({ name: "TaskList" })
    }
  }
}
</script>

<style lang="scss">
@import "../styles/create.scss";
</style>
