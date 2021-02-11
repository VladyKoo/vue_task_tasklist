<template>
  <div>
    <h1>{{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: "Task",
  components: {},
  props: {},
  data: () => ({}),
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  methods: {}
}
</script>

<style lang="scss">
@import "../styles/task.scss";
</style>
