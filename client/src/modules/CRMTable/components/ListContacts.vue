<template>
  <List>
    <transition-group name="slide">
      <ListElement v-for="item in contacts.list" :key="item.id" :item="item"></ListElement>
    </transition-group>
  </List>
</template>

<script setup lang="ts">
// Components
import List from "@/components/List.vue";
import ListElement from "@/components/ListElement.vue";

// Imports
import { contactsStore } from '../store/contacts';
import { onMounted } from 'vue'

// Stores
const contacts = contactsStore()

// Lifecycle
onMounted( async () => {
  await contacts.get()
})
</script>