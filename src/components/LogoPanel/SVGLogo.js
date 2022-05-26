import React,{useState} from 'react'

const SVGLogo = ({data , text}) => {

  const [styles, Setstyles] = useState("");

  const handleImage = (e,dat) => {
      e.preventDefault();
      Setstyles(dat)
     

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
                              <p className="textshow">{text[0]}</p>
                              <p className="textshow">{text[1]}</p>
                            </div>
                                  <img 
                                    src={dat}
                                    key={ind}
                                    width={100}
                                    height={100}
                                    onClick={(e) => handleImage(e , dat)}
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