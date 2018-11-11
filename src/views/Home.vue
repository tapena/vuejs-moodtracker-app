<template>
  <div class="home">
    
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      mood_trackers: [],
      newMood_trackers: {emotion: "", proud_message: ""},
      errors: [],
    };
  },
  created: function() {
    axios
      .get("/api/mood_trackers")
      .then(response => {
        console.log(response.data);
        this.mood_trackers = response.data;
      });
  },
  methods: {},
  computed: {}
};
</script>