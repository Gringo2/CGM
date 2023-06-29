customElements.define('hero-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/Hero.css"/>
    </head>
    <!-- 
    - #HERO
  -->

  <section class="section hero" id="home" aria-label="hero">
    <div class="container">

      <div class="hero-content">

        <p class="hero-subtitle has-before">Wellcome to Our Church</p>

        <h1 class="h1 hero-title">Involve in Church Activities</h1>

        <p class="hero-text">
          Donec tincidunt lacinia diam, eu volutpat est sollicitudin at. Vestibulum ut mi tristi que, vulputate ante
          quis, tempus
          enim. Proin quis euismod purus. Suspen disse efficitur
          aliquam enim sed consequat vulputate ante quis.
        </p>

        <div class="btn-group">
          <a href="#" class="btn btn-primary">Discover More</a>

          <button class="flex-btn">
            <div class="btn-icon">
              <ion-icon name="play" aria-hidden="true"></ion-icon>
            </div>

            <span class="span">How it works</span>
          </button>
        </div>

      </div>

      <figure class="hero-banner has-before img-holder" style="--width: 650; --height: 650;">
        <img src="./assets/images/manager.jpg" width="650" height="650" alt="hero banner" class="img-cover">
      </figure>

    </div>
  </section>
        
    </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }
  }
  });

  customElements.define('program-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/Program.css"/>
    </head>
    <!-- 
        - #PROJECT
      -->

      <section class="section project" id="project" aria-label="project">
        <div class="container">

          <h2 class="h2 section-title">Our Program Schedule</h2>

          <p class="section-text">
            
          </p>

          <ul class="grid-list">

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 510; --height: 700;">
                  <img src="./assets/images/project-4.jpg" width="510" height="700" loading="lazy"
                    alt="Stuck with to-do list, I created a new app for" class="img-cover">
                </figure>

                <div class="card-content">

                  <p class="card-subtitle">Email Marketing</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Stuck with to-do list, I created a new app for</a>
                  </h3>

                  <a href="#" class="btn btn-primary">View Details</a>

                </div>

              </div>
            </li>

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 510; --height: 700;">
                  <img src="./assets/images/project-5.jpg" width="510" height="700" loading="lazy"
                    alt="Examples of different types of sprints" class="img-cover">
                </figure>

                <div class="card-content">

                  <p class="card-subtitle">Marketing & Reporting</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Examples of different types of sprints</a>
                  </h3>

                  <a href="#" class="btn btn-primary">View Details</a>

                </div>

              </div>
            </li>

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 510; --height: 700;">
                  <img src="./assets/images/project-6.jpg" width="510" height="700" loading="lazy"
                    alt="Redesigning the New York times app" class="img-cover">
                </figure>

                <div class="card-content">

                  <p class="card-subtitle">Development</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Redesigning the New York times app</a>
                  </h3>

                  <a href="#" class="btn btn-primary">View Details</a>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
        
    </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }
  }
  });
  customElements.define('about-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/Hero.css"/>
    </head>
    <!-- 
    - #ABOUT
  -->

  <section class="section about" id="about" aria-label="about">
    <div class="container">

      <figure class="about-banner">
        <img src="./assets/images/about-banner.png" width="802" height="654" loading="lazy" alt="about banner"
          class="w-100">
      </figure>

      <div class="about-content">

        <h2 class="h2-sm section-title">We create some things, Design for your success future.</h2>

        <p class="section-text">
          Lorem Ipsum is simply dumm of free available in market the way printing and typesetting industry has been
          the industrys
          standard dummy text ever.
        </p>

        <ul class="about-list">

          <li class="has-before">
            Price of additional materials or parts (if needed)
          </li>

          <li class="has-before">
            Transportation cost for carrying new materials/parts
          </li>

          <li class="has-before">
            You will get 100% money back offer.
          </li>

        </ul>

        <div class="btn-group">
          <a href="#" class="btn btn-primary">Know More</a>

          <button class="flex-btn">
            <div class="btn-icon">
              <ion-icon name="medal-outline" aria-hidden="true"></ion-icon>
            </div>

            <span class="span">10+ Years Experience</span>
          </button>
        </div>

      </div>

    </div>
  </section>


        
    </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }
  }
  });
  customElements.define('video-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/Video.css"/>
    </head>
    <!-- 
        - #VIDEO
      -->

      <section class="video has-bg-image" aria-label="video"
        style="background-image: url('./assets/images/video-bg.png')">
        <div class="container">

          <div class="video-card">

            <div class="video-banner img-holder has-after" style="--width: ; --height: ;">
              <img src="./assets/images/video-banner.jpg" width="970" height="550" loading="lazy" alt="video banner"
                class="img-cover">

              <button class="play-btn" aria-label="play video">
                <ion-icon name="play" aria-hidden="true"></ion-icon>
              </button>
            </div>

            <img src="./assets/images/video-shape-1.png" width="1089" height="605" loading="lazy" alt=""
              class="shape video-shape-1">

            <img src="./assets/images/video-shape-2.png" width="158" height="174" loading="lazy" alt=""
              class="shape video-shape-2">

          </div>

        </div>
      </section>
        
    </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }
  }
  });
  customElements.define('info-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/Hero.css"/>
    </head>
    <!-- 
        - #SERVICE
      -->

      <section class="section service" id="services" aria-label="service">
        <div class="container">

          

          <h2 style="margin-bottom: 20px;" class="h2 section-title text-center">Support Us</h2>

          <ul class="grid-list">

            <li>
              <div class="service-card has-after">

                <figure class="card-icon">
                  <img src="./assets/images/cbe.jpg" width="140" height="140" loading="lazy"
                    alt="UI/UX Creative Design" class="img">
                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">Commercial Bank of Ethiopia</h3>

                  <p class="card-text">
                  1000071369777
                  </p>

                  <a href="#" class="btn-link">
                    <span class="span">Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="service-card has-after">

                <figure class="card-icon">
                  <img src="./assets/images/awash.svg" width="140" height="140" loading="lazy" alt="App Development"
                    class="img">
                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">Awash Bank</h3>

                  <p class="card-text">
                  01320160594600
                  </p>

                  <a href="#" class="btn-link">
                    <span class="span">Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="service-card has-after">

                <figure class="card-icon">
                  <img src="./assets/images/Coopbank.svg" width="140" height="140" loading="lazy"
                    alt="Professional Content Writer" class="img">
                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">COOP Birhan Bank</h3>

                  <p class="card-text">
                  1143340530256
                  </p>

                  <a href="#" class="btn-link">
                    <span class="span">Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="service-card has-after">

                <figure class="card-icon">
                  <img src="./assets/images/abyssinia.svg" width="140" height="140" loading="lazy" alt="abyssinia"
                    class="img">
                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">Bank of Abyssinia</h3>

                  <p class="card-text">
                  15959444
                  </p>

                  <a href="#" class="btn-link">
                    <span class="span">Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

          </ul>

          <a href="#" class="btn btn-primary">Get Started</a>

        </div>
      </section>
        
    </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }
  }
  });
  customElements.define('contact-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/contact.css"/>
    </head>
    <section id="contact">
  
  <h1 class="section-header">Contact</h1>
  
  <div class="contact-wrapper">
  
  <!-- Left contact page --> 
    
    <form id="contact-form" class="form-horizontal" role="form">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
  <!-- Left contact page --> 
    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">City, State</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
          
        </ul>

        <hr>
        <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr>

        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  
</section>  
  
  
        
    </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }
  }
  });
  customElements.define('gallery-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/gallery.css"/>
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css"/>
    <script src="./assets/js/code.jquery.com_jquery-3.7.0.min.js"></script>
    <script src="./assets/js/gallery.js"></script>
    
    </head>
    <section id="gallery">
  <div class="container">
    <div id="image-gallery">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/500"><img src="https://unsplash.it/500" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/600"><img src="https://unsplash.it/600" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/700"><img src="https://unsplash.it/700" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/800"><img src="https://unsplash.it/800" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/900"><img src="https://unsplash.it/900" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/1000"><img src="https://unsplash.it/1000" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/1100"><img src="https://unsplash.it/1100" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/1200"><img src="https://unsplash.it/1200" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div><!-- End row -->
    </div><!-- End image gallery -->
  </div><!-- End container --> 
</section>

    </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }
  }
  });
  customElements.define('goal-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/Hero.css"/>
    </head>
    <!-- 
    - #FEATURES
  -->

  <section class="section features" id="features" aria-label="features">
    <div class="container">

      <h2 style="color:#2A388B;margin-bottom:50px;" class="h2 section-title text-center">አላማ CGM TV ETHIOPIA</h2>

     

      <ul class="grid-list">

        <li>
          <div class="features-card">

            <data class="card-number" value="01">01</data>

            
            <p class="card-text">
            ወንጌልን ለሰው ልጆች/ፍጥረት ሁሉ/ መስበክ
            </p>

          </div>
        </li>

        <li>
          <div class="features-card">

            <data class="card-number" value="02">02</data>

            

            <p class="card-text">
            የሀገሪቱ ህግና ደንብ በሚፈቅደው መሰረት ወንጌል ስርጭት እንዲሁም ኮንፍራንስ በማድረግ ሰዎችን ነጻ ማውጣት
            </p>

          </div>
        </li>

       
        <li>
          <div class="features-card">

            <data class="card-number" value="03">03</data>

            

            <p class="card-text">
            በተለያዩ ቦታዎች በደዌና በተለያየ ነገር ለሚሰቃዩ በወንጌል ምስክርነት የፈውስ አገልግሎት መስጠት
            </p>

          </div>
        </li>

        <li>
          <div class="features-card">

            <data class="card-number" value="04">04</data>

            

            <p class="card-text">
            የእግዚአብሔር ቃል በ2 ጢሞ 2፡2 ላይ “ከእኔ የሰማኅውን ሌሎችን ደግሞ ሊያስተምሩ ለሚችሉ ለታመኑ 
            ሰዎች አደራ ስጥ” እንደሚል ወንጌልን የሚሰብኩና የሚያስተምሩ ሰዎችን መንፈሳዊ ስልጠና እና በወንጌል አገልግሎት ማስተማር፡፡
            </p>

          </div>
        </li>

        <li>
          <div class="features-card">

            <data class="card-number" value="05">05</data>

            <!--<h3 class="h3 card-title">Very Reasonable Price</h3> -->

            <p class="card-text">
            የእግዚአብሔር ቃል በ2 ጢሞ 2፡2 ላይ “ከእኔ የሰማኅውን ሌሎችን ደግሞ ሊያስተምሩ ለሚችሉ 
            ለታመኑ ሰዎች አደራ ስጥ” እንደሚል ወንጌልን የሚሰብኩና የሚያስተምሩ ሰዎችን መንፈሳዊ ስልጠና እና በወንጌል አገልግሎት ማስተማር፡፡
            </p>

          </div>
        </li>

      </ul>

    </div>
  </section>

    
        
    </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }
  }
  });
  customElements.define('service-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/Program.css"/>
    </head>
    <!-- 
        - #SERVICE
      -->

      <section class="section service" id="services" aria-label="service">
        <div class="container">

          <h2 style="margin-bottom: 40px;" class="h2 section-title text-center">Our Creative Services</h2>

          

          <ul class="grid-list">
          <li>
          <div class="service-card has-after">

            <figure class="card-icon">
              <img src="./assets/images/values.svg" width="140" height="140" loading="lazy"
                alt="Professional Content Writer" class="img">
            </figure>

            <div class="card-content">

              <h3 class="h3 card-title">ዕሴት</h3>

              <p class="card-text">
              መጽሀፍ ቅዱስ የእግዚአብሔር ቃል ሲሆን ለአለም ሁሉ የቃሉ ብርሃን እንዲበራለት የሰው ልጆች የሚገኙበትን/ ፍጥረታት ሁሉ/ 
              ያሉበትን የሚያመለክት በመስቀል ደግሞ ለሰው ልጆች ሁሉ ክርስቶስ የተሰቀለበትን የአለምን ሃጥያት በስጋ ተገልጦ የኮነነበት ድል ያደረገበትን ለነዚህ ሁሉ ክርስቶስ ሕያው እንደሆነ ያመለክታል፡፡
              </p>

              

            </div>

          </div>
        </li>
            

            <li>
              <div class="service-card has-after">

                <figure class="card-icon">
                  <img src="./assets/images/mission.svg" width="140" height="140" loading="lazy" alt="App Development"
                    class="img">
                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">ተልዕኮ</h3>

                  <p class="card-text">
                  የእግዚአብሔር ቃል እንደሚናገር “ሂዱ ወንጌልን ለፍጥረት ሁሉ ስበኩ”
                  እንደሚልና እግዚአብሔር አምላክ ያለው አላማ አለምን በልጁ በክርስቶስ መጠቅለል እንደመሆኑ መጠን ይሄንን ሂወት የሆነውን ወንጌል ለፈጥረታት ሁሉ በመስበክና ሂወት የሆነውን ኢየሱስን 
                  በመንፈስ ቅዱስ በመግለጥ ትውልዱን ከሞት ወደ ሂወት፡ከጨለማ ወደሚደነቅ ብርሃን ማፍለስ ነው፡፡
                  
                  </p>

                  

                </div>

              </div>
            </li>
            <li>
              <div class="service-card has-after">

                <figure class="card-icon">
                  <img style="margin: 20px 0px;" src="./assets/images/vision.svg" width="140" height="140" loading="lazy"
                    alt="UI/UX Creative Design" class="img">
                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">ራዕይ</h3>

                  <p class="card-text">
                  በመንፈስ ቅዱስ ምሪት ሰዎችን በእውነተኛ የእግዚአብሔር ቃል ማስታጠቅ ፤ በወንጌል መድረስ እና ደቀ መዝሙር ማድረግ፤ 
                  በተጨማሪም የእግዚአብሔር መንግስት መቅረቡንና የመጨረሻው ዘመን የደረሰ መሆኑን ከመጽሀፍ ቅዱስ አንጻር ማስተማር እና ማሳወቅ፡፡
                  </p>

                  

                </div>

              </div>
            </li>
            

          </ul>

        
        </div>
      </section>
        
    </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }
  }
  });
  customElements.define('contactus-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/shadow.css"/>
    </head>
  <section style="margin-top: 100px;" part="box" class="section contact" id="contact" aria-label="contact">
    <div class="container">

      <h2 class="h2 section-title">Let's Contact With Us</h2>

      

      <form style="margin-top: 20px;"action="" class="contact-form">

        <div class="input-wrapper">
          <input type="text" name="name" aria-label="name" placeholder="Your name*" required class="input-field">

          <input type="email" name="email_address" aria-label="email" placeholder="Email address*" required
            class="input-field">
        </div>

        <div class="input-wrapper">
          <input type="text" name="subject" aria-label="subject" placeholder="Subject" class="input-field">

          <input type="number" name="phone" aria-label="phone" placeholder="Phone number" class="input-field">
        </div>

        <textarea name="message" aria-label="message" placeholder="Your message...*" required
          class="input-field"></textarea>

        

        <button type="submit" class="btn btn-primary">Send Message</button>

      </form>

      <ul class="contact-list">

        <li class="contact-item">
          <div class="contact-card">

            <div class="card-icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>

            <div class="card-content">

              <h3 class="h3 card-title">Mail Here</h3>

              <a href="mailto:hello@luaz.com" class="card-link">Prophetmaranatashimelis@gmail.com</a>
              <a href="mailto:info@luaz.com" class="card-link">info@ChristLoveTv.com</a>

            </div>

          </div>
        </li>

        <li class="contact-item">
          <div class="contact-card">

            <div class="card-icon">
              <ion-icon name="map-outline" aria-hidden="true"></ion-icon>
            </div>

            <div class="card-content">

              <h3 class="h3 card-title">Visit Here</h3>

              <address class="card-address">
              አዲስ አበባ ከአያት አደባባይ ወደፀበል በሚወስደው መንገድ <br>
              አዲስ መንደር ቤቶች ፊትለፊት ንግድ ባንክ ጎን ሾቤ አያት ቅርንጫፍ
              </address>

            </div>

          </div>
        </li>

        <li class="contact-item">
          <div class="contact-card">

            <div class="card-icon">
              <ion-icon name="headset-outline" aria-hidden="true"></ion-icon>
            </div>

            <div class="card-content">

              <h3 class="h3 card-title">Call Here</h3>

              <a href="tel:+1234567890" class="card-link">+251 911 803799</a>
              <a href="tel:+2414524526" class="card-link">+251 901 901010</a>

            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>
  </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }
  }
});
  customElements.define('-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/Program.css"/>
    </head>
    
        
    </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }
  }
  });