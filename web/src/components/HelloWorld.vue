<!--
 * @Author: 方小宇
 * @Date: 2021-04-21 15:12:46
 * @LastEditors: 方小宇
 * @LastEditTime: 2021-04-26 15:24:38
 * @Description: 大威天龙,宇哥出马,没有bug
-->
<template>
  <div>
    <!-- <div class="hello" v-for="(item,index) in data" :key="index" >
      <div class="title">{{item.title}}</div>
      <div class="content">{{item.content}}</div>
    </div> -->
    <div class="hello" ref="content">222</div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      data: [],
      imgUrl: ""
    };
  },
  created() {},
  methods: {},
  mounted() {
    this.axios.get("http://localhost:3000/api/getExcel").then(response => {
      response.data.data.map(item => {
        let obj = {};
        obj.title = item[0];
        obj.content = item[1];
        this.data.push(obj);
      });
      console.log(this.data);
    });
    html2canvas(this.$refs.content, {
      backgroundColor: null
    }).then(canvas => {
      let imgUrl = canvas.toDataURL("image/png");
      this.imgUrl = imgUrl;
      console.log(imgUrl)
    });
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.hello {
  background-image: url("../assets/bgc.png");
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  margin-bottom: 20px;
  position: relative;
}
.title {
  position: absolute;

  left: 18vw;
  top: 280px;
  color: #26969a;
  font-size: 20px;
}
.content {
  position: absolute;
  font-size: 18px;
  line-height: 29px;
  top: 330px;
  padding: 0 6px 0 58px;
}
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
