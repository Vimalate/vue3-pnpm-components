<template>
  <button class="button" :class="typeClass" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    typeClass () {
      return `button-${this.type}`
    }
  }
}
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
