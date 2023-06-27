<template>
    <div class="hidden md:flex flex-row items-center font-barlow text-base pt-24">
        <img class="ml-12 mr-16" src="/assets/shared/logo.svg" alt="app-logo">
        <hr class="border-1 mr-[-50px] absolute w-[30rem] xxl:w-3/6 sm:w-1 left-36 z-10 border-white opacity-25" />
        <div  class="gap-9 flex flex-row text-white backdrop-blur-2xl h-24 items-center justify-end w-full" >
            <li class="list-none cursor-pointer"> <span class="mr-[11px]">00</span> HOME</li>
            <li class="list-none cursor-pointer"><span class="mr-[11px]">01</span> DESTINATION</li>
            <li class="list-none cursor-pointer"><span class="mr-[11px]">02</span>CREW</li>
            <li class="list-none cursor-pointer mr-40 "><span class="mr-[11px]">03</span> TECHNOLOGY</li>
        </div>
    </div>

    <div class="md:hidden inline-flex w-full justify-end">
            <button @click="hamburguerMenuIsOpen = !hamburguerMenuIsOpen" class="hamburger-button">
                <img src="/assets/shared/icon-hamburger.svg" alt="Menu">
            </button>
        </div>
        <transition name="slide-fade">
            <div v-if="hamburguerMenuIsOpen" class="menu-items-mobile md:hidden w-full fixed bg-white h-full">
                <li class="list-none cursor-pointer py-2"> <span class="mr-2">00</span> HOME</li>
                <li class="list-none cursor-pointer py-2"><span class="mr-2">01</span> DESTINATION</li>
                <li class="list-none cursor-pointer py-2"><span class="mr-2">02</span>CREW</li>
                <li class="list-none cursor-pointer py-2"><span class="mr-2">03</span> TECHNOLOGY</li>
            </div>
        </transition>
</template>

<script setup>
import { ref } from 'vue';

const hamburguerMenuIsOpen = ref(false);

</script>