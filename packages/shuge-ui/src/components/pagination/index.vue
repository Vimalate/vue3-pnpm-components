<template>
  <div class="pagination">
    <a href="javascript:;" :class="{ disabled: currentPage === 1 }" @click="changePage(false)">上一页</a>
    <span v-if="currentPage > 3">...</span>
    <a v-for="item in list" :key="item" href="javascript:;" :class="{ active: currentPage === item }"
      @click="changePage(item)">{{ item }}</a>
    <span v-if="currentPage < pages - 2">...</span>
    <span>第<input v-model="inputPage" type="number" min="1" :max="pages" />页</span>

    <div class="jump-btn" @click="jumpToPage">GO</div>
    <a href="javascript:;" :class="{ disabled: currentPage === pages }" @click="changePage(true)">下一页</a>
  </div>
</template>
<script>
import { computed, ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'SPagination',
  props: {
    total: {
      type: Number,
      default: 80,
    },
    pagesize: {
      type: Number,
      default: 10,
    },
    // 默认初始页码
    // page: {
    //   type: Number,
    //   default: 1
    // }
  },
  emits: ['change-page'],
  setup (props, { emit, attrs }) {
    // attrs表示父组件传递的属性，但是props没有接收的属性，这种属性不是响应式的
    // 动态计算中期的页码信息
    // 每页的条数
    // const pagesize = 8
    // 总页数
    const pages = computed(() => Math.ceil(props.total / props.pagesize))
    // 当前页码
    // console.log(attrs.page)
    const currentPage = ref(attrs.page || 1)
    const inputPage = ref(currentPage.value)
    // 动态计算页码列表
    const list = computed(() => {
      // 当父组件传递total的值发生变化时，计算属性会重新计算
      // pages = Math.ceil(props.total / props.pagesize)
      const result = []
      // 总页码小于等于5；大于5
      if (pages.value <= 5) {
        // 总页码小于等于5的情况
        for (let i = 1; i <= pages.value; i++) {
          result.push(i)
        }
      } else {
        // 总页码大于5
        if (currentPage.value <= 2) {
          // 左侧临界值
          for (let i = 1; i <= 5; i++) {
            result.push(i)
          }
        } else if (currentPage.value >= pages.value - 1) {
          // 右侧临界值
          for (let i = pages.value - 4; i <= pages.value; i++) {
            result.push(i)
          }
        } else {
          // 中间的状态
          for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
            result.push(i)
          }
        }
      }
      return result
    })
    // 控制上一页和下一页变化
    const changePage = (type) => {
      if (type === false) {
        // 上一页
        // 页面是第一页时，禁止点击操作
        if (currentPage.value === 1) return
        if (currentPage.value > 1) {
          currentPage.value -= 1
        }
      } else if (type === true) {
        // 下一页
        // 页面是最后页时，禁止点击操作
        if (currentPage.value === pages.value) return
        if (currentPage.value < pages.value) {
          currentPage.value += 1
        }
      } else {
        // 点击页码
        currentPage.value = type
      }
      emit('change-page', currentPage.value)
    }

    const jumpToPage = () => {
      const page = parseInt(inputPage.value)
      if (page >= 1 && page <= pages.value) {
        currentPage.value = page
        emit('change-page', currentPage.value)
        inputPage.value = null
      } else if (page > pages.value) {
        currentPage.value = pages.value
        emit('change-page', currentPage.value)
        inputPage.value = null
      }
    }
    return { list, currentPage, pages, changePage, inputPage, jumpToPage }
  },
})
</script>
<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  padding: 30px;

  >a {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;

    &:hover {
      color: #1890ff;
    }

    &.active {
      background: #1890ff;
      color: #fff;
      border-color: #1890ff;
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.4;

      &:hover {
        color: #333;
      }
    }
  }

  >span {
    margin-right: 10px;
  }

  .jump-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #1890ff;
    color: #fff;
    line-height: 32px;
    text-align: center;
  }
}
</style>
