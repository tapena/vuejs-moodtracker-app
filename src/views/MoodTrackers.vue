<template>
<div class="mood_trackers">
  <div>
    Emotion: <input v-model="newMoodTracker.emotion">
    Because: <input v-model="newMoodTracker.proud_message">
    <button class="btn btn-warning" v-on:click="addMoodTracker()">Add</button>
  </div>
  
  <div v-for="moodTracker in moodTrackers">
    <h5>{{ moodTracker.user_name }} is feeling {{ moodTracker.emotion }} because {{ moodTracker.proud_message }}
   </h5>
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
      moodTrackers: [],
      newMoodTracker: {emotion: "", proud_message: ""},
      errors: [],
      userName: localStorage.getItem("user_name")
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/mood_trackers")
      .then(function(response) {
        this.moodTrackers = response.data;
      }.bind(this))
      .catch(function(error) {
        console.log(error.response.data.errors);
      });
  },
  methods: {
    addMoodTracker: function() {
      this.errors = [];
      var params = {
        emotion: this.newMoodTracker.emotion,
        proud_message: this.newMoodTracker.proud_message
      };
      axios
        .post("http://localhost:3000/api/mood_trackers", params)
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