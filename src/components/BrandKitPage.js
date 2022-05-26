import React,{useEffect} from 'react'
import img1 from '../images/about-1-abs-1.png';
import img2 from '../images/about-1-abs-2.png';
import img3 from '../images/brand-card-icon-1.png';
import img4 from '../images/brand-card-icon-3.png';
import img5 from '../images/brand-video-img.png';
import img6 from '../images/brand-card-icon-1.png';
import img7 from '../images/card-box-img-1.jpg';
import img8 from '../images/card-box-img-1.jpg';
import img9 from '../images/card-box-img-1.jpg';
import img10 from '../images/card-box-img-1.jpg';
import img11 from '../images/card-box-img-1.jpg'; 
import img12 from '../images/card-box-img-1.jpg';
import img13 from '../images/card-box-img-1.jpg';
import img14 from '../images/card-box-img-1.jpg';
import img15 from '../images/card-box-img-1.jpg';
import img16 from '../images/card-box-img-1.jpg';
import img17 from '../images/card-box-img-1.jpg';
import img18 from '../images/card-box-img-1.jpg';
import img19 from '../images/card-box-img-1.jpg';
import img20 from '../images/card-box-img-1.jpg';
import img21 from '../images/card-box-img-1.jpg';
import img22 from '../images/card-box-img-1.jpg';
import img23 from '../images/brand-sec-3-img.png';
import img24 from '../images/index-3-abs-2.png';
import img25 from '../images/brand-sec-4-img.png';
import img26 from '../images/index-5-abs-1.png';
import AOS from 'aos';

function BrandKitPage() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
},[])
  return (
   <>
    <section className="brand-kit-banner inner-pg-banner about-banner">
        <div className="container">
          <div className="inner-banner-text">
            <p className="heading title-font">Make Your Business Look <span>Amazing With Master Brand Kit</span></p>
            <p>Access 300+ branded templates generated using your logo, brand colors, fonts, and photos. Then create beautiful marketing materials to grow	 your business! Start creating a logo by entering your company's name</p>
          </div>
        </div>
        <div className="abs-img abs-img-1 imj-2">
          <img src={img1} alt="img" className="img-fluid" />
        </div>
        <div className="abs-img abs-img-2 imj-3">
          <img src={img2} alt="img" className="img-fluid" />
        </div>
    </section>

    <section className="brand-sec-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-lg-start justify-content-center">
            <div className="brand-card text-center" data-aos="fade-up" data-aos-duration="1200">
              <div className="img-box">
                <img src={img6} className="img-fluid" alt="img" />
              </div>
              <div className="text-box">
                <h1 className="heading title-font">All in one place</h1>
                <p className="tagline">Design your logo, then create on-brand marketing materials in minutes.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="brand-card text-center" data-aos="fade-up" data-aos-duration="1200">
              <div className="img-box">
                <img src={img3} className="img-fluid" alt="img" />
              </div>
              <div className="text-box">
                <h1 className="heading title-font">300+ designs</h1>
                <p className="tagline">Get designer-made templates with photos and copy matched to your industry. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-lg-end justify-content-center last-card">
            <div className="brand-card text-center" data-aos="fade-up" data-aos-duration="1200">
              <div className="img-box">
                <img src={img4} className="img-fluid" alt="img" />
              </div>
              <div className="text-box">
                <h1 className="heading title-font">Creative Control</h1>
                <p className="tagline">Get designer-made templates with photos and copy matched to your industry. </p>
              </div>
            </div>
          </div>						
        </div>
        <div className="video-banner">
          <a href="#!"><img src={img5} className="img-fluid" alt="img" /></a>
        </div>
      </div>
    </section>

    <section className="brand-sec-2">
      <div className="container">
        <div className="top-heading" aos-init aos-animate data-aos="fade-up" data-aos-duration="1200">
          <h1 className="heading title-font">Your Complete <span>Marketing Toolkit</span></h1>
          <p className="tagline">Brand Kit is like having a personal graphic designer. As a subscriber, you can customize and download new designs anytime — all from one convenient dashboard.</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img7} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Social Profiles</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img8} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Social Posts</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img9} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Business Cards</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img10} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Email Signatures</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
            <a href="#!"className="card-box">
              <div className="img-box">
                <img src={img11} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Letterheads</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img12} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Brands Guidelines</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img13} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Social Covers</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
            <div className="card-box">
              <div className="img-box">
                <img src={img14} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Social Stories</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img15} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Invoies</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img16} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Advertisements</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img17} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Posters</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img18} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Flyers</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img19} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Presentations</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img20} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Cards</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img21} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Blog Banners</p>
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <a href="#!" className="card-box">
              <div className="img-box">
                <img src={img22} className="img-fluid w-100" alt="img" />
              </div>
              <p className="card-tagline">Business Propsals</p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="brand-sec-3 how-sec-3 index-sec-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 order-lg-1 order-md-2 order-2">
            <div className="img-box" data-aos-duration="1200" data-aos="fade-up-right">
              <img src={img23} className="img-fluid" alt="img" />
            </div>
          </div>
          <div className="col-lg-6 col-12 ps-lg-5 order-lg-2 order-md-1 order-1">
            <div className="index-text-2" data-aos-duration="1200" data-aos="fade-up-left">
              <p className="heading title-font">Bring Your Brand To Life</p>
              <p className="tagline">Imports your logo colors into the Brand Kit and sets you up with complementary fonts and patterns, plus photos and copy related to your industry. No more creating designs from scratch or generic templates!</p>
              <a href="#!" className="gen-btn">Try Logo Maker</a>
            </div>
          </div>
        </div>
      </div>
      <div className="abs-img abs-img-2">
        <img src={img24} alt="img" className="img-fluid" />
      </div>
    </section>

    <section className="brand-sec-4">
      <div className="container-fluid p-0">
        <img src={img25} className="img-fluid brand-sec-4-banner" alt="img" />
      </div>
    </section>

    <section className="index-sec-5">
      <div className="abs-img abs-img-1">
        <img src={img26} alt="img" className="img-fluid" />
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

export default BrandKitPage