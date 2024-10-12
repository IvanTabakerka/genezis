<template>
  <div class="container">
    <div class="list">
      <h1>CRM Table</h1>
      <ListControl></ListControl>
      <div class="list_content">
        <!--Если бы это было не тестовое задание, я бы предложил бы сделать три отдельных раздела-->
        <ListCompanies v-if="module.$state.tableSelected === 'companies'"></ListCompanies>
        <ListContacts v-else-if="module.$state.tableSelected === 'contacts'"></ListContacts>
        <ListLeads v-else-if="module.$state.tableSelected === 'leads'"></ListLeads>
        <div v-else class="list_nodata">
          Выберете тип данных
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import ListControl from "./components/ListControl.vue";
import ListCompanies from "./components/ListCompanies.vue";
import ListContacts from "./components/ListContacts.vue";
import ListLeads from "./components/ListLeads.vue";

// Imports
import { moduleStore } from './store/'

// Stores
const module = moduleStore()
</script>

<style lang="sass" scoped>
.list
  h1
    margin: 30px 0
    text-align: center
.list_nodata
  margin: 80px auto
  text-align: center
</style>