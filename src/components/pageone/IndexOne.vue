<template>
  <div class="content">
    <mt-header fixed title="首页1"></mt-header>
    
    <img src="../../assets/user.jpg" style="width:50%;">
    <h1>{{ msg }}</h1>
    <h2>首页里面</h2>
    
     <router-link to="/HelloWorld/CeShi">home</router-link>
  </div>
  
</template>

<script>
export default {
  name: "IndexOne",
  data() {
    return {
      msg: "Welcome to my second ionic App"
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
