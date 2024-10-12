<template>
  <form class="container list_control" @submit.prevent="submit" @keyup.enter="submit">
    <uiSelect v-model="module.tableSelected" :options="module.tableList" id="list_control_select"></uiSelect>
    <uiButton type="submit" :loading="buttonLoading" :disabled="module.tableSelected === 'none'">Добавить</uiButton>
  </form>
</template>

<script setup lang="ts">
// Imports
import { moduleStore } from '../store/'
import { companiesStore } from '../store/companies'
import { contactsStore } from '../store/contacts';
import { leadsStore } from '../store/leads'

import {ref} from "vue";
import axios from "axios";

// Stores
const module = moduleStore()
const companies = companiesStore()
const contacts = contactsStore()
const leads = leadsStore()

const buttonLoading = ref(false);

// Methods
async function submit () {
  try {
    buttonLoading.value = true;
    if (module.tableSelected === 'leads') {
      await leads.create('Сделка')
    } else if (module.tableSelected === 'contacts') {
      await contacts.create('Контакт')
    } else if (module.tableSelected === 'companies') {
      await companies.create('Компания')
    }
    setTimeout(() => {
      buttonLoading.value = false
    }, 1000)
  } catch (e) {
    console.log(e)
  }

}
</script>

<style lang="sass" scoped>
.list_control
  display: flex
  background-color: #2c2d31
  justify-content: space-between
  padding: 6px
</style>