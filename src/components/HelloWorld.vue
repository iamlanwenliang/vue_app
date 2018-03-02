<template>
  <div class="content">
    
    
    
    <router-view></router-view>
    <mt-tabbar v-model="message" fixed :value="message">
        <mt-tab-item id="HelloWorld" >
            <img slot="icon" src="../assets/user.jpg">
            主页
        </mt-tab-item>
        <mt-tab-item id="CeShi">
            <img slot="icon" src="../assets/user.jpg">
            积分商城
        </mt-tab-item>
        <mt-tab-item id="MySelf">
            <img slot="icon" src="../assets/user.jpg">
            微社区
        </mt-tab-item>
        <mt-tab-item id="CeShi1">
            <img slot="icon" src="../assets/user.jpg">
            我的
        </mt-tab-item>
    </mt-tabbar>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my first Vue.js App',
      message:'HelloWorld'
    }
  },
  props:{
        message1:String
  },
  watch: {
      message: function (val, oldVal) {
          // 这里就可以通过 val 的值变更来确定去向
          switch(val){
              case 'HelloWorld':
                  this.$router.replace('/HelloWorld/');
              break;
              case 'CeShi':
                  this.$router.replace('/HelloWorld/CeShi');
              break;
              case 'MySelf':
                  this.$router.replace('/HelloWorld/MySelf');
              break;
              case 'CeShi1':
                  this.$router.replace('/CeShi1');
              break;
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
