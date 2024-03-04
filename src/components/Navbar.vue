<template>
    <section class="flex  flex-row">
        <div class=" w-[25rem] h-[5rem] bg-blue-intense rounded-sm z-200 border-2 border-solid  border-white-intense " :class="isSearch?'flex animate-fade-in-down':'hidden'" >
            <input  autocomplete="none" class="flex  w-5/6 pl-[10px] focus:outline-none h-full rounded-md bg-blue-intense text-white" type="search" placeholder="Busca en UG">
            <div class="flex justify-center align-center w-1/6  cursor-pointer">
                <img src="./../../public/search.svg" width="40px" height="" alt="buscar" class="pr-3 hover:stroke-blulight">
                <div class="pr-1 border-1 rounded-md flex align-center" @click="isSearch=false">
                    <img src="./../../public/close.svg" alt="close" width="20px" class="">
                </div>
            </div>
        </div>
        <div class=" search navbar w-[10rem] z-150 h-[5rem] bg-blue-intense rounded-es flex cursor-pointer justify-center items-center" @click="search">
            <img src="./../../public/search.svg" width="" height="" alt="buscar" class=" hover:stroke-blulight">
            <p class=" searchIcon text-roboto text-[20px] ml-2 text-white-light">Buscar</p>
        </div>
        <div class="buscar navbar w-[10rem] h-[5rem] bg-blue-intense cursor-pointer flex justify-center items-center">
            <img src="./../../public/menu.svg" width="" height="" alt="buscar">
            <p class="text-roboto text-[20px] ml-2 text-white-light">Menu</p>
        </div>
    </section>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isSearch = ref<boolean>(false)
const search = ()=>{
    isSearch.value = !isSearch.value
}
onMounted(()=>{
    window.addEventListener('click',(e)=>{
        if(e.target == document.querySelector('.backgroundTitle')){
            isSearch.value = false
        }
    })
   
})


</script>

<style scoped>
input::placeholder {
  padding-left: 2px; /* Añade un "margen" al inicio del placeholder */
}
</style>