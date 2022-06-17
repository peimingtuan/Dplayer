<template>
  <h1>Dplayer播放器</h1>
  <video-demo ref="videoDemo"/>
  <div class="opera-btn">
    <van-button type="primary" size="mini" @click="goLogin">返回首页</van-button>
    <van-button type="primary" size="mini" @click="changeVideo">切换视频</van-button>
  </div>
</template>
<script lang="ts" setup="props">
  import {reactive,ref} from "vue"
  import { useRouter } from "vue-router";
  import VideoDemo from "@/components/video.vue"
  const router = useRouter();
  const goLogin = () => {
    router.push("/");
  };
  const videoDemo=ref(null)
  let options=reactive({  
            container:'',
            live:false,
            autoplay:true,
            theme:'#b7daff',
          })
  const changeVideo=()=>{
      videoDemo.value.init()
  }
</script>
<style lang="less" scoped>
  .opera-btn{
    width:500px;
    margin:5px auto;
    text-align: left;
  }
</style>