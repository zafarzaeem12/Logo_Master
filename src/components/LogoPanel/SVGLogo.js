import React,{useState , useRef} from 'react'

const SVGLogo = ({data , text}) => {

  const [styles, Setstyles] = useState("");

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

  console.log("ggggggggsgg",movingText ,movingText2 )

  const handleImage = (e,dat) => {
      e.preventDefault();
      Setstyles(dat)
  }

const FinalLogoEditing = (e) => {
  console.log("yyyyyyyy",e.target.img)
}

  return (
    <>
      <div className="editor-logo gen-logo-box-wrap">
               
                 {
                   data &&
                   data.length > 0 &&
                   data?.flat(3)?.map((dat,ind) => {
                     return(
                       <>
                        <div className="gen-logo-box generated-logo-preview">
                            <div className="textshow-sect">
                              <p style={movingText.current}  className="textshow">{text[0]}</p>
                              <p  style={movingText2.current}  className="textshow">{text[1]}</p>
                            </div>
                                  <img 
                                    src={dat?.image}
                                    key={ind}
                                    width={100}
                                    height={100}
                                    onClick={(e) => { 
                                        handleImage(e , dat) ;
                                        FinalLogoEditing(e)
                                     }}
                                    className={styles === dat ? 'svgactive' : 'gen-logo-box'}
                                    
                                  />
                            
                          </div>
                       </>
                     )
                   })
                 }

         
			</div>
    </>
  )
}

export default SVGLogo