<template>
  <div>
    这是餐饮行业页面A
    <a @click="jump">跳转至餐饮行业页面B</a>
  </div>
</template>
<script>
export default {
  name: 'repastPageA',
  methods: {
    jump () {
      this.$router.push({path: '/pageB'})
    }
  }
}
</script>
<style>

</style>
