<template>
  <div class="list_element">
    <div class="list_element_info">
      <span class="list_element_info_id">{{item?.id}}</span>
      <h3>{{item?.name}}</h3>
    </div>
    <div class="list_element_control">
      <uiButton disabled>Подробнее</uiButton>
      <uiButton disabled>Удалить</uiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
// Types
import type {PropType} from 'vue'
export interface List {
  id: number;
  name: string;
}

// Initial statement
const props = defineProps({
  item: Object as PropType<List>,
})
</script>

<style lang="sass" scoped>
.list_element
  display: flex
  justify-content: space-between
  background-color: #44454a
  padding: 6px 8px
  align-items: center
  gap: 8px
  &_info
    display: flex
    gap: 12px
    align-items: center
    &_id
      background-color: #27282d
      padding: 2px 6px
      border-radius: 4px
  &_control
    display: flex
    gap: 8px
@media screen and (max-width: 768px)
  .list_element
    flex-direction: column
    align-items: flex-start
</style>