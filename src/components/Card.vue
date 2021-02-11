<template>
  <div class="card">
    <div class="card__wrapper" :style="cardColor(task.status)">
      <div class="card__index">
        <p>{{ index + 1 }}</p>
      </div>
      <div class="card__title">
        <h3>{{ task.title }}</h3>
        <p>{{ task.description }}</p>
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
  computed: {},
  methods: {
    cardColor(value) {
      if (value === "active") return { background: "#a7ffeb" }
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
