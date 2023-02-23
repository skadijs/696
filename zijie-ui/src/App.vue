<template>
    <div>
      <Header></Header>
    <router-view></router-view>
    </div>
    


</template>

<script setup>
import Header from "../src/views/header.vue"
import "./styles/style.scss"
// export default{
//   name:'App',
//   components:{
//     Header
//   }
// }
// import tButton from '../packages/button/index.vue'



</script>

<style lang="scss" >
body,html{
  margin: 0;
}

</style>


