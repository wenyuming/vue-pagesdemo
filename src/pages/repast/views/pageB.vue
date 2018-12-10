<template>
  <div>
    这是总后台餐饮行业B
    <a @click="jump">跳转至系统模块首页</a>
  </div>
</template>
<script>
export default {
  name: 'repastPageB',
  methods: {
    jump () {
      window.location.href = 'system.html'
    }
  }
}
</script>
<style>

</style>
