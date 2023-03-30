<script setup>
import { v4 as uuidv4 } from "uuid";

const props = defineProps(['menus', 'logout']);

</script>

<template>
    <div class="relative h-full w-60 bg-gray-100 overflow-y-auto">
        <div class="h-16 px-6"></div>

        <div class="text-xs py-4 px-6 uppercase font-light">Your Account</div>

        <template v-for="menu in props?.menus">

            <div @click="menu.onClickHandler" v-if="menu.active" class=" bg-white flex space-x-4 cursor-pointer my-1">
                <span class="h-16 w-2 bg-primary-600"></span>
                <div class="h-16 flex items-center space-x-4 text-primary-600">
                    <span>
                        <vue-feather class="h-5 w-5 opacity-75" v-if="menu?.icon" :type="menu?.icon"></vue-feather>

                    </span>
                    <span class="font-normal">{{ menu.name }}</span>
                </div>

            </div>

            <div @click="menu.onClickHandler" v-if="!menu.active"
                class=" relative overflow-hidden bg-transparent flex space-x-2 group transition-all duration-1000 cursor-pointer my-1 border-b-2 border-gray-200">
                <span
                    class="h-16 scale-y-0 group-hover:scale-y-100 relative group-hover:opacity-100 opacity-0 w-2  group-hover:bg-primary-600 duration-700 transition-all ease-in-out "></span>
                <div class="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></div>

                <div class="h-16 relative flex items-center space-x-4 pl-2 group-hover:text-primary-600">
                    <span>
                        <vue-feather class="h-5 w-5 opacity-75" v-if="menu?.icon" :type="menu?.icon"></vue-feather>

                    </span>
                    <span class="font-normal">{{ menu.name }}</span>
                </div>
            </div>




        </template>

        <div v-if="props.logout" @click="props.logout.onClickHandler"
                class=" absolute bottom-0 left-0 right-0 mt-8 overflow-hidden bg-transparent flex space-x-2 group transition-all duration-1000 cursor-pointer my-1 border-b-2 border-gray-200">
                <span
                    class="h-16 scale-y-0 group-hover:scale-y-100 relative group-hover:opacity-100 opacity-0 w-2  group-hover:bg-primary-600 duration-700 transition-all ease-in-out "></span>
                <div class="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></div>

                <div class="h-16 relative flex items-center space-x-4 pl-2 group-hover:text-primary-600">
                    <span>
                        <vue-feather class="h-5 w-5 opacity-75" v-if="props.logout?.icon"
                            :type="props.logout?.icon"></vue-feather>

                    </span>
                    <span class="font-normal">{{ props.logout.name }}</span>
                </div>
            </div>

        




    </div>
</template>

<style></style>