<template>
  <div id="app">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- Stylesheet -->
      <link href="css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" href="css/main.min.css">
      <link rel="stylesheet" href="css/animate.css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
      <!-- Fonts -->
      <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700|Questrial' rel='stylesheet' type='text/css'>
    </head>
    <nav class="site-navbar fixed-top navbar navbar-expand-lg">
      <div class="container">
      <a class="navbar-brand" href="index.html">Mood Tracker</a>
        <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ml-auto">
          <router-link to="/">Home</router-link> |
          <router-link to="/signup">Signup</router-link> |
          <router-link to="/login">Login</router-link> |
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
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

