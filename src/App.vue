<template>
  <div class="app">
    <header class="header">
      <div class="header__nav-bar nav-bar">
        <router-link class="nav-bar__logo" to="/">Список задач</router-link>
      </div>
    </header>
    <div class="content">
      <div class="content__wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/style.scss";
@import "./styles/app.scss";
</style>
