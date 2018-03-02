<template>
  <div class="self">
    <mt-header fixed title="个人">
      <!-- <router-link to="/" slot="left">
        <mt-button icon="back" ></mt-button>
      </router-link> -->
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    
    <img src="../assets/user.jpg" style="width:50%;">
    <h1>{{ msg }}</h1>
    <h2>我的个人</h2>
    <ul>
      <li><a  >Core Docs</a></li>
      <li><a >Forum</a></li>
      <li><a >Community Chat</a></li>
      <li><a >Twitter</a></li>
      <br>
      <li><a  >Docs for This Template</a></li>
    </ul>
     <ul>
      <li><a >Core Docs</a></li>
      <li><a >Forum</a></li>
      <li><a >Community Chat</a></li>
      <li><a >Twitter</a></li>
      <br>
      <li><a >Docs for This Template</a></li>
    </ul>
   
     <mt-button  @click="gohome">去测试页</mt-button>
  </div>
  
</template>

<script>
export default {
  name: "MySelf",
  data() {
    return {
      msg: "Welcome to my first Vue.js App"
    };
  },
  methods:{
     gohome: function () {
           this.$router.push('/CeShi');
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
