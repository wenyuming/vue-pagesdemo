<template>
  <div>
    这是总后台系统首页
    <a @click="jump">跳转至系统模块页面A</a>
  </div>
</template>
<script>
export default {
  name: 'repastHome',
  methods: {
    jump () {
      this.$router.push({path: '/pageA'})
    }
  }
}
</script>
<style>

</style>
