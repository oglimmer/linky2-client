<template>
  <div class="hello">
    <h1>Login {{accessToken}}</h1>
    <div>
      Email: <input v-model="email"/>
      Password: <input v-model="password"/>
    </div>
    <button v-on:click="login">Login</button>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {MutationTypes} from "@/store/login/mutations";

@Options({
  props: {
  }
})
export default class Login extends Vue {

  email = 'user@bar.com'
  password = 'passwd1'

  get accessToken() {
    return this.$store.state.accessToken
  }

  async login() {
    const response = await this.axios.post("http://localhost:8080/v1/users/auth", {
      email: this.email,
      password: this.password
    })
    this.$store.commit(MutationTypes.LOGIN, response.data.accessToken)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
