import React from 'react'

const SVGLogo = ({data , text}) => {


  return (
    <>
      <div className="editor-logo gen-logo-box-wrap">
               
                 {
                   data &&
                   data.length > 0 &&
                   data?.flat(3)?.map((dat,ind) => {
                    {console.log("tyiii",dat)}
                     return(
                       <>
                        <div className="gen-logo-box generated-logo-preview">
                            <div className="textshow-sect">
                            <p className="textshow">{text[0]}</p>
                            <p className="textshow">{text[1]}</p>

                                  <img 
                                  src={dat}
                                  key={ind}
                                  width={100}
                                  height={100}
                                  />
                            </div>
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