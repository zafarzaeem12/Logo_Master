import React,{useEffect} from 'react'
import img1 from "../images/index-banner-abs-1.png"
import img2 from "../images/index-banner-abs-2-1.png"
import img3 from "../images/index-banner-abs-3.png"
import img4 from "../images/index-2-img.png"
import img5 from "../images/index-2-abs-2.png"
import img6 from "../images/index-3-img.png"
import img7 from "../images/index-3-abs-2.png"
import img8 from "../images/index-4-1.png"
import img9 from "../images/index-4-1.png"
import img10 from "../images/index-4-2.png"
import img11 from "../images/index-4-2.png"
import img12 from "../images/index-4-3.png"
import img13 from "../images/index-4-3.png"
import img14 from "../images/index-4-4.png"
import img15 from "../images/index-4-4.png"
import img16 from "../images/index-4-5.png"
import img17 from "../images/index-4-5.png"
import img18 from "../images/index-4-6.png"
import img19 from "../images/index-4-6.png"
import img20 from "../images/index-4-abs-1.png"
import img21 from "../images/index-4-abs-1.png"   
import img22 from "../images/index-5-abs-1.png" 
import { Link } from 'react-router-dom'
import AOS from 'aos';

function Home() {
  useEffect(()=>{
    AOS.init({
      duration : 2000
    });
    AOS.refresh();
  },[])
  return (
   <>
    <section className="index-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="index-banner-text" data-aos="fade-up" data-aos-duration="1200">
                <p className="heading title-font">Create Stunning Logos <span>in Seconds</span></p>
                <p>Design a logo from hundreds of templates</p>
                <form action="editor.php">
                  <input type="text" placeholder="Your company name" />
                  <button type="submit" className="name-submit" id="nextPage" onClick="editorPage();">Try Logo Maker</button>
                </form>
              </div>
            </div>
          </div>
        </div>	
        <div className="index-abs-wrap">
          <div className="abs-img abs-img-1">
            <img src={img1} alt="icon" className="img-fluid" data-aos="fade-up-right" data-aos-duration="1200" />
          </div>
          <div className="abs-img abs-img-2">
            <img src={img2} alt="icon" className="img-fluid" data-aos="fade-up-left" data-aos-duration="1200" />
          </div>
          <div className="abs-img abs-img-3">
            <img src={img3} alt="icon" className="img-fluid" />
          </div>
        </div>
    </section>

    <section className="index-sec-2">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-5">
            <div className="index-text-2" data-aos-duration="1200" data-aos="fade-up-left">
              <p className="heading title-font">Easily Create A Stunning Logo, Instantly.</p>
              <p>Our logo maker generates a variety of options based on your style and preferences. You can then choose the ideal logo to represent your company’s personality and brand. The end result is a design that is adaptable, powerful, and perfectly matches your company’s branding strategy.</p>
              <Link to="/editor" className="gen-btn">Try Logo Maker</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="abs-img abs-img-1">
        <img src={img4} alt="img" className="img-fluid" />
      </div>
      <div className="abs-img abs-img-2">
        <img src={img5} alt="img" className="img-fluid" />
      </div>
    </section>

    <section className="index-sec-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="index-text-3" data-aos-duration="1200" data-aos="fade-up-right">
              <p clasName="heading title-font">Easily Create A Stunning Logo, Instantly.</p>
              <p>Our logo maker generates a variety of options based on your style and preferences. You can then choose the ideal logo to represent your company’s personality and brand. The end result is a design that is adaptable, powerful, and perfectly matches your company’s branding strategy.</p>
              <a href="editor.php" class="gen-btn">Try Logo Maker</a>
            </div>
          </div>
        </div>
      </div>
      <div className="abs-img abs-img-1">
        <img src={img6} alt="img" className="img-fluid" data-aos-duration="1200" data-aos="fade-up-left" />
      </div>
      <div className="abs-img abs-img-2">
        <img src={img7} alt="img" className="img-fluid" />
      </div>
   </section>

   <section class="index-sec-4">
	<div className="container">
		<div className="index-4-text" data-aos="fade-up" data-aos-duration="1200">
			<p className="heading">Get Your Logo Instantly From Logomaster</p>
			<p>Our logo maker generates a variety of options based on your style and preferences. You can then choose the ideal logo to represent your company’s personality and brand. </p>
		</div>
		<div className="row">
			<div className="col-lg-4 col-md-6 col-sm-6 col-12 index-4-col">
				<div className="index-4-card purple" data-aos="fade-up" data-aos-duration="900">
					<div className="icon-box purple">
						<div className="index-4-logo-inner">
							<div className="index-4-logo-inner-front">
								<div className="index-4-logo-img-wrap">
									<img src={img8} alt="icon" className="img-fluid" />
								</div>
							</div>
							<div className="index-4-logo-inner-back">
								<div className="index-4-logo-img-wrap">
									<img src={img9} alt="icon" className="img-fluid" />
								</div>
							</div>	
						</div>
					</div>
					<p className="heading">Easy To Use</p>
					<p>is simple and straightforward to use. You can make a creation for your business effortlessly in a few steps.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-6 col-12 index-4-col">
				<div className="index-4-card orange" data-aos="fade-up" data-aos-duration="900" data-aos-delay="250">
					<div className="icon-box orange">
						<div className="index-4-logo-inner">
							<div className="index-4-logo-inner-front">
								<div className="index-4-logo-img-wrap">
									<img src={img10} alt="icon" className="img-fluid" />
								</div>
							</div>
							<div class="index-4-logo-inner-back">
								<div className="index-4-logo-img-wrap">
									<img src={img11} alt="icon" classNameName="img-fluid" />
								</div>
							</div>	
						</div>
					</div>
					<p className="heading">Make Online</p>
					<p>works on any device and operating system. So make a logo online with no pesky software.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-6 col-12 index-4-col">
				<div className="index-4-card blue" data-aos="fade-up" data-aos-duration="900" data-aos-delay="500">
					<div className="icon-box blue">
						<div className="index-4-logo-inner">
							<div className="index-4-logo-inner-front">
								<div className="index-4-logo-img-wrap">
									<img src={img12} alt="icon" className="img-fluid" />
								</div>
							</div>
							<div className="index-4-logo-inner-back">
								<div className="index-4-logo-img-wrap">
									<img src={img13} alt="icon" className="img-fluid" />
								</div>
							</div>	
						</div>
					</div>
					<p className="heading">User-Friendly Interface</p>
					<p>The visual editor is uncomplicated and comfortable for both beginners and advanced users. </p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-6 col-12 index-4-col">
				<div className="index-4-card red" data-aos="fade-up" data-aos-duration="900">
					<div className="icon-box red">
						<div className="index-4-logo-inner">
							<div className="index-4-logo-inner-front">
								<div className="index-4-logo-img-wrap">
									<img src={img14} alt="icon" className="img-fluid" />
								</div>
							</div>
							<div className="index-4-logo-inner-back">
								<div className="index-4-logo-img-wrap">
									<img src={img15} alt="icon" className="img-fluid" />
								</div>
							</div>	
						</div>
					</div>
					<p className="heading">Endless Design Options</p>
					<p>Logomaker from a tremendous variety of icons, images, fonts, design objects, and colors. The possibilities are limitless.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-6 col-12 index-4-col">
				<div className="index-4-card light-green" data-aos="fade-up" data-aos-duration="900" data-aos-delay="250">
					<div className="icon-box light-green">
						<div className="index-4-logo-inner">
							<div className="index-4-logo-inner-front">
								<div className="index-4-logo-img-wrap">
									<img src={img16} alt="icon" className="img-fluid" />
								</div>
							</div>
							<div className="index-4-logo-inner-back">
								<div className="index-4-logo-img-wrap">
									<img src={img17} alt="icon" className="img-fluid" />
								</div>
							</div>	
						</div>
					</div>
					<p className="heading">Make Online</p>
					<p>works on any device and operating system. So make a logo online with no pesky software.</p>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-6 col-12 index-4-col">
				<div className="index-4-card dark-green" data-aos="fade-up" data-aos-duration="900" data-aos-delay="500">
					<div className="icon-box dark-green">
						<div className="index-4-logo-inner">
							<div className="index-4-logo-inner-front">
								<div className="index-4-logo-img-wrap">
									<img src={img18} alt="icon" className="img-fluid" />
								</div>
							</div>
							<div className="index-4-logo-inner-back">
								<div className="index-4-logo-img-wrap">
									<img src={img19} alt="icon" className="img-fluid" />
								</div>
							</div>	
						</div>
					</div>
					<p className="heading">User-Friendly Interface</p>
					<p>The visual editor is uncomplicated and comfortable for both beginners and advanced users. </p>
				</div>
			</div>
		</div>
	</div>
	<div className="abs-img abs-img-1">
		<img src={img20} alt="img" className="img-fluid" />
	</div>
	<div className="abs-img abs-img-2">
		<img src={img21} alt="img" className="img-fluid" />
	</div>
    </section>

    <section className="index-sec-5">
      <div className="abs-img abs-img-1">
        <img src={img22} alt="img" className="img-fluid" />
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

export default Home