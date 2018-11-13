<template>
<div class="journals"> 

<h1>Journal</h1>
  <div>
    Title: <input v-model="newJournal.title">
    Content: <input v-model="newJournal.content">
    <button class="btn btn-warning" v-on:click="addJournal()">Add content</button>
  </div>
  
  <div v-for="journal in journals">
    <h5>{{ journal.title }}</h5>
    <!-- <h3>{{ journal.time.now }}</h3> -->
    <p>{{ journal.content }}</p>
  </div>
</div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      journals: [],
      newJournal: {title: "", content: ""},
      errors: [],
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/journals")
      .then(function(response) {
        this.journals = response.data;
      }.bind(this))
      .catch(function(error) {
        console.log(error.response.data.errors);
      });
  },
  methods: {
    addJournal: function() {
      this.errors = [];
      var params = {
        title: this.newJournal.title,
        content: this.newJournal.content
      };
      axios
        .post("http://localhost:3000/api/journals", params)
        .then(response => {
          location.reload();
        })
        .catch(error => {
          this.error = error.response.data.errors;
        });
    }
  },
  computed: {}
};
</script>