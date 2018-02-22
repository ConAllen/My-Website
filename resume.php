<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <link rel="stylesheet" href="vendors/css/normalize.css">
    <link rel="stylesheet" type="text/css" href="vendors/css/grid.css">
    <link rel="stylesheet" type="text/css" href="vendors/css/animate.css">
    <link rel="stylesheet" type="text/css" href="vendors/css/iconfont.css">
    <link rel="stylesheet" type="text/css" href="vendors/css/ionicons.min.css">

    <link rel="stylesheet" type="text/css" href="vendors/css/style.css">
    <link rel="stylesheet" type="text/css" href="vendors/css/reset.css">

    <link rel="stylesheet" type="text/css" href="resources/css/style.css">
    <link rel="stylesheet" type="text/css" href="resources/css/queries.css">
    <!--<script src="vendors/js/ityped.js"></script>-->
    <script src="vendors/js/modernizr.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel="stylesheet">
    <title>Con Allen Front-end Developer</title>

    <!--fav icon-->

    <link rel="apple-touch-icon" sizes="180x180" href="/resources/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/resources/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/resources/favicons/favicon-16x16.png">
    <link rel="manifest" href="/resources/favicons/site.webmanifest">
    <link rel="mask-icon" href="/resources/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="/resources/favicons/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="/resources/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
  </head>
  <body>

    <!-- logo -->

  <!-- header -->
   <div class= "header-resume">
    <nav>
      <div class="row">
          <ul class="resume-main-nav js-main-nav">
            <li class="nav-li"><a href="http://conallen.ie/">Home</a></li>
            <li class="nav-li"><a href="#connect">Connect</a></li>

          </ul>

         <!-- <a class="mobile-icon-link js-nav-icon"><i class="ion-pizza"></i></a>-->
          <a class="mobile-icon-link js-nav-icon"><i class="ion-navicon"></i></a>
        </div>
      </nav>
   </header>
  <!-- info section  -->
   <section class="about-me js--about-us-section" id="about-us">

      <!--<div class="row">-->
        <h2 class="js--wp-8">
          Résumé
        </h2>
        <div class="row">
          <embed class="cv" src="resources/assets/ConAllen-CV-2018.pdf" width="100% height=100%"/>
        </div>
      </section>
<!--<section class="contact-section" id="contact-me">

    <div class="row" id="form">
        <h2 class="form-h2 js--wp-8">
          Contact Me
        </h2>
      </div>
      <div class="row">
          <h3 class="form-h3">
            Have a question or want to work together?
          </h3>
        </div>
  <section class="form-body">
      <form method="post" action="mailer.php" class="contact-form" >
       <div class="js--wp-10">
        <div class="row">

   <?Php
          if ($_GET['success']== 1){
              echo " <div class=\"form-messages success\"> Thank you! your message has been sent. </div>";
            }
            if ($_GET['success']== -1){
              echo " <div class=\"form-messages error\"> Opps there was a problem. Please try again </div>";
            };
   ?>

            <div class="field name-box">
                <input type="text" name="name" id="name" placeholder="Who Are You?" required/>
                <label for="name">Name</label>
                <span class="ss-icon">check</span>
            </div>

            <div class="field email-box">
                <input type="email" name="email" id="email" placeholder="name@email.com" required/>
                <label for="email">Email</label>
                <span class="ss-icon">check</span>
            </div>

            <div class="field message-box">
                <textarea name="message" id="message" rows="4" placeholder="Your message goes here..."/></textarea>
                <label for="message">Msg</label>
                <span class="ss-icon">check</span>
            </div>
            <input class="button" name="submit" type="submit" value="Send"/>
        </div>
     </div>
    </form>
  </section>
</section>


  <!--features section  -->

<!--footer section  -->
 <footer>
            <!--<div class="row">
                <div class="col span-1-of-2">
                    <ul class="footer-nav">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">iOS App</a></li>
                        <li><a href="#">Android App</a></li>
                    </ul>
                </div>-->
                <div class="row">
                    <ul class="social-links js--wp-9" id="connect">
                      <div class="square">
                          <li class="footer-li"><a href="https://github.com/ConAllen/"><i class="ion-social-github"></i></a></li>
                      </div>
                      <div class="square">
                          <li class="footer-li"><a href="https://www.linkedin.com/in/con-allen-dublin/"><i class="ion-social-linkedin"></i></a></li>
                      </div>
                      <div class="square">
                          <li class="footer-li"><a href="https://plus.google.com/u/0/+ConAllenFront-endDeveloper"><i class="ion-social-googleplus"></i></a></li>
                      </div>
                      <div class="square">
                          <li class="footer-li"><a href="https://www.pinterest.ie/allenconallen46/"><i class="ion-social-pinterest"></i></a></li>
                      </div>
                    </ul>
                </div>
            </div>
            <div class="row">
                <p>
                    Made by Con Allen 2018 &copy;
                </p>
            </div>
        </footer>

<!--JS Links section  -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="vendors/js/jquery.waypoints.min.js"></script>
<script src="vendors/js/main.js"></script>
<script src="resources/js/script.js"></script>

</body>
</html>
