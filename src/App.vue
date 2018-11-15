<template>
  <div id="app">
    <router-view/>
    <!-- <div style="height:150px"></div>     -->
    <nav class="site-navbar fixed-top navbar navbar-expand-lg">
      <div class="container">
      <a>Mood</a>
        <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ml-auto">
   <!--        <router-link to="/signup">Signup</router-link> | -->
          <router-link :to="{name: 'login'}">Login</router-link> |
          <router-link :to="{name: 'logout'}">Logout</router-link>
        </ul>
        </div>
      </div>
    </nav>
<!-- 
    <div style="height:150px"></div>

    
      <div class="fluid-wrapper"> -->
        <!-- IFRAME MAPS -->
        <!-- <div style="height:150px"></div> -->
        
<!--          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.0326002286824!2d-87.63698318412354!3d41.892155979221016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb444f646c9%3A0x51d21ac980a50276!2s215+W+Ohio+St+%23300%2C+Chicago%2C+IL+60654!5e0!3m2!1sen!2sus!4v1542127231471" width="300" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        width="300" height="350" style="border:0"></iframe>
      </div> -->

<!--   <div style="height:150px"></div>

      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <br>
            <p class="mail"> <i class="fa fa-map" aria-hidden="true"></i> &nbsp; 215 W Ohio St #300, Chicago, IL, 60654  </p>
            <p class="mail"> <i class="fa fa-phone" aria-hidden="true"></i> &nbsp; Phone Number 773-766-5965</p>
          </div>
        </div>
      </div>
    </section> -->

      <!-- FOOTER -->
  <div style="height:150px"></div>
    <footer>
      Copyrights 2018
    </footer>

  </div>
</template>


<style>

</style>