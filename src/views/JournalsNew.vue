<template>
  <div class="journals-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Make a new Journal Entry</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Title:</label> 
          <input type="text" class="form-control" v-model="title">
        </div>
        <div class="form-group">
          <label>Content:</label>
          <input type="text" class="form-control" v-model="content">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      title: "",
      content: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        title: this.title,
        contents: this.contents
      };
      axios
        .post("http://localhost:3000/api/journals", params)
        .then(response => {
          this.$router.push("/journals/" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>