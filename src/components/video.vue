<template>
  <div id="dplayer"></div>
</template>

<script lang="ts" setup>
  import {onMounted} from "vue"
  import DPlayer from 'dplayer';
  import {Videoinfo,Subtitleinfo,Danmakuinfo,Menu,Item} from "./video.ts"
  //const props =  defineProps<{options:Item}>() //没有默认值
  const props=defineProps({
    options:{
      type:Object,
      required:true,
      default:()=>({
        video: {
              url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4'//'http://localhost:4000/welcomeHome.mp4',
          },
      })
    }
  })
  onMounted(():void=>{
    const dp = new DPlayer(Object.assign({container: document.getElementById('dplayer')},props.options));
  })
  const init=()=>{
      console.log('init')
  }
  defineExpose(
    {
      init
    }
  )

</script>

<style scoped lang="less">
  #dplayer{
    margin:0 auto;
    width:500px;
    height:300px;
  }
</style>
