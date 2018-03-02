<template>
  <div class=" " style="">
    <!-- <mt-header fixed title="个人">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="handleClose"></mt-button>-->
        <!-- <mt-button @click="handleClose">close</mt-button> -->
      <!-- </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header> --> 
    
    <img src="../assets/user.jpg" style="width:50%;margin:0 auto;">
    <h1>{{ msg }}</h1>
    <h2>这是主页</h2>
    <p>{{name}}</p>
    <h2>欢迎来到我的主页不知道放什么，就暂时放个美女照吧！</h2>
     
        <mt-button @click="gohome">gohome</mt-button>
    
  </div>
  
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      msg: "Welcome to HomePage",
      name:''
    };
  },
  methods:{
      gohome: function () {
           this.$router.push('/HelloWorld');
      },
      getdata1: function(){
        this.$http.post('http://f.apiplus.net/fc3d-20.json',JSON.stringify({}),{
          headers: {
            'Access-Control-Allow-Origin':'*'
          }
        }).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
      },
      getdata: function(){
       $.ajax({
          type: 'GET',
          url: 'http://f.apiplus.net/fc3d-20.json?callback=?',
          dataType: 'jsonp',
          success: function(data){
            console.log(data);
          },
          error: function(xhr, type){
            alert('Ajax error!')
          }
        })
      }
      
        
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  text-align: center;
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
