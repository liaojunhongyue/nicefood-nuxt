<template>
  <div class="container">
    <nuxt-child class="child-view" />
    <footer>
      <nuxt-link to="/">index</nuxt-link>
      <nuxt-link to="/find">find</nuxt-link>
      <nuxt-link to="/challenge">challenge</nuxt-link>
      <nuxt-link to="/user">user</nuxt-link>
    </footer>
  </div>
</template>

<style lang="less" scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
}
</style>
