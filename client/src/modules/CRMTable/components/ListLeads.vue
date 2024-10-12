<template>
  <List>
    <transition-group name="slide">
      <ListElement v-for="item in leads.list" :key="item.id" :item="item"></ListElement>
    </transition-group>
  </List>
</template>

<script setup lang="ts">
// Components
import List from "@/components/List.vue";
import ListElement from "@/components/ListElement.vue";

// Imports
import { leadsStore } from '../store/leads'
import { onMounted } from 'vue'

// Stores
const leads = leadsStore()

// Lifecycle
onMounted( async () => {
  await leads.get()
})
</script>