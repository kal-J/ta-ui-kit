<script setup>
import {ref} from 'vue';
import { v4 as uuidv4 } from "uuid";
import SideMenu from './lib/components/navigation/side-menu/index.vue';
import VerticalMenu from './lib/components/navigation/vertical-menu/index.vue';

const activeMenu = ref("SMS");
const activeSubMenu = ref();

/* const Menus = [
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
 */
const Menus = [
  {
    id: uuidv4(),
    name: "Home",
    get active() {
      return activeMenu.value == this.name;
    },
    onClickHandler: () => {},
    items: [],
    icon: "home",
  },
  {
    id: uuidv4(),
    name: "Customers",
    get active() {
      return activeMenu.value == this.name;
    },
    onClickHandler: () => {},
    items: [],
    icon: "users",
  },
  {
    id: uuidv4(),
    name: "SMS",
    get active() {
      return activeMenu.value == this.name;
    },
    onClickHandler: () => {
      activeMenu.value = "SMS";
    },
    items: [
      
      {
        id: uuidv4(),
        name: "Compose",
        get active() {
          return activeSubMenu.value == this.name;
        },
        onClickHandler: () => {
          activeSubMenu.value = "Compose";
          router.push("/console/sms/compose");
        },
      },
      {
        id: uuidv4(),
        name: "Phonebooks",
        get active() {
          return activeSubMenu.value == this.name;
        },
        onClickHandler: () => {
          activeSubMenu.value = "Phonebooks";
          router.push("/console/sms/phonebooks");
        },
      },
      {
        id: uuidv4(),
        name: "Groups",
        get active() {
          return activeSubMenu.value == this.name;
        },
        onClickHandler: () => {
          activeSubMenu.value = "Groups";
          router.push("/console/sms/groups");
        },
      },
      {
        id: uuidv4(),
        name: "Inbox",
        get active() {
          return activeSubMenu.value == this.name;
        },
        onClickHandler: () => {
          activeSubMenu.value = "Inbox";
          router.push("/console/sms/inbox");
        },
      },
      {
        id: uuidv4(),
        name: "OutBox",
        get active() {
          return activeSubMenu.value == this.name;
        },
        onClickHandler: () => {
          activeSubMenu.value = "OutBox";
          router.push("/console/sms/outbox");
        },
      },
      {
        id: uuidv4(),
        name: "Templates",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
      {
        id: uuidv4(),
        name: "Keywords",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
    ],
    icon: "send",
  },
  {
    id: uuidv4(),
    name: "Transactions",
    get active() {
      return activeMenu.value == this.name;
    },
    onClickHandler: () => {
      activeMenu.value = "Transactions";
    },
    items: [
      {
        id: uuidv4(),
        name: "Deposits",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
      {
        id: uuidv4(),
        name: "Payouts",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
      {
        id: uuidv4(),
        name: "Transfers",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
      {
        id: uuidv4(),
        name: "Statements",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
    ],
    icon: "activity",
  },
  {
    id: uuidv4(),
    name: "Billers",
    get active() {
      return activeMenu.value == this.name;
    },
    onClickHandler: () => {},
    items: [
      {
        id: uuidv4(),
        name: "Airtime & Data",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
      {
        id: uuidv4(),
        name: "Bill Payments",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
    ],
    icon: "archive",
  },
  {
    id: uuidv4(),
    name: "Billing",
    get active() {
      return activeMenu.value == this.name;
    },
    onClickHandler: () => {},
    items: [
      {
        id: uuidv4(),
        name: "Account Topup",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
      {
        id: uuidv4(),
        name: "Account Statements",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
    ],
    icon: "credit-card",
  },
  {
    id: uuidv4(),
    name: "Settings",
    get active() {
      return activeMenu.value == this.name;
    },
    onClickHandler: () => {},
    items: [
      {
        id: uuidv4(),
        name: "Profile",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
      {
        id: uuidv4(),
        name: "Settlement Accounts",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
      {
        id: uuidv4(),
        name: "Developer",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
      {
        id: uuidv4(),
        name: "API Key Management",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
      {
        id: uuidv4(),
        name: "Callback Webhooks",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
      {
        id: uuidv4(),
        name: "Developer Docs",
        get active() {
          return activeMenu.value == this.name;
        },
        onClickHandler: () => {},
      },
    ],
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
      <VerticalMenu :menus="Menus" />
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