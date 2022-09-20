import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header';
import Logout from './Logout';
const Dashbaord = () => {
    let { state } = useLocation();
    const { name ,lastname ,email ,imgurl } = state
  
  return (
    <>
        <div>Dashbaord</div>
        <div>
            <h2>Name:{name} Last:{lastname}</h2>
            <h5>{email}</h5>
            <img src={imgurl} className="img34"/>
        </div>
        <Logout />
       
    </>
  )
}

export default Dashbaord