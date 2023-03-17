<template>
  <button class="button" :class="typeClass" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<!-- <script >
export default {
  name: 'SButton',
}
</script> -->
<script name="SButton" setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  }
})
const typeClass = computed(() => `button-${props.type}`)
</script>

<style lang="scss" scoped>
.button {
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;

  &-default {
    background-color: #eee;
    color: #333;
  }

  &-primary {
    background-color: #007bff;
    color: #fff;
  }
}
</style>
