<template>
  <div class="login">
    <div class="login-container">
      <div class="login-title">
        <h3 class="text-center">{{ title }}</h3>
      </div>
      <div class="login-form">
        <Form inline>
          <FormItem :prop="key" v-for="(value, key, index) in formData">
            <Input :name="key" v-model="formData[key]" ref="input" type="text"
                   @on-change="handleLogin($event, key, index)" size="large"/>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import useAppStore from "@/store/modules/app";
import {Divider} from "view-ui-plus";

const appStore = useAppStore()

export default {
  components: {Divider},
  data() {
    return {
      title: appStore.title,
      formData: {A: '', B: '', C: '', D: '', E: '', F: ''}
    }
  },
  methods: {
    handleLogin(e, key, index) {
      if (this.formData[key]) {
        if (index < this.$refs.input.length - 1) {
          this.$refs.input[index + 1].focus()
        } else {
          console.log('111')
        }
        console.log(e, key, index)
        console.log(this.$refs.input.length)
      }
    }
  }
}
</script>

<style>
.login {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-image: url(https://assets.dogyun.com/dudu/media/bg/bg-3.jpg);
}

.login-container {
  text-align: center;
  width: 384px;
  margin: 0 auto;
}

.login-title {
  padding: 0 0 2rem 0;
  font-size: 1.4rem;
}

.ivu-form-inline .ivu-form-item {
  margin-right: 1.2rem;
}

.login-form input {
  width: 2.5rem;
  text-align: center;
}
</style>