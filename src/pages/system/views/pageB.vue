<template>
  <div>
    这是总后台系统模块页面B
    <a @click="jump">跳转至餐饮业务模块首页</a>
  </div>
</template>
<script>
export default {
  name: 'sysPageB',
  methods: {
    jump () {
      window.location.href = 'repast.html'
    }
  }
}
</script>
<style>

</style>
