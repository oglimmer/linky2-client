<template>
  <div v-if="!isLoggedIn" class="hello">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <InputText v-model="email"/>
      <Password v-model="password" :feedback="false"/>
      <Button type="submit" label="Login"/>
    </form>
  </div>
  <div v-if="isLoggedIn" class="hello"> You're logged in. Click <router-link to="/links">here</router-link> to proceed. </div>

</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {store} from "@/store";
import {ActionTypes} from "@/store/actions";

@Options({
  props: {
  }
})
export default class Login extends Vue {

  //TODO: remove this (just for easier testing right now)
  email = 'user@bar.com'
  password = 'passwd1'

  get isLoggedIn() {
    return store.state.accessToken!!
  }

  async login() {
    await store.dispatch(ActionTypes.LOGIN, {
      email: this.email,
      password: this.password
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
