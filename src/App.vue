<script setup>
import { v4 as uuidv4 } from "uuid";
import SideMenu from './lib/components/navigation/side-menu/index.vue';

const Menus = [
  {
    id: uuidv4(),
    name: "Customers",
    active: false,
    onClickHandler: () => { },
    items: [],
    icon: "users",
  },
  {
    id: uuidv4(),
    name: "SMS",
    active: false,
    onClickHandler: () => { },
    items: [
      {
        id: uuidv4(),
        name: "Compose",
        active: false,
        onClickHandler: () => { },
      },
      {
        id: uuidv4(),
        name: "Inbox",
        active: false,
        onClickHandler: () => { },
      },
      {
        id: uuidv4(),
        name: "OutBox",
        active: false,
        onClickHandler: () => { },
      },
      {
        id: uuidv4(),
        name: "Templates",
        active: false,
        onClickHandler: () => { },
      },
      {
        id: uuidv4(),
        name: "Keywords",
        active: false,
        onClickHandler: () => { },
      },
    ],
    icon: "send",
  },
  {
    id: uuidv4(),
    name: "SMS2",
    active: false,
    onClickHandler: () => { },
    items: [
      {
        id: uuidv4(),
        name: "Compose",
        active: false,
        onClickHandler: () => { },
      },
      {
        id: uuidv4(),
        name: "Inbox",
        active: false,
        onClickHandler: () => { },
      },
      {
        id: uuidv4(),
        name: "OutBox",
        active: false,
        onClickHandler: () => { },
      },
      {
        id: uuidv4(),
        name: "Templates",
        active: false,
        onClickHandler: () => { },
      },
      {
        id: uuidv4(),
        name: "Keywords",
        active: false,
        onClickHandler: () => { },
      },
    ],
    icon: "send",
  },
  {
    id: uuidv4(),
    name: "Settings",
    active: false,
    onClickHandler: () => { },
    items: [],
    icon: "settings",
  },
];

</script>

<template>
  <div class="w-full">
    <div class="w-64 h-full">
      <SideMenu :menus="Menus" />
    </div>


  </div>
</template>


<style>
@import url('./index.css');
</style> 