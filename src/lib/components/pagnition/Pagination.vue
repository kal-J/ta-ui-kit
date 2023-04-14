<script lang="ts" setup>
import { ref } from 'vue';


const props = defineProps<{
  position: string,
  pageHandler: Function<string>,
}>();

const pages = ref<number[]>([1, 2, 3]);
const prevPage = ref();
const nextPage = ref();
const currentPage = ref(1)

const handlePrevPage = () => {
  if (currentPage.value === 1) return;
  let newPages = [];
  let newCurrentPage = currentPage.value - 1;
  props?.pageHandler(newCurrentPage);
  currentPage.value = newCurrentPage;
  let pageIsPresent = pages.value.find(page => (page === newCurrentPage));
  if(!pageIsPresent) {
    pages.value = [
      newCurrentPage,
      newCurrentPage + 1,
      newCurrentPage + 2,
    ];
  }
}

const handleNextPage = () => {
  let newPages = [];
  let newCurrentPage = currentPage.value + 1;
  props?.pageHandler(newCurrentPage);
  currentPage.value = newCurrentPage;
  let pageIsPresent = pages.value.find(page => (page === newCurrentPage));
  if(!pageIsPresent) {
    pages.value = [
      newCurrentPage - 2,
      newCurrentPage - 1,
      newCurrentPage,
    ];
  }
}
</script>

<template>
  <div
    :class="props.position ? props.position : 'sticky'"
    class="w-full bottom-0 z-10 px-4 py-1 bg-white"
  >
    <nav class="flex items-center space-x-2">
      <a
        @click="
          () => {
            handlePrevPage();
          }
        "
        class="inline-flex items-center gap-2 p-4 font-medium text-gray-400 rounded-md hover:text-primary-700"
        href="#"
      >
        <span aria-hidden="true">«</span>
        <span class="sr-only">Previous</span>
      </a>

      <template v-for="page in pages">
        <a
          @click="
            () => {
              props?.pageHandler(page);
              currentPage = page;
            }
          "
          :class="
            page === currentPage
              ? 'inline-flex justify-center items-center w-10 h-10 p-4 text-sm font-medium text-white bg-primary-700 rounded-full'
              : 'inline-flex justify-center items-center w-10 h-10 p-4 text-sm font-medium text-gray-400 rounded-full hover:text-primary-700'
          "
          href="#"
          aria-current="page"
          >{{ page }}</a
        >
      </template>

      <a
        @click="
          () => {
            handleNextPage();
          }
        "
        class="inline-flex items-center gap-2 p-4 font-medium text-gray-400 rounded-md hover:text-primary-700"
        href="#"
      >
        <span class="sr-only">Next</span>
        <span aria-hidden="true">»</span>
      </a>
    </nav>
  </div>
</template>
