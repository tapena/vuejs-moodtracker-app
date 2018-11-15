<template>
  <div class="mood_trackers">

      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <div v-for="moodTracker in moodTrackers" class="mood-item" v-bind:class="{
              happy: moodTracker.emotion === 'happy', 
              meh: moodTracker.emotion === 'meh', 
              angry: moodTracker.emotion === 'angry', 
              sad: moodTracker.emotion === 'sad', 
            }">
              <h5>{{ moodTracker.user_name }} is feeling {{ moodTracker.emotion }} because {{ moodTracker.proud_message }}
              </h5>
            </div>
          </div>
          <div class="col-sm-4">
            <form class="frm" v-on:submit.prevent="submit()">
              <div class="row">
                <div class="col-md-12">
                  <div id="success"></div>
                </div>
                <div class="col-md-6 row">
                  
                </div>
                <div class="col-md-12 text-center">
                  <div class="form-group">
                    <select type="text" class="form-control" name="emotion" v-model="newMoodTracker.emotion">
                      <option value="" disabled selected>Emotion</option>
                      <option value="happy">Happy</option>
                      <option value="meh">Meh</option>
                      <option value="angry">Angry</option>
                      <option value="sad">Sad</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12 text-center">
                    <label for="Because">Because</label>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input type="text" v-model="newMoodTracker.proud_message" class="form-control" Name="Because" placeholder="Reason">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">

                  </div>
                  <input  type="submit" id="submit" name="submit" value="Add Mood Tracker" class="btn btn-lg btn-block btn-action" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
.happy {
  background-color: #FCE60C;
}
.meh {
  background-color: #08AF5F;
}
.angry {
  background-color: #fc490c;  
}
.sad {
  background-color: #5C7BC2;
}
.mood-item {
  padding: 5px 5px 5px 20px;
  margin: 5px 0px;
  border-radius: 20px;
  border: solid black 1px;
}
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
    submit: function() {
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