import React from 'react'
import { GoogleLogout } from 'react-google-login'
import { useNavigate  } from "react-router-dom";
const clientId = `53598149536-b6mjl3r97vvh8ih7kd7uu1gdlhjekjfa.apps.googleusercontent.com`
const Logout = () => {

    let navigate = useNavigate();

    const Logout  = (res) => {
        navigate ("/")  
    }

  return (
    <>
        <GoogleLogout 
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={Logout}
        />
    </>
  )
}

export default Logout