<template>
  <div class="task">
    <div class="task__wrapper">
      <form @submit.prevent="createTask"></form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  data: () => ({}),
  computed: {},
  methods: {
    createTask() {}
  }
}
</script>

<style lang="scss">
@import "../styles/create.scss";
</style>
