<template>
  <div>
    <h1 class="text">我是首页</h1>
    <div class="main">
       <van-button type="primary" size="small" @click="goZb">跳转Dplayer直播页</van-button><br/><br/>
      <van-button type="primary" size="small" @click="goPlayer">跳转Dplayer点播页</van-button>
    </div>
  </div>
</template>
<script lang="ts">
  import {defineComponent,reactive} from "vue"
  import { useRouter } from "vue-router";
  export default defineComponent({
    name:'home',
    setup(){
      const state=reactive({
        color: "#333",
      });
      let router=useRouter()
      const goZb=()=>{
        router.push('zb')
      }
      const goPlayer=()=>{
        router.push('Dplayer')
      }
      return {
        state,
        goZb,
        goPlayer
      }
    }
  })
</script>
<style >
.text {
  color: v-bind("state.color");
}
</style>