<template>
  <List>
    <transition-group name="slide">
      <ListElement v-for="item in companies.list" :key="item.id" :item="item"></ListElement>
    </transition-group>
  </List>
</template>

<script setup lang="ts">
// Components
import List from "@/components/List.vue";
import ListElement from "@/components/ListElement.vue";

// Imports
import { companiesStore } from '../store/companies'
import { onMounted } from 'vue'

// Stores
const companies = companiesStore()

// Lifecycle
onMounted( async () => {
  await companies.get()
})
</script>

<style lang="sass" scoped>
.list-enter-active,
.list-leave-active
  transition: all 0.5s ease
.list-enter-from,
.list-leave-to
  opacity: 0
  transform: translateX(30px)
</style>