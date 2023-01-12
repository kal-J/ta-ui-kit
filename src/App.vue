<script setup>
import { v4 as uuidv4 } from "uuid";
import SideBar from './lib/components/navigation/SideBar.vue';

const Menus = [
  {
    id: uuidv4(),
    name: "Customers",
    active: false,
    onClickHandler: () => {},
    items: [
      {
        id: uuidv4(),
        name: "sub-item-1",
        active: false,
        onClickHandler: () => {},
      },
    ],
    icon: "users",
  },
  {
    id: uuidv4(),
    name: "SMS",
    active: false,
    onClickHandler: () => {},
    items: [
      {
        id: uuidv4(),
        name: "Inbox",
        active: false,
        onClickHandler: () => {},
      },
      {
        id: uuidv4(),
        name: "OutBox",
        active: false,
        onClickHandler: () => {},
      },
    ],
    icon: "send",
  },
  {
    id: uuidv4(),
    name: "Settings",
    active: false,
    onClickHandler: () => {},
    items: [],
    icon: "settings",
  },
];

</script>

<template>
  <div>
    <SideBar :menus="Menus" />
    
  </div>
</template>


<style>
@import url('./index.css');
</style> 