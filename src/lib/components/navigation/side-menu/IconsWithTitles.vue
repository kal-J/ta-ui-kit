
<script setup>
import { v4 as uuidv4 } from "uuid";
import { ref, watchEffect } from "vue";

const props = defineProps(['menus',]);
console.log(props.menus);

const activeMenu = ref("");

const handleMenuClick = (e, menu) => {
    e.preventDefault();
    menu?.onClickHandler();
    activeMenu.value = menu.name;
}

watchEffect(() => {
    document.getElementById(activeMenu.value)?.focus();
})

const log = (message) => {
    console.log(message);
}

</script>

<template>

    <div class="flex h-screen w-16 flex-col justify-between border-r bg-white md:hidden">
        <div>
            <div class="inline-flex h-16 w-16 items-center justify-center">
                <span class="block h-10 w-10 rounded-lg bg-gray-200"></span>
            </div>

            <div class="border-t border-gray-100">

                <nav class="flex flex-col p-2">

                    <ul v-for="(menu, index) in props.menus" class="space-y-sm border-gray-100 pt-xs">
                        <li class="py-2">
                            <a :tabindex="index" 
                            href="" @click="(e) => { handleMenuClick(e, menu) }"
                                class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 active:bg-gray-50">
                                <vue-feather class="h-5 w-5 opacity-75 hover:text-active active:text-active"
                                    v-if="menu?.icon" :type="menu?.icon"></vue-feather>

                                <span 
                                    v-if="menu?.items?.length && (activeMenu == menu.name)"
                                    class="absolute left-full top-0 ml-2  px-2 py-1.5 font-medium  opacity-0  hover:z-20 active:z-20 group-hover:opacity-100 group-active:opacity-100 group-hover:bg-gray-50 group-active:bg-gray-50 hover:bg-gray-50 active:bg-gray-50  w-40 group-active:block group-hover:block hidden"
                                    :class="activeMenu == menu.name ? '' : 'hidden'">
                                    <nav v-for="item in menu?.items" class="flex flex-col space-y-4">

                                        <a @click="item.onClickHandler" :key="item?.id || uuidv4()" href="#"
                                            class="flex items-center border-l-[3px] border-green-500  px-4 py-3 hover:text-green-700  hover:bg-green-50 active:bg-green-50  active:text-green-700">
                                            <span class="ml-3 text-sm font-medium"> {{ item.name }} </span>
                                        </a>
                                    </nav>
                                </span>
                            </a>
                        </li>


                    </ul>
                </nav>

            </div>
        </div>


    </div>



</template>

<style scoped>
/* * {
    outline-style: solid;
    outline-color: red;
} */
</style>