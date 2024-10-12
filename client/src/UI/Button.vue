<template>
  <button
      class="btn"
      :class="{
        'disabled': disabled,
        'loading': loading
      }"
  >
    <transition name="opacity">
      <uiSpinner v-if="loading"></uiSpinner>
    </transition>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineOptions({ name: 'uiButton'})

defineProps({
  disabled: Boolean,
  loading: Boolean
})
</script>

<style lang="sass" scoped>
.btn
  position: relative
  display: inline-flex
  justify-content: center
  align-items: center
  padding: 6px 12px
  border: 0 solid transparent
  border-radius: 4px
  background-color: #1e1f23
  color: #FFFFFF
  font-size: 12px
  text-transform: uppercase
  letter-spacing: 1px
  cursor: pointer
  text-align: center
  transition-duration: 0.2s
  transition-property: color, background-color
  &.disabled
    pointer-events: none
    color: #abb0c2
    cursor: default
    opacity: 0.8
  &.loading
    color: #1e1f23
    pointer-events: none
</style>