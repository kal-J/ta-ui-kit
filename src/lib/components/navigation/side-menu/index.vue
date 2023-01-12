
<script setup>
import IconsWithTitles from "./IconsWithTitles.vue";
import WithDropDownList from "./WithDropDownList.vue";

const props = defineProps(['menus',]);

</script>

<template>

    <IconsWithTitles :menus="props.menus" />
    <WithDropDownList :menus="props.menus" />


</template>

<style scoped>

</style> 