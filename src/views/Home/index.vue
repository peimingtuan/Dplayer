<template>
  <div>
    <h1 class="text">我是首页</h1>
    <div class="login">
      <van-button type="primary" size="small" @click="goLogin">跳转播放页</van-button>
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
      const goLogin=()=>{
        router.push('Dplayer')
      }
      return {
        state,
        goLogin
      }
    }
  })
</script>
<style >
.text {
  color: v-bind("state.color");
}
</style>