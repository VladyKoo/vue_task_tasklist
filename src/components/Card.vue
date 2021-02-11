<template>
  <div class="card">
    <div class="card__wrapper" :style="cardColor(task.status)">
      <div class="card__index">
        <p>{{ index + 1 }}</p>
      </div>
      <div class="card__index">
        <h3>{{ task.title }}</h3>
        <p>{{ task.description }}</p>
      </div>
      <div class="card__btns">
        <span class="card__delete-btn material-icons ">
          delete
        </span>
        <span class="card__change-btn material-icons">
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
    }
  }
}
</script>

<style lang="scss">
.card__wrapper {
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
}

.card__btns {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card__delete-btn {
  margin: 10px 0;
  cursor: pointer;
  color: rgba(255, 0, 0, 0.5);

  &:hover {
    color: rgba(255, 0, 0, 0.9);
  }
  &:active {
    color: rgba(255, 0, 0, 0.5);
  }
}
.card__change-btn {
  margin: 10px 0;
  cursor: pointer;
  color: rgba(0, 0, 255, 0.5);

  &:hover {
    color: rgba(0, 0, 255, 0.9);
  }
  &:active {
    color: rgba(0, 0, 255, 0.5);
  }
}
</style>
