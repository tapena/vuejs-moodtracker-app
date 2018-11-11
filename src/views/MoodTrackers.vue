<template>
<div class="mood_trackers">
<h1>Mood Tracker</h1>
  <div>
    Emotion: <input v-model="newMoodTracker.emotion">
    Proud Message: <input v-model="newMoodTracker.proud_message">
    <button v-on:click="addMoodTracker()">Add</button>
  </div>

<!--   <img class="ribbon" src="https://mbtskoudsalg.com/images/badge-png-transparent-1.png"> -->
  
  <div v-for="moodTracker in moodTrackers">
    <h3>{{ moodTracker.user_name }} is feeling {{ moodTracker.emotion }} 
   </h3>
   <h5> Proud Message: {{ moodTracker.proud_message }}</h5> 
  </div>
</div>

</template>

<style>
/*.ribbon {
  height: 100px;
}*/
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