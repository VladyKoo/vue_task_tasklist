<template>
  <div class="task">
    <div class="task__wrapper">
      <div class="task__cards">
        <div v-for="(task, index) of tasks" :key="task.id" class="task__card">
          <Card :task="task" :index="index"></Card>
        </div>
      </div>
      <button class="task__add-btn">Добавить задачу</button>
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
  }
}
</script>

<style lang="scss">
@import "../styles/taskList.scss";
</style>
