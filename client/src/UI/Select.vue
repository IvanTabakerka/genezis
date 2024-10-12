<template>
  <label
      class="fake_select"
      :for="id"
  >
    <span class="fake_select_value" @click="selectShow = !selectShow">
      {{labelByValue?.label}}
    </span>
    <transition name="fade">
      <span
          class="fake_select_options"
          v-if="selectShow">
        <span
            class="fake_select_options_el"
            :class="{'selected': item.value == modelValue}"
            v-for="item in options"
            :key="`fake_${item.value}`"
            @click="updateFakeInput(item.value);selectShow = !selectShow;"
        >
          {{item.label}}
        </span>
      </span>
    </transition>
  </label>
  <select
      :id="id"
      class="real_select"
      @change="updateInput"
      :value="modelValue"
  >
    <option v-for="item in options" :key="`real_${item.value}`" :value="item.value">{{item.label}}</option>
  </select>
</template>

<script setup lang="ts">
defineOptions({ name: 'uiSelect'})

// Imports
import { computed, ref } from 'vue'

// Local Interfaces
interface Options {
  value: string;
  label: string;
}

// Initial statement
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  modelValue: [String, Number],
  options: Array<Options>
})
const selectShow = ref(false);

// Emits
const emit = defineEmits(['update:modelValue'])

// Computed
const labelByValue = computed(() => {
  return props.options ? props.options.find((option:Options) => option.value === props.modelValue) : null
})

// Methods
function updateInput (event: Event) {
  emit('update:modelValue', (event.target as HTMLSelectElement).value)
}
function updateFakeInput (value: string) {
  emit('update:modelValue', value)
}
</script>

<style lang="sass" scoped>
.real_select
  display: none
.fake_select
  display: inline-flex
  justify-content: center
  align-items: center
  border-radius: 4px
  color: #FFFFFF
  font-size: 12px
  text-transform: uppercase
  letter-spacing: 1px
  cursor: pointer
  text-align: center
  transition-duration: 0.2s
  transition-property: color, background-color
  position: relative
  min-width: 140px
  &_value
    width: 100%
    padding: 6px 12px
    background-color: #1e1f23
  &_options
    display: grid
    position: absolute
    width: 100%
    top: 100%
    left: 0
    grid-gap: 2px
    background-color: #1e1f23
    padding: 2px
    &_el
      background-color: #2c2d31
      &.selected
        pointer-events: none
        opacity: 0.6
</style>