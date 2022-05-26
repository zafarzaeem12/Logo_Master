import React from 'react'
import img1 from '../images/about-1-abs-1.png'
import img2 from '../images/about-1-abs-2.png'
import img3 from '../images/how-sec-1-img.png'
import img4 from '../images/index-2-abs-2.png'
import img5 from '../images/how-sec-2-img.png'
import img6 from '../images/how-sec-2-abs-1.png'
import img7 from '../images/how-sec-3-img.png'
import img8 from '../images/index-3-abs-2.png' 
import img9 from '../images/how-sec-4-img.png'
import img10 from '../images/how-sec-5-img.png'
import img11 from '../images/index-5-abs-1.png'


function HowItsWork() {
  return (
   <>
      <section className="inner-pg-banner about-banner">
          <div className="container">
            <div className="inner-banner-text">
              <p className="heading title-font">How it <span>Work</span></p>
              <p>Looka combines your design preferences with AI to make beautiful logos you'll love. Once you have your logo, use the Brand Kit to access 300+ 	branded templates, create custom marketing assets, build a website, and launch your business!</p>
            </div>
          </div>
          <div className="abs-img abs-img-1 imj-2">
            <img src={img1} alt="img" className="img-fluid" />
          </div>
          <div className="abs-img abs-img-2 imj-3">
            <img src={img2} alt="img" className="img-fluid" />
          </div>
      </section>

      <section className="how-sec-1 index-sec-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-lg-1 order-md-2 order-2">
              <div className="img-box" data-aos-duration="1200" data-aos="fade-up-right">
                <img src={img3} className="img-fluid" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-2 order-md-1 order-1">
              <div className="index-text-2 ps-lg-4" data-aos-duration="1200" data-aos="fade-up-left">
                <p className="heading title-font">01. Start With Design Inspiration</p>
                <p className="tagline">Enter your company name and select the logo styles, colors, and symbols you like. AI-powered logo maker will use these as inspiration when generating your logo designs.</p>
                <a href="#!" className="gen-btn">Try Logo Maker</a>
              </div>
            </div>
          </div>
        </div>
        <div className="abs-img abs-img-2">
          <img src={img4} alt="img" className="img-fluid" />
        </div>
      </section>

      <section className="how-sec-2 index-sec-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <div className="index-text-2" data-aos-duration="1200" data-aos="fade-up-right">
                  <p className="heading title-font">02. Browse and favorite logos</p>
                  <p className="tagline">Within minutes, you’ll be browsing 100% custom logos tailored to your business. As you scroll, Looka will generate more designs based on your preferences.</p>
                  <a href="#!" className="gen-btn">Try Logo Maker</a>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="img-box" data-aos-duration="1200" data-aos="fade-up-left">
                  <img src={img5} className="img-fluid" alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="abs-img abs-img-2">
            <img src={img6} alt="img" className="img-fluid" />
          </div>
      </section>

      <section className="how-sec-3 index-sec-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-lg-1 order-md-2 order-2">
              <div className="img-box" data-aos-duration="1200" data-aos="fade-up-right">
                <img src={img7} className="img-fluid" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-12 ps-lg-4 order-lg-2 order-md-1 order-1">
              <div className="index-text-2" data-aos-duration="1200" data-aos="fade-up-left">
                <p className="heading title-font">03. Perfect Your design</p>
                <p className="tagline">Click any logo design to explore variations and change colors, text fonts, layouts, and symbols. You can also change spacing and sizing.</p>
                <a href="#!" className="gen-btn">Try Logo Maker</a>
              </div>
            </div>
          </div>
        </div>
        <div className="abs-img abs-img-2">
          <img src={img8} alt="img" className="img-fluid" />
        </div>
      </section>

      <section className="how-sec-4 index-sec-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="index-text-2" data-aos-duration="1200" data-aos="fade-up-right">
                <p className="heading title-font">04. Preview Logo Mockups</p>
                <p className="tagline">Favorite a logo to preview what it looks like on business cards, T-shirts, and more. As you make changes to logos in the editor, previews update in real-time.</p>
                <a href="#!" className="gen-btn">Try Logo Maker</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-box" data-aos-duration="1200" data-aos="fade-up-left">
                <img src={img9} className="img-fluid w-100" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-sec-5 index-sec-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 order-lg-1 order-md-2 order-2">
              <div className="img-box" data-aos-duration="1200" data-aos="fade-up-right">
                <img src={img10} className="img-fluid" alt="img" /> 
              </div>
            </div>
            <div className="col-lg-6 col-12 ps-lg-4 order-lg-2 order-md-1 order-1">
              <div className="index-text-2" data-aos-duration="1200" data-aos="fade-up-left">
                <p className="heading title-font">05. Download Your Files</p>
                <p className="tagline">After you choose and purchase a logo, we’ll send you all of the files a designer would, including high-res PNGs and vector logo files to use online and in print.</p>
                <a href="#!" className="gen-btn">Try Logo Maker</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="index-sec-5">
        <div className="abs-img abs-img-1">
          <img src={img11} alt="img" className="img-fluid" />
        </div>
        <div className="container">
          <div className="index-5-text" data-aos="fade-up" data-aos-duration="1200">
            <p className="heading">Trusted by Over 3000 Companies Worldwide</p>
            <p>Best deal for startups, professionals and small businesses</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 index-5-col">
              <div className="index-5-card purple" data-aos="fade-up" data-aos-duration="900">
                <p className="heading">56639</p>
                <p>LOGOS GENERATED</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 index-5-col">
              <div className="index-5-card orange" data-aos="fade-up" data-aos-duration="900" data-aos-delay="250">
                <p className="heading">3242</p>
                <p>CLIENTS SERVED</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 index-5-col">
              <div className="index-5-card green" data-aos="fade-up" data-aos-duration="900" data-aos-delay="500">
                <p className="heading">99.9%</p>
                <p>HAPPY FOUNDERS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default HowItsWork