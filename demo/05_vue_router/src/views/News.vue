<template>
  <div>
    <ul>
      <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "News",
    data() {
      return {
        newsArr:['new001','new002','new003','new004']
      }
    }
  }
</script>

<style scoped>

</style>
