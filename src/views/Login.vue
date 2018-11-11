<template>
  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>User name:</label>
          <input type="name" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>family id:</label>
          <input type="family id" class="form-control" v-model="family_id">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-warning"value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      name: "",
      family_id: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        family_id: this.family_id,
        password_digest: this.password,
        name: this.name
      };
      axios
        .post("http://localhost:3000/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/mood_trackers");
        })
        .catch(error => {
          this.errors = ["Invalid name or password."];
          this.family_id = "";
          this.password = "";
          this.name = "";
        });
    }
  }
};
</script>