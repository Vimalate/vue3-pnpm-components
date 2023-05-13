<template>
  <div>
    <el-button @click="start" v-if="!isTiming">{{ props.buttonText }}</el-button>
    <template v-else>
      <slot :timeLeft="timeLeft" :defaultText="props.defaultText">
        {{ props.defaultText }}: {{ timeLeft }}s
      </slot>
    </template>
  </div>
</template>

<script name="SCountdown" setup>
import { ref, onBeforeUnmount } from 'vue'

const emits = defineEmits(['finish'])

const props = defineProps({
  duration: {
    type: Number,
    default: 60
  },
  defaultText: {
    type: String,
    default: 'Remaining Time'
  },
  buttonText: {
    type: String,
    default: '发送验证码'
  }
})

const isTiming = ref(false)
const timeLeft = ref(props.duration)

const stopTimer = () => {
  clearInterval(timerId)
  timerId = null

  // Emit finish event
  emits('finish')
}

let timerId = null

const start = () => {
  isTiming.value = true
  timerId = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      stopTimer()
    }
  }, 1000)
}

onBeforeUnmount(() => {
  stopTimer()
})
</script>