<template>
  <div class="hello">
    <h1>Login {{accessToken}}</h1>
    <form @submit.prevent="login">
      <InputText v-model="email"/>
      <Password v-model="password" :feedback="false"/>
      <Button type="submit" label="Login"/>
    </form>
  </div>

</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {MutationTypes} from "@/store/login/mutations";
import {store} from "@/store";

@Options({
  props: {
  }
})
export default class Login extends Vue {

  email = 'user@bar.com'
  password = 'passwd1'

  get accessToken() {
    return store.state.accessToken
  }

  async login() {
    const response = await this.axios.post("http://localhost:8080/v1/users/auth", {
      email: this.email,
      password: this.password
    })
    store.commit(MutationTypes.LOGIN, response.data.accessToken)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
