<template>
  <div>
    <slot :timeLeft="timeLeft" :defaultText="props.defaultText">
      {{ props.defaultText }}: {{ timeLeft }}s
    </slot>
  </div>
</template>

<script name="SCountdown" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const emits = defineEmits(['finish'])

const props = defineProps({
  duration: {
    type: Number,
    default: 60
  },
  defaultText: {
    type: String,
    default: 'Remaining time'
  }
})

const timeLeft = ref(props.duration)

const stopTimer = () => {
  clearInterval(timerId)
  timerId = null

  // Emit finish event
  emits('finish')
}

let timerId = null
onMounted(() => {
  timerId = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      stopTimer()
    }
  }, 1000)
})

onBeforeUnmount(() => {
  stopTimer()
})
</script>