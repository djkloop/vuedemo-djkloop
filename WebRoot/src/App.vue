<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
import Vue from 'vue'
import Util from './login/user-paswd.js'

export default {
  name: 'app',
  watch:{
    $route(to,from){
      console.log(to.path)
    }
  },
  mounted(){
		
  },
  methods:{
		
  }
}
</script>
<style>
  #app{
    width: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height:100%;
  }
</style>