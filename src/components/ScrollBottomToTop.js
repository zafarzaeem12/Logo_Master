import  React, { useState, useEffect } from 'react'
import {  FaArrowAltCircleUp  } from 'react-icons/fa'
const ScrollBottomToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

   
  const scrolling = () => {
    window.addEventListener("scroll", () => {
        if(window.pageYOffset > 300){
            setShowTopBtn(true)
          
        }
        else{
            setShowTopBtn(false)
        }
    })
  }

    const gotoTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener("scroll",scrolling)

        return () => {
            window.removeEventListener("scroll",scrolling)
        }
    }, []);
    

  return (

    <div className='top-to-btm'>
        {" "}
        {
            showTopBtn && (
                <FaArrowAltCircleUp 
                    className=' icon-position icon-style'
                    onClick={gotoTop} 
                    />
               
            )
        }
        {" "}
    </div>
  )
}

export default ScrollBottomToTop