
import React,{useState , useEffect} from 'react'
import { useNavigate  } from "react-router-dom";
import { gapi } from 'gapi-script'
import { GoogleLogin } from 'react-google-login'
import img1 from '../images/login-abs-img-1.png'
import img2 from '../images/login-abs-img-2.png'
import img3 from '../images/index-banner-abs-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF , faSkype ,faLinkedin } from '@fortawesome/free-brands-svg-icons'
const clientId = `53598149536-b6mjl3r97vvh8ih7kd7uu1gdlhjekjfa.apps.googleusercontent.com`
function Login() {
  const [name, Setname] = useState("");
  const [lastname , Setlastname] = useState(" ");
  const [email , Setemail] = useState(" ");
  const [imgurl , Setimgurl] = useState(" ");
  let navigate = useNavigate();

  const GoogleSuccess = (res) => {
    console.log("GoogleSuccess" , res?.profileObj)
    if(res?.profileObj){
        Setname(res?.profileObj?.name)
        Setlastname(res?.profileObj?.familyName)
        Setemail(res?.profileObj?.email)
        Setimgurl(res?.profileObj?.imageUrl)
        navigate ("/dashboard" ,{ state: {
          name:res?.profileObj?.name ,
          lastname:res?.profileObj?.familyName ,
          email:res?.profileObj?.email ,
          imgurl :res?.profileObj?.imageUrl
          }});
    }else{
      Setname(name)
      Setlastname(lastname)
      Setemail(email)
      Setimgurl(imgurl)
    }
    
  };

  const GoogleFailurefulresponse  =  (response) => {
    console.log("failure",response)
  }

  const NavigateToRegister = (e) => {
    e.preventDefault();
    navigate("/register")
  }

  useEffect(() => {
    const GoogleData = () => {
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };

    gapi.load(`client:auth2`, GoogleData)
  });

  

  return (
    <>
        <section className="login-sec inner-pg-banner about-banner">
          <div className="container">
            <div className="inner-banner-text">
              <p className="heading">Login For<br /><span>Logomaster</span> </p>
              <p className="tagline">By signing up, you agree to our <a href="#!"> terms of service</a></p>	
            </div>
            <form>
              <div className="form-group">
                <input type="name" required placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <input type="password" required placeholder="Password" />
              </div>
              <a href="#!" className="forget-btn">Forgot Password</a>
              <a href="#!" className="login-btn">Login</a>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={GoogleSuccess}
                    onFailure={GoogleFailurefulresponse}
                    className="login-btn"
                    isSignedIn={true}
                />
              <p style={{cursor: 'pointer'}} onClick={(e) => NavigateToRegister(e)} className="bottom-tagline behave">Dont have an acount? Signup </p>	
            </form>
            <ul className="socil-list list-unstyled">
              <li><a href="#!"><FontAwesomeIcon icon={faFacebookF} /></a></li>
							<li><a href="#!"><FontAwesomeIcon icon={faSkype} /></a></li> 
							<li><a href="#!"><FontAwesomeIcon icon={faLinkedin} /></a></li> 
            </ul>
            <p className="tagline-2">© 2021 Logomaker All Right Reserved</p>
          </div>
          <div className="abs-img abs-img-1 login-abs-1">
            <img src={img1} alt="img" className="img-fluid" />
          </div>
          <div className="abs-img abs-img-2 login-abs-2">
            <img src={img2} alt="img" className="img-fluid" />
          </div>
          <div className="login-abs-3">
            <img src={img3} alt="img" className="img-fluid" />
          </div>
        </section>

    </>
  )
}

export default Login