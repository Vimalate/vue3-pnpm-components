<template>
  <el-input v-bind="$attrs" :placeholder="placeholder" :clearable="clearable" />
</template>

<script name="SInput" setup>
defineProps({
  clearable: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: '请输入'
  }
})
</script>

<style lang="scss" scoped></style>