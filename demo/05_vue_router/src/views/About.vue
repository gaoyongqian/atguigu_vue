<template>
  <div>
    <h2>About</h2>
    {{msg}}
    <br>
    <input type="text">
  </div>
</template>

<script>
  export default {
    name: "About",
    props:{
      msg:String
    }
  }
</script>

<style>

</style>
