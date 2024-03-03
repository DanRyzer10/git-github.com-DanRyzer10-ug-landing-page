<template>
    <section class="flex  flex-row">
        <div class="buscar navbar w-[300px] h-[5rem] hidden bg-blue-intense cursor-pointer rounded-es  justify-center items-center">
            <input class="w-full pl-[10px] h-full bg-blue-intense text-white" type="search" placeholder="Busca en UG">
        </div>
        <div class="navbar w-[10rem] h-[5rem] bg-blue-intense rounded-es flex cursor-pointer justify-center items-center">
            <img src="./../../public/search.svg" width="" height="" alt="buscar">
            <p class=" searchIcon text-roboto text-[20px] ml-2 text-white-light">Buscar</p>
        </div>
        <div class="buscar navbar w-[10rem] h-[5rem] bg-blue-intense cursor-pointer flex justify-center items-center">
            <img src="./../../public/menu.svg" width="" height="" alt="buscar">
            <p class="text-roboto text-[20px] ml-2 text-white-light">Menu</p>
        </div>
    </section>

</template>

<script setup lang="ts">

</script>

<style scoped>
input::placeholder {
  padding-left: 2px; /* Añade un "margen" al inicio del placeholder */
}
</style>