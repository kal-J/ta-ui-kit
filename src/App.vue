<script setup>
import { v4 as uuidv4 } from "uuid";
import SideMenu from './lib/components/navigation/side-menu/index.vue';
import VerticalMenu from './lib/components/navigation/vertical-menu/index.vue';

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

let logoutItem = {
    id: uuidv4(),
    name: "Logout",
    active: false,
    onClickHandler: () => { },
    icon: "log-out",
  };

</script>

<template>
  <div class="w-full h-screen">
    <div class="h-full">
      <SideMenu :menus="Menus" :logout="logoutItem" />
    </div>


  </div>
</template>


<style>
@import url('./index.css');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Roboto:wght@100;300;400;500;700;900&display=swap');

* {
  font-family: 'Lato', sans-serif;
  font-family: 'Roboto', sans-serif;
}
</style> 