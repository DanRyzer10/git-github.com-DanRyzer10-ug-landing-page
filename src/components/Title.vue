<template>
    <div class="absolute h-screen w-screen z-30 top-0 left-0 flex items-center justify-center">
       <transition name="fade">
        <h1 class="font-[Lora] font-normal text-5xl text-center ">
            la mas <span class="text-blue-intense font-bold ">{{title}}</span> del Ecuador
        </h1>
       </transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref<string>("grande");

const changeTitle = (newTitle:string)=>{
    title.value = newTitle;
}
setInterval(()=>{
    changeTitle("ref");
}, 3000);
    
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>