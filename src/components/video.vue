<template>
  <div id="dplayer"></div>
</template>

<script lang="ts" setup>
  import {toRefs,onMounted} from "vue"
  import DPlayer from 'dplayer';
  interface Videoinfo{
    url:string,//视频链接
    pic?:string,//视频封面
    thumbnails?:string,//视频缩略图
    type?:string,//可选值: 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal'
  }
  interface Subtitleinfo{
    url:string,//字幕链接
    type?:string,//字幕类型，可选值: 'webvtt', 'ass'，目前只支持 webvtt
    fontSize?:string,//字幕字号
    bottom?:string,//字幕距离播放器底部的距离，取值形如: '10px' '10%'
    color?:string,//字幕颜色
  }
  interface Danmakuinfo{
    id:string,//弹幕池 id，必须唯一
    api:string,//
    token?:string,//弹幕后端验证 token
    maximum?:number,//弹幕最大数量
    user?:string,//弹幕用户名
  }
  interface Menu{
    text:string,
    link?:string,
    click?:()=>void
  }
  interface Item{
    container:string,
    live?:boolean,
    autoplay?:boolean,
    theme?:string,//主题色
    loop?:boolean,//视频循环播放
    lang?:string,
    screenshot?:boolean,
    hotkey?:boolean,//开启热键，支持快进、快退、音量控制、播放暂停
    preload?:string,//视频预加载，可选值: 'none', 'metadata', 'auto'
    volume?:number,
    playbackSpeed?:Array<number>,
    logo?:string,
    video:Videoinfo,
    subtitle?:Subtitleinfo,
    danmaku?:Danmakuinfo,
    contextmenu?:Array<Menu>
    }
  //const props =  defineProps<{options:Item}>() //没有默认值
  const props=defineProps({
    options:{
      type:Object,
      required:true,
      default:()=>({
        video: {
              url: 'http://localhost:4000/welcomeHome.mp4',
          },
      })
    }
  })
  onMounted(():void=>{
    const dp = new DPlayer(Object.assign({container: document.getElementById('dplayer')},props.options));
  })
  const init=()=>{
      
  }
</script>

<style scoped lang="less">
  #dplayer{
    margin:0 auto;
    width:500px;
    height:300px;
  }
</style>
