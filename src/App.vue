<template>
  <div id="app1" style="height:100%;overflow:auto;">
    
    <!-- <img src="./assets/user.jpg" style="width:50%;"> -->
  
    <router-view/>
  

    
     
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@font-face{
	font-family:'huawenxinwei';
	src:url(css/font2.ttf);
	font-weight:normal;
	font-style:normal;
}
html{
  height:100%;
  width:100%;
  padding:0;
  margin:0;
}
body{
  height:100%;
  width:100%;
  padding:0;
  margin:0;
  font-family:'huawenxinwei' !important;
}
.content{
  margin:40px 0 55px 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,'huawenxinwei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0;
}
</style>
