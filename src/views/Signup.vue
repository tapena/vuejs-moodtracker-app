<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
          <!--
            [@drench] This form works great! I just had to replace the dash
            characters in some places, which Vue didn't like. We should look at
            your editor configuration and figure out why this file had "v‐for"
            instead of "v-for" here.
          -->
        </ul>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form‐control" v-model="name">
        </div>
        <div class="form-group">
          <label>family_id:</label>
          <input type="family_id" class="form-control" v-model="family_id">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form‐control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-warning" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      family_id: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        family_id: this.family_id,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("http://localhost:3000/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
