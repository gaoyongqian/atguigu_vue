<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
          <router-link to="/home/news">News</router-link>
          <router-link to="/home/message">Message</router-link>
        <!--<li><a href="#/home/news" class="router-link-exact-active activeClass">News</a></li>-->
        <!--<li><a href="#/home/message" class="">Message</a></li>-->
      </ul>
      <div>
        <router-view></router-view>
        <!--<ul>-->
          <!--<li>news01</li>-->
          <!--<li>news03</li>-->
          <!--<li>news05</li>-->
        <!--</ul>-->
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
