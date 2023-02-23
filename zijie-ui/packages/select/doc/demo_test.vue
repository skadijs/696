<!--  -->
<template>
  <div>
        <m-select :options="options"  @change="change" placeholder="请选择"
        v-model="sleval"></m-select>
  </div>
</template>

<script setup>
import {reactive,ref} from 'vue'
const sleval = ref('america')
const state= reactive({
    options:[
        {
            label:"中国",
            value:"china"
        },
        {
            label:"美国",
            value:"america",
            // disabled:true
        },
        {
            label:"日本",
            value:"japan"
        }
    ]
})
const {options} =state
const change = (e) =>{
    // console.log(e);
    console.log(sleval.value);
}
</script>

<style lang="scss" scoped>

</style>
