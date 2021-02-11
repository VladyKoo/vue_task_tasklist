<template>
  <div class="task">
    <div class="task__wrapper">
      <div class="task__cards" v-if="tasks.length">
        <div v-for="(task, index) of tasks" :key="task.id" class="task__card">
          <Card :task="task" :index="index"></Card>
        </div>
      </div>
      <div v-else class="task__cars_empty">
        <h3>Задач нет</h3>
      </div>
      <div class="task__add-btn">
        <router-link to="/create">Добавить задачу</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Card from "../components/Card.vue"
export default {
  name: "TaskList",
  components: { Card },
  computed: {
    ...mapState(["tasks"])
  },
  methods: {}
}
</script>

<style lang="scss">
@import "../styles/taskList.scss";
</style>
