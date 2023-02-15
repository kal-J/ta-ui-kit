
<script setup>
import { v4 as uuidv4 } from "uuid";

const props = defineProps(['subMenuItems', 'menuName', 'onClickHandler', 'icon', 'menu']);

</script>

<template>

    <a v-if="!props?.subMenuItems?.length" href="#"
        class="active:text-active hover:text-active flex items-center px-4 py-2 text-gray-700"
        :class="menu?.active ? 'text-active' : '' "
        @click="props.onClickHandler">
        <vue-feather class="h-5 w-5 opacity-75" v-if="props?.icon" :type="props?.icon"></vue-feather>

        <span class="ml-3 text-sm font-medium">{{ props?.menuName }}</span>
    </a>

    <details v-else class="group [&_summary::-webkit-details-marker]:hidden">
        <summary
            class="flex items-center px-4 py-2 text-gray-500 rounded-lg group hover:bg-gray-100 hover:text-active">
            <vue-feather class="h-5 w-5 opacity-75" v-if="props?.icon" :type="props?.icon"></vue-feather>
            <span @click="props.onClickHandler" class="ml-3 text-sm font-medium ">
                {{ props?.menuName }}
            </span>

            <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd" />
                </svg>
            </span>
        </summary>

        <nav v-for="item in props?.subMenuItems" class="flex flex-col mt-2 ml-8 space-y-1">

            <a :key="item?.id || uuidv4()" href="#"
                class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-active"
                :class="item?.active ? 'text-active' : '' "
                @click="item.onClickHandler">
                {{ item.name }}
            </a>
        </nav>
    </details>



</template>

<style scoped>

</style> 