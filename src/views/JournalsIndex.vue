<template>
  <div class="journals-index">
    <div class="row">
      <div class="col-md-4" v-for="journal in journals">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{ journal.title }}</h5>
            <p class="card-text">Content: {{ journal.formatted.content }}</p>
            <router-link class="btn btn-primary" v-bind:to="'/journals/' + journal.id">More</router-link>
          </div>
        </div>
      </div>
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
      journals: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/journals")
    .then(function(response) {
      this.journals = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>
