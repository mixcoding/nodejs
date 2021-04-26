<!--
 * @Author: 方小宇
 * @Date: 2021-04-21 15:12:46
 * @LastEditors: 方小宇
 * @LastEditTime: 2021-04-26 11:00:12
 * @Description: 大威天龙,宇哥出马,没有bug
-->
<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
</style>
