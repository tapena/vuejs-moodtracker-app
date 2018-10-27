<template>
  <div class="recipes-show">
    <h1>{{ journal.title }}</h1>
    <h5>By: {{ current_user }}</h5>
    <h4>Content: {{ recipe.formatted.prep_time }}</h4>

    <h4>title</h4>
    <ul>
      <li v-for="title in title.formatted.journals">
        {{title}}
      </li>
    </ul>
    <h4>Content</h4>
    <ol>
      <li v-for="content in content.formatted.journals">
        {{content}}
      </li>
    </ol>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      journal: {
        formatted: {
          title: [],
          content: []
        }
      }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/journals/" + this.$route.params.id)
    .then(response => {
      this.recipe = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>