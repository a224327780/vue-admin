<template>
  <div class="error-page">
    <div class="content-con">
      <img :src="src" alt="404">
      <div class="text-con">
        <h5>{{ message }}</h5>
      </div>
      <div>
        <Button size="large" type="text" @click="backHome">返回首页</Button>
        <Button size="large" type="text">返回上一页</Button>
      </div>
    </div>
  </div>
</template>


<script setup>

export default {
  data() {
    return {
      src: '',
      message: ''
    }
  }
}
</script>