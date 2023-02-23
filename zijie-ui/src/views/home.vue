<!--  -->
<template>
  <div class="container">
    <div class="left-menu">
        <li v-for="(item,index) in menuList[0].children" :key="index" :class="{active:activeIndex == index
        }"
        @click="switchMenu(item,index)">
            {{ item.name }}
        </li>
    </div>
    <div class="router-view">

    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import menuList from '@/router/routerPage/pages.js'
import {useRouter} from 'vue-router'
import {ref} from 'vue'
const activeIndex = ref(0)
const router  =useRouter()
const switchMenu = (item,index) =>{
    activeIndex.value = index
    router.push({
        name:item.name
    })
}
console.log(menuList);
// export default {

// }
</script>

<style lang="scss" scoped>
h1{
    display: block;
    overflow: hidden;
}
.container{
    width: 100%;
    height: 100%;
    display: flex;
    .left-menu{
        width: 160px;
        height: auto;
        overflow-y:auto;
        border-right: 8px solid #f0f0f0;
        li {
            list-style: none;
            line-height: 60px ;
            padding: 0 10px;
            box-sizing: border-box;
            font-size: 20px;
            cursor: pointer;
        }

        li.active{
            border-right: 4px solid #0e80eb;
            // border-bottom:1px solid #0e80eb;
            color: #0e80eb;
            background: rgba(14,128,235,.1);
        }


       
    }
    .router-view{
        flex:0.1;
        height: auto;
        overflow-y: auto;
    }
    
}
</style>
