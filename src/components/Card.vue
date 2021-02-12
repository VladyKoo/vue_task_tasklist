<template>
  <div class="card">
    <div class="card__wrapper" :style="cardColor(task.status.name)">
      <div class="card__index">
        <span>{{ index + 1 }}</span>
      </div>
      <div class="card__title" :class="{ card__title_crossed: isComplited }">
        <h3>{{ task.title }}</h3>
        <span>{{ task.description }}</span>
      </div>
      <div class="card__status">
        <span>{{ task.status.ruName }}</span>
      </div>
      <div class="card__date">
        <span>{{ date }}</span>
        <span>{{ time }}</span>
      </div>
      <div class="card__btns">
        <span class="card__delete-btn material-icons" @click="deleteTask">
          delete
        </span>
        <span class="card__change-btn material-icons" @click="toTask">
          create
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    task: Object,
    index: Number
  },
  data: () => ({}),
  computed: {
    isComplited() {
      return this.task.status.name === "complited" ? true : false
    },
    date() {
      const fullDate = new Date(this.task.date)
      return `${fullDate.getDate()}.${fullDate.getMonth()}.${fullDate.getFullYear()}`
    },
    time() {
      const fullDate = new Date(this.task.date)
      return `${fullDate.getHours()}:${fullDate.getMinutes()}`
    }
  },
  methods: {
    cardColor(value) {
      if (value === "new") return { background: "#a7ffeb" }
      else if (value === "work") return { background: "#f0f4c3" }
      else if (value === "complited") return { background: "#f5f5f5" }
    },
    deleteTask() {
      const id = this.task.id
      this.$store.commit("deleteTask", id)
    },
    toTask() {
      const id = this.task.id
      this.$router.push({ name: "Task", params: { id } })
    }
  }
}
</script>

<style lang="scss">
@import "../styles/card.scss";
</style>
