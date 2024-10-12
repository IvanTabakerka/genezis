<template>
    <div class="list_elements_wrapper">
        <slot></slot>
    </div>
</template>

<style lang="sass" scoped>
.list_elements_wrapper
  padding: 6px
  background-color: #2c2d31
  border-radius: 4px
  display: grid
  gap: 6px
.v-enter-active,
.v-leave-active
  transition: opacity 1s ease
.v-enter-from,
.v-leave-to
  opacity: 0
</style>