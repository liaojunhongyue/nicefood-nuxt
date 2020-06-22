<template>
  <div class="container">
    <!-- <nuxt-child class="child-view" /> -->
    <!-- <van-button type="primary">默认按钮</van-button> -->
    <span v-for="item in questionsList" :key="item.title">{{ item.title }}</span>
    <footer>
      <nuxt-link to="/">index</nuxt-link>
      <nuxt-link to="/find">find</nuxt-link>
      <nuxt-link to="/challenge">challenge</nuxt-link>
      <nuxt-link to="/user">user</nuxt-link>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      questionsList: []
    }
  },
  mounted() {
    this.http.get(this.api.query.appData.url).then((response) => {
      this.questionsList = response.data.data.questionsList
      // console.log(this.questionsList)
    })
  }
}
</script>
<style lang="less" scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
}
</style>
