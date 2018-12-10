<template>
  <div>
    这是总后台系统模块页面A
    <a @click="jump">跳转至系统模块页面B</a>
  </div>
</template>
<script>
export default {
  name: 'sysPageA',
  methods: {
    jump () {
      this.$router.push({path: '/pageB'})
    }
  }
}
</script>
<style>

</style>
