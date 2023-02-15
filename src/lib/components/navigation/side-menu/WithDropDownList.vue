
<script setup>
import { v4 as uuidv4 } from "uuid";
import MenuItem from "./MenuItem.vue";

const props = defineProps(['menus',]);

</script>

<template>

    <nav v-for="menu in props?.menus" class="hidden md:flex flex-col space-y-sm w-side-menu-lg max-w-side-menu-lg bg-side-menu-bg">

        <MenuItem :key="uuidv4()" :onClickHandler="menu.onClickHandler" :menuName="menu.name" :subMenuItems="menu.items"
            :icon="menu.icon" :menu="menu" />
    </nav>

</template>

<style scoped>

</style> 