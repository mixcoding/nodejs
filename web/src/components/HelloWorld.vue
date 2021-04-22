<!--
 * @Author: 方小宇
 * @Date: 2021-04-21 15:12:46
 * @LastEditors: 方小宇
 * @LastEditTime: 2021-04-21 16:57:23
 * @Description: 大威天龙,宇哥出马,没有bug
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  created() {

  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
