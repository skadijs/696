<!--  -->
<template>
    <div>
          <m-select :options="options" filedLabel="name" filedValue="id"></m-select>
    </div>
  </template>
  
  <script setup>
  import {reactive} from 'vue'
  const state= reactive({
      options:[
          {
              name:"中国",
              id:"china"
          },
          {
              name:"美国",
              id:"america",
              disabled:true
          },
          {
              name:"日本",
              id:"japan"
          }
      ]
  })
  const {options} =state
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  