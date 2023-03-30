
<script setup>
import IconsWithTitles from "./IconsWithTitles.vue";
import WithDropDownList from "./WithDropDownList.vue";

const props = defineProps(['menus', 'breakPoint']);

</script>

<template>

    <IconsWithTitles :menus="props.menus" :breakPoint="props.breakPoint" />
    <WithDropDownList :menus="props.menus" :breakPoint="props.breakPoint" />


</template>

<style scoped>

</style> 