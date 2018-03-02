<template>
  <div class="content">
    <mt-header fixed title="首页2">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    
    
    <h1>{{ msg }}</h1>
    <h2>这是测试页</h2>
    <ul>
      <li><a >Core Docs</a></li>
      <li><a >Forum</a></li>
      <li><a >Community Chat</a></li>
      <li><a >Twitter</a></li>
      <br>
      <li><a >Docs for This Template</a></li>
    </ul>
     <ul>
      <li><a >Core Docs</a></li>
      <li><a >Forum</a></li>
      <li><a >Community Chat</a></li>
      <li><a >Twitter</a></li>
      <br>
      <li><a >Docs for This Template</a></li>
    </ul>
    
     
        <mt-button @click="gohome">gohome</mt-button>
    
  </div>
  
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      msg: "Welcome to HomePage"
    };
  },
  methods:{
      gohome: function () {
           this.$router.push('/HelloWorld');
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
