<template>
    <div class="container">
        <button :class="tClass">
          <span><slot></slot></span>
        </button>
    </div > 
   
  
  
  </template>
  <script>
  export default{
    name:"tButton"
  }
  </script> 
  <script setup >
  import {computed}from 'vue'
  const props=defineProps({
    type:{
    type:String,
    default:"default"
  },
    disabled:Boolean,
    round:Boolean,
    size:{
      type:String,
      default:"default",
    },
  
  })  
  const tClass=computed(()=>{
    return [
    props.size == "default"
        ? "t-button"
        : props.size == "medium"
        ? "t-button-medium"
        : props.size == "small"
        ? "t-button-small"
        : props.size == "mini"
        ? "t-button-mini"
        : "t-button",
      props.type ? (props.disabled ? "" : `t-button-${props.type}`) : "",
      props.disabled ? `t-button-${props.type}-disabled` : "",
      {
        "t-button-round":props.round
      },
    ];
  });
  </script>
    
  <style lang="scss" scoped>
  @import '../src/styles/style.scss';
  .container{
    display: inline-block;
    margin-right: 10px;
  }
  .t-button{
    border: 0;
    padding: 12px 24px;
    outline: none;
    background: $primary;
    line-height: 1;
    font-size: 14px;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
    margin-right: 10px;
    &:hover,&:focus{
      opacity: .8;
    }
  }  
  span{
    display: inline-block;
  }
  .t-button-medium{
    padding: 8px 18px;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    border-radius: 2px;
    background:$success;
    user-select: none;
    overflow: hidden;
    line-height: 1;
  }
  .t-button-small{
    padding: 7px 12px;
    outline: none;
    cursor: pointer;
    font-size: 12px;
    border-radius: 2px;
    background:$warning;
    user-select: none;
    overflow: hidden;
    line-height: 1;
  }
  .t-button-mini{
    padding: 6px 11px;
    outline: none;
    cursor: pointer;
    font-size: 11px;
    border-radius: 2px;
    background:$error;
    user-select: none;
    overflow: hidden;
    line-height: 1;
  }
  .t-button-default{
    color:  #333;
    border: 1px solid #dcdcdc;
    &:hover,&:focus{
      color: $primary;
      border-color: lightblue;
      background-color: #dcdcdc;
    }
    &:active{
      opacity: 1;
    }
  }
  .t-button-primary{
    color:  #fff;
    background:$primary;
    border-color: $primary;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
  .t-button-success{
    color:  #fff;
    background:$success;
    border-color: $success;
  }
  .t-button-info{
    color:  #fff;
    background:$info;
    border-color: $info;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
  .t-button-danger{
    color:  #fff;
    background:$danger;
    border-color:$danger;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
  .t-button-warning{
    color:  #080808;
    background:$warning;
    border-color: $warning;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
  .t-button-error{
    color:  #fff;
    background:$error;
    border-color: $error;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
  .t-button-default-disabled{
    opacity: .4;
    cursor: no-drop;
    &:hover,&:focus {
      opacity: .4;
    }
  }

  .t-button-primary-disabled{
    opacity: .4;
    cursor: no-drop;
    background: $primary;
    &:hover,&:focus {
      opacity: .4;
    }
  }

  .t-button-success-disabled{
    opacity: .4;
    cursor: no-drop;
    background: $success;
    &:hover,&:focus {
      opacity: .4;
    }
  }

  .t-button-info-disabled{
    opacity: .4;
    cursor: no-drop;
    background:$info;
    &:hover,&:focus {
      opacity: .4;
    }
  }

  .t-button-warning-disabled{
    opacity: .4;
    cursor: no-drop;
    background: $warning;
    &:hover,&:focus {
      opacity: .4;
    }
  }

  .t-button-danger-disabled{
    opacity: .4;
    cursor: no-drop;
    background: $danger;
    &:hover,&:focus {
      opacity: .4;
    }
  }



  .t-button-round{
    border-radius: 20px;
  }
  </style>
  