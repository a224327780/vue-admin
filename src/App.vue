<template>
  <router-view/>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}

html, body {
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: #EEF0F8;
}

#app {
  .size;
}
</style>