<template>
    <div class="absolute h-screen w-screen z-30 top-0 left-0 flex items-center justify-center">
        <h1 class="font-[Lora] font-normal text-6xl text-center animate-blurred-fade-in" >
            La mas <span  v-bind:class="title==='gloriosa'?'text-blue-light':(title==='importante'?'text-blue-mid':'text-blue-intense')" :class="isChange? 'animate-fade-in':''">{{title}}</span> del Ecuador
        </h1>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const title = ref<string>("grande");
const options = ref(["grande","gloriosa","importante"])
let index = 1
const isChange = ref(false);

const changeTitle = ()=>{
  title.value = options.value[index];
  index = index === 2 ? 0 : index + 1;
}
setInterval(()=>{
    changeTitle();
}, 3000);

watch(title, ()=>{
  isChange.value = true;
  new Promise(resolve => setTimeout(resolve, 500)) // Espera 0.5 segundos (la duración de la animación)
    .then(() => isChange.value = false);
})
</script>


<style scoped>
</style>