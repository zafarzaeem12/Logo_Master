import React from 'react' 
import img1 from '../images/login-abs-img-1.png'
import img2 from '../images/login-abs-img-2.png'
import img3 from '../images/index-banner-abs-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF , faSkype ,faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Register() {
  return (
    <>
        <section class="login-sec inner-pg-banner about-banner">
          <div class="container">
            <div class="inner-banner-text">
              <p class="heading">Sign Up For<br /><span>Logomaster </span> </p>
              <p class="tagline">By signing up, you agree to our <a href="#!"> terms of service</a></p>	
            </div>
            <form>
              <div class="form-group">
                <input type="name" required placeholder="Enter your email" />
              </div>
              <div class="form-group">
                <input type="password" required placeholder="Password" />
              </div>
              <a href="#!" class="forget-btn">Forgot Password</a>
              <a href="#!" class="login-btn">Signup</a>
              <p class="bottom-tagline">Already have an acount? <a href="#!">Login</a></p>	
            </form>
            <ul class="socil-list list-unstyled">
            <li><a href="#!"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="#!"><FontAwesomeIcon icon={faSkype} /></a></li> 
            <li><a href="#!"><FontAwesomeIcon icon={faLinkedin} /></a></li> 
            </ul>
            <p class="tagline-2">© 2021 Logomaker All Right Reserved</p>
          </div>
          <div class="abs-img abs-img-1 login-abs-1">
            <img src={img1} alt="img" class="img-fluid" />
          </div>
          <div class="abs-img abs-img-2 login-abs-2">
            <img src={img2} alt="img" class="img-fluid" /> 
          </div>
          <div class="login-abs-3">
            <img src={img3} alt="img" class="img-fluid" />
          </div>
      </section>

    </>
  )
}

export default Register