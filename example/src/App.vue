<template>
  <header>
    <s-button type="primary">button1</s-button>
    <!-- <el-button>按钮</el-button> -->
    <s-input v-model="value"></s-input>
    <br />
    <s-countdown :duration="10" defaultText="倒计时" @finish="finish">
      <template #default="{ timeLeft, defaultText }">
        <el-button>{{ defaultText }} {{ timeLeft }} s</el-button>
      </template>
    </s-countdown>
    <br />
    <s-pagination :pagesize="reqParams.pageSize" :total="reqParams.total" :page="1" @change-page="changePage" />
  </header>
</template>

<script setup>
import { ref, reactive } from 'vue'
// 全局引入
import { SButton, SInput, SCountdown, SPagination } from '@vimalakirti/shuge-ui'

// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

const value = ref('')
const finish = () => {
  console.log('finish')
}

const reqParams = reactive({
  pageSize: 10,
  total: 70,
  page: 1,
})

// 控制页码的变化
const changePage = (page) => {
  // 修改分页参数，重新调用接口即可
  reqParams.page = page
}
</script>
<style scoped>
header {
  max-height: 100vh;
}
</style>
