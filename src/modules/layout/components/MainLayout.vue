<template>
    <div class="absolute inset-0 bg-cover h-screen bg-background-home-mobile md:bg-background-home-tablet lg:bg-background-home-desktop">
        <Navbar/>
        <HomeInfo/>
    </div>
</template>

<script setup>
import HomeInfo from './HomeInfo/HomeInfo.vue';
import Navbar from './Navbar/Navbar.vue';
</script>