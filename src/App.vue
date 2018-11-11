<template>
  <div id="app">
    <nav class="site-navbar fixed-top navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand">Mood</a>
          <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ml-auto">
            <router-link to="/mood_trackers">Mood</router-link> |
            <router-link to="/journals">Journal</router-link> |
            <router-link to="/logout">Logout</router-link>
          </ul>
        </div>
      </div>
    </nav>
    <div style="height:150px"></div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

</style>

