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

        <h1 class="h1 hero-title">የክርስቶስ ታላቅ ተልዕኮ አለም አቀፍ ቤተክርስትያን</h1>

        <p class="hero-text">
        ነብይት ኤልሳቤት ታፈሰ ከ 2010 ጀምሮ   በሀገር ውስጥም ከሀገር ውጪም በመዘዋወር ወንጌልን በመስበክ ለብዙዎች ነፃ መውጣት እና መፈወስ እና
         መባረክ ምክንያተ የሆነች ወጣት አገልጋይ ነች አሁን በ አዲስ አበባ የክርስቶስ ታላቅ ተልዕኮ አለም አቀፍ ቤተክርስትያን ን እየመራች በሳምንት ሶስት
        ጊዜ ከተለያዩ ሀገሮች ፕሮግራሙን ለመሳተፍ የሚመጡ ምእመንን እያገለገለ ች በአዲስ አበባ እና በክልል ከተሞች በጎዳናዎች ላይ ወንጌልን በመስበክ  
        እያገለገለች ትገኛለች እንዲሁም  CGM TV ETHIOPIA በሚል የቴሌቪዥን ስርጭት ብዙዎች የበረከቱ ተካፋይ እየሆኑ ይገኛል  ።
        </p>

        <div style="justify-content:center;" class="btn-group">
          

          <a href="service.html" class="flex-btn">
            <div class="btn-icon">
              <ion-icon name="play" aria-hidden="true"></ion-icon>
            </div>

            <span class="span">Explore</span>
          </a>
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

            <li class="listset">
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 510; --height: 450;">
                  <!-- <img src="./assets/images/project-4.jpg" width="510" height="700" loading="lazy"
                    alt="Stuck with to-do list, I created a new app for" class="img-cover"> -->
                </figure>

                <div class="card-content">

                  <p class="card-subtitle">እሁድ</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">ጠዋት 3፡30 እስከ 7፤30 የአምልኮ እና የቃል ጊዜ</a>
                  </h3>
                  
                  <h3 class="h3">
                    <a href="#" class="card-title">ከሰአት ከ 10፡00 እስከ 1፡30 የትንቢት እና የመንፈስ ቅዱስ ሙላት</a>
                  </h3>

                 

                </div>

              </div>
            </li>

            <li class="listset">
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 510; --height: 450;">
                  <!-- <img src="./assets/images/project-5.jpg" width="510" height="700" loading="lazy"
                    alt="Examples of different types of sprints" class="img-cover"> -->
                </figure>

                <div class="card-content">

                  <p class="card-subtitle">ማክሰኞ</p>

                  <h3 class="h3">
                    <a href="#" class="card-title"> ከ 10፡00 እስከ 1፡30 የአምልኮና የትምርት ጊዜ </a>
                  </h3>

                  

                </div>

              </div>
            </li>

            <li class="listset">
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 510; --height: 450;">
                 <!-- <img src="./assets/images/project-6.jpg" width="510" height="700" loading="lazy"
                    alt="Redesigning the New York times app" class="img-cover"> -->
                </figure>

                <div class="card-content">

                  <p class="card-subtitle">ሐሙስ</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">ከ 3፡30 እስከ 8፡00  የአምልኮ የቃልና ነጻ የመውጣት የመውጣት፡የትንቢት የፈውስ ጊዜ</a>
                  </h3>

                  

                </div>

              </div>
            </li>

            <li class="listset">
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 510; --height: 450;">
                 <!-- <img src="./assets/images/project-6.jpg" width="510" height="700" loading="lazy"
                    alt="Redesigning the New York times app" class="img-cover"> -->
                </figure>

                <div class="card-content">

                  <p class="card-subtitle">አርብ</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">ከጥዋቱ 3፡00 እስከ 6፡00 የምክር አገልግሎት</a>
                  </h3>

                  

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

      <figure style="margin:auto;" class="about-banner">
        <img style="border-radius: 25px;" src="./assets/images/about-banner.png" width="450" height="300" loading="lazy" alt="about banner"
          class="">
      </figure>

      <div class="about-content">

        <h2 class="h2-sm section-title"></h2>

        <p style="font-size:1.2em;" class="section-text">
         በጌታ የተወደዳችሁ የክርስቶስ ቤተሰቦች: ባለፉት ጥቂት አመታት በዚህ ወንጌል አገልግሎት ከቤተ ክርስቲያን ጋር አብራችሁ በገንዘባችሁ፣ በምክራችሁ ፣በፀሎታችሁ ፣በጉልበታችሁ ከጎናችን የቆማችሁ ሁላችሁንም እግዚአብሄር አምላክ አብዝቶ ይባርካችሁ።
        </p>

        <ul class="about-list">

          <li class="has-before">
          "...አሁን ሥራችሁን እንዲሁም በፊትም ሆነ አሁን ቅዱሳንን በመርዳት ስለ ስሙ ያሳያችሁትን ፍቅር አይረስም።"
          </li>

          <li class="has-before">
          በተጨማሪም ይህን መልእክት ለሌሎች በማህበራዊ ድህረ ገጾች በማጋራት አብረውን ይተባበሩ። 
          </li>

          <li class="has-before">
          እግዚአብሄር ዘመናችሁን፣ ህይወታችሁን፣ ሥራችሁን፣ አገልግሎታችሁን፣ ቤተሰባችሁን እና ሁለንተናችሁን ይባርክ።
          </li>

        </ul>

        <div style="justify-content: center;" class="btn-group">
        
          <a href="#" class="btn btn-primary">ነብይት ኤልሳቤት ታፈሰ</a>

          
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
          <h3 style="text-align:center;">የክርስቶስ ታላቅ ተልዕኮ አለም አቀፍ ቤተክርስትያን በኢትዮጵያና ከኢትዮጵያ ውጭ የሚደረጉ የወንጌል አገልግሎቶችን እንድትደግፉ በጌታ ፍቅር ጥሪ ታቀርባለች።</h3>
          <h3 style="text-align:center;">ይህን አገልግሎት መደገፍ ለምትፈልጉ</h3>
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
                    <span class="span">ኤልሳቤጥ ታፈሰ</span>
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
                    <span class="span">ኤልሳቤጥ ታፈሰ</span>

                    
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="service-card has-after">

                <figure class="card-icon">
                  <img src="./assets/images/Hibret.svg" width="140" height="140" loading="lazy"
                    alt="Professional Content Writer" class="img">
                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">Birhan Bank</h3>

                  <p class="card-text">
                  1143340530256
                  </p>

                  <a href="#" class="btn-link">
                    <span class="span">ኤልሳቤጥ ታፈሰ</span>

                    
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
                    <span class="span">ኤልሳቤጥ ታፈሰ</span>

                    
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
  <h1> Gallery </h1>
    <div id="image-gallery">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/500"><img src="./assets/images/img1.PNG" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/600"><img src="./assets/images/img2.PNG" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/700"><img src="./assets/images/img3.PNG" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/800"><img src="./assets/images/pic2.jpg" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/900"><img src="./assets/images/img9.PNG" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/1000"><img height="250" src="./assets/images/img6.PNG" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/1100"><img height="250" src="./assets/images/pic1.jpg" class="img-responsive"></a>
            <div class="img-overlay">
              <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 image">
          <div class="img-wrapper">
            <a href="https://unsplash.it/1200"><img height="250" src="./assets/images/img8.PNG" class="img-responsive"></a>
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

          

          <ul class="grid-list grid-lists">
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

              <a href="mailto:hello@luaz.com" class="card-link">Elisatafe@gmail.com</a>
              <a href="mailto:info@luaz.com" class="card-link">info@cgmtvethiopia.com</a>

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
              አዲስ አበባ ጎፋ ካምፕ ወደ ማብራት ሃይል በሚወስደው መንገድ <br>
               100 ሜትር ገባ እንዳሉ ጉሊቱ የነበረው ፊት ለፊት <br> በቤቴል  አጥብያ ደግሞ ቤቴል ከቶታሉ ፊት ለፊት ያገኙናል      
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
              
              
              
              

              <a href="tel:0910834049" class="card-link">+251 910 834049</a>
              <a href="tel:0978066070" class="card-link">+251 978 066070</a>
              <a href="tel:0977202361" class="card-link">+251 977 202361</a>
              <a href="tel:0924110247" class="card-link">+251 924 110247</a>

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
  customElements.define('package-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/package.css"/>
  </head>
  <!-- 
        - #PACKAGE
      -->

      <section style="margin-top: 30px;" class="package" id="package">
        <div class="container">

          <p class="section-subtitle"></p>

          <h2 class="h2 section-title">Join Our Zoom Meetings.</h2>

          

          <ul class="package-list">

            <li>
              <div class="package-card">

                <figure class="card-banner">
                  <img src="./assets/images/zoom.jpg" alt="Experience The Great Holiday On Beach" loading="lazy">
                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">Elisabet Tafese is inviting you to a scheduled Zoom meeting.</h3>

                  <p class="card-text">
                  CGM TV / Prophetes Elsabet የትንቢት የቃል እና ነጻ መውጣት ጊዜ 
                  Time:  ሁል ጊዜ ቅዳሜ ከምሽቱ 4:00-6:00 
                  </p>

                  <ul class="card-meta-list">

                    <li class="card-meta-item">
                      <div class="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p class="text"> 3:00 PM</p>
                      </div>
                    </li>

                    

                    <li class="card-meta-item">
                      <div class="meta-box">
                        <ion-icon name="location"></ion-icon>

                        <p class="text">Washington DC</p>
                      </div>
                    </li>

                  </ul>
                  <ul class="card-meta-list">

                  <li class="card-meta-item">
                    <div class="meta-box">
                      <ion-icon name="time"></ion-icon>

                      <p class="text">3:00 AM</p>
                    </div>
                  </li>

                  

                  <li class="card-meta-item">
                    <div class="meta-box">
                      <ion-icon name="location"></ion-icon>

                      <p class="text">Toronto</p>
                    </div>
                  </li>

                </ul>
                <ul class="card-meta-list">

                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="time"></ion-icon>

                    <p class="text">4:00 ማታ local time</p>
                  </div>
                </li>

               

                <li class="card-meta-item">
                  <div class="meta-box">
                    <ion-icon name="location"></ion-icon>

                    <p class="text">Ethiopia</p>
                  </div>
                </li>

              </ul>

                </div>

                <div class="card-price">

                  <div class="wrapper">

                    

                  </div>

                  <p class="price">
                  ID  89087211519 
                  
                    <span>Passcode 756184</span>
                  </p>

                  <a href="https://us06web.zoom.us/j/89087211519?pwd=NENhUC9WM3Z6RzBDMXZ1Umc1bWxVZz09 " class="btn btn-secondary">Join Meeting</a>

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
  customElements.define('prog-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/prog.css"/>
    </head>
    <section class="section class bg-dark has-bg-image" id="class" aria-label="class"
    style="background-image: url('./assets/images/classes-bg.png')">
    <div class="container">

      <h2 style="color:#13206e;text-align:center;">የፕሮግራም ቀናት </h2>

      <h2 class="h2 section-title text-center"></h2>

      <ul class="class-list has-scrollbar">

        <li class="scrollbar-item">
          <div class="class-card">

            <figure class="card-banner img-holder" style="--width: 416; --height: 350;">
              <img src="./assets/images/service-1.jpg" width="416" height="240" loading="lazy" alt="program_image_1"
                class="img-cover">
            </figure>

            <div class="card-content">

              <div class="title-wrapper">
                <img src="./assets/images/clock.svg" width="34" height="34" loading="lazy" alt="Clock">
                <h3 class="h3">
                  <a href="#" style="margin-left: 20px; color:white;" class="card-title">እሁድ ጥዋት 3፡30 እስከ 7፤30 የአምልኮ እና የቃል ጊዜ፡ ከሰአት ከ 10፡00 እስከ 1፡30 የትንቢት እና የመንፈስ ቅዱስ ሙላት</a>
                </h3>
              </div>

              <!-- <p class="card-text">
                Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.
              </p> -->

              <!-- <div class="card-progress">

                <div class="progress-wrapper">
                  <p class="progress-label">Class Full</p>

                  <span class="progress-value">85%</span>
                </div>

                <div class="progress-bg">
                  <div class="progress-bar" style="width: 85%"></div>
                </div>

              </div> -->

            </div>

          </div>
        </li>

        <li class="scrollbar-item">
          <div class="class-card">

            <figure class="card-banner img-holder" style="--width: 416; --height: 350;">
              <img src="./assets/images/service-1.jpg" width="416" height="240" loading="lazy" alt="program_image_2"
                class="img-cover">
            </figure>

            <div class="card-content">

              <div class="title-wrapper">
                <img src="./assets/images/clock.svg" width="34" height="34" loading="lazy" alt="Clock">

                <h3 class="h3">
                  <a href="#" style="margin-left: 20px; color:white;"" class="card-title">ማክሰኞ ከ 10፡00 እስከ <br>1፡30 የአምልኮና የትምርት ጊዜ </a>
                </h3>
              </div>

              <!-- <p class="card-text">
                Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.
              </p> -->

              <!-- <div class="card-progress">

                <div class="progress-wrapper">
                  <p class="progress-label">Class Full</p>

                  <span class="progress-value">90%</span>
                </div>

                <div class="progress-bg">
                  <div class="progress-bar" style="width: 90%"></div>
                </div>

              </div> -->

            </div>

          </div>
        </li>

        <li class="scrollbar-item">
          <div class="class-card">

            <figure class="card-banner img-holder" style="--width: 416; --height: 350;">
              <img src="./assets/images/service-1.jpg" width="416" height="240" loading="lazy" alt="program_image_3"
                class="img-cover">
            </figure>

            <div class="card-content">

              <div class="title-wrapper">
                <img src="./assets/images/clock.svg" width="34" height="34" loading="lazy" alt="Clock">

                <h3 class="h3">
                  <a href="#" style="margin-left: 20px; color:white;" class="card-title">ሐሙስ ከ 3፡30 እስከ 8፡00  የአምልኮ የቃልና ነጻ የመውጣት፡የትንቢት የፈውስ ጊዜ</a>
                </h3>
              </div>

              <!-- <p class="card-text">
                Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.
              </p> -->

              <!-- <div class="card-progress">

                <div class="progress-wrapper">
                  <p class="progress-label">Class Full</p>

                  <span class="progress-value">60%</span>
                </div>

                <div class="progress-bg">
                  <div class="progress-bar" style="width: 60%"></div>
                </div>

              </div> -->

            </div>

          </div>
        </li>
        <li class="scrollbar-item">
          <div class="class-card">

            <figure class="card-banner img-holder" style="--width: 416; --height: 350;">
              <img src="./assets/images/service-1.jpg" width="416" height="240" loading="lazy" alt="program_image_3"
                class="img-cover">
            </figure>

            <div class="card-content">

              <div class="title-wrapper">
                <img src="./assets/images/clock.svg" width="34" height="34" loading="lazy" alt="Clock">

                <h3 class="h3">
                  <a href="#" style="margin-left: 20px; color:white;" class="card-title">አርብ ከጥዋቱ 3፡00 እስከ <br> 6፡00 የምክር አገልግሎት</a>
                </h3>
              </div>

              <!-- <p class="card-text">
                Suspendisse nisi libero, cursus ac magna sit amet, fermentum imperdiet nisi.
              </p> -->

              <!-- <div class="card-progress">

                <div class="progress-wrapper">
                  <p class="progress-label">Class Full</p>

                  <span class="progress-value">60%</span>
                </div>

                <div class="progress-bg">
                  <div class="progress-bar" style="width: 60%"></div>
                </div>

              </div> -->

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