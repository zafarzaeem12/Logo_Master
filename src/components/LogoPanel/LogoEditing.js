import React , {useRef , useState} from 'react'

const LogoEditing = ({Editing ,Names ,Slogans ,Size , sloganSize}) => {
  console.log("hhhheee",Size ,sloganSize )
  const movingText = useRef({
    position : 'relative',
    top : Math.ceil(Math.random()*100),
    bottom : Math.ceil(Math.random()*100),
    left : '95%',
    right : Math.ceil(Math.random()*100),
    transform: 'translate(-50% , -50%)'
  });

  const movingText2 = useRef({
    position : 'relative',
    top : Math.floor(Math.random()*50),
    bottom : Math.floor(Math.random()*50),
    left : '85%',
    right : Math.floor(Math.random()*50),
    transform: 'translate(-25% , -25%)'
  });



  return (
      <div  className="gen-logo-box generated-logo-preview logopanel-img">
              <div className="textshow-sect">
              <div>
                    {
                      Names === " " ? (
                            <p ref={movingText.current} style={{fontSize: Number(Size)}}  className="textshow">
                              { Editing?.company_name}
                            </p>
                      ) : (
                        <p ref={movingText.current} style={{fontSize: Number(Size)}} className="textshow">
                          { Names}
                        </p>
                      )
                  }
              </div>
              <div>
              {
                        Slogans === " " ? (
                          <p  ref={movingText2.current} style={{fontSize: Number(sloganSize)}}  className="textshow">{Editing?.company_slogan}</p>
                        ) : (
                          <p  ref={movingText2.current} style={{fontSize: Number(sloganSize)}}  className="textshow">{Slogans}</p>
                        )
                    }
              </div>
             
                  
                   

                   
                
              
                
              </div>

              <img 
                src={Editing?.image}
                // onClick ={(e) => { 
                //     handleImage(e , data);
                //     FinalLogoEditing( data);
                //   }}
                // className={styles === data ? 'svgactive' : 'gen-logo-box'}
                
              />
          
      </div>
  )
}

export default LogoEditing