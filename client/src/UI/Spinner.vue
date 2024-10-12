<template>
  <transition name="fade">
    <div class="spinner">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle class="spinner_qM83" cx="4" cy="12" r="3"/>
        <circle class="spinner_qM83 spinner_oXPr" cx="12" cy="12" r="3"/>
        <circle class="spinner_qM83 spinner_ZTLf" cx="20" cy="12" r="3"/>
      </svg>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineOptions({name: 'uiSpinner'})
</script>

<style lang="sass" scoped>
.spinner
  position: absolute
  left: calc(50% - 12px)
  top: calc(50% - 12px)

.spinner_qM83
  animation: spinner_8HQG 1.05s infinite
  fill: #FFFFFF
.spinner_oXPr
  animation-delay: 0.1s
.spinner_ZTLf
  animation-delay: 0.2s
@keyframes spinner_8HQG
  0%, 57.14%
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1)
    transform: translate(0)
  28.57%
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33)
    transform: translateY(-6px)
  100%
    transform: translate(0)

</style>