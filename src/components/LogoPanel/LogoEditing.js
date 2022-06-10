import React , {useRef} from 'react'

const LogoEditing = ({FinalLogoEditing ,Editing}) => {
  console.log("FinalLogoEditingzzzzzzzz",Editing)

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
    <div className="editor-logo gen-logo-box-wrap">
    <div  className="gen-logo-box generated-logo-preview">
              <div className="textshow-sect">
                <p style={movingText.current}  className="textshow">{Editing?.company_name}</p>
                <p  style={movingText2.current}  className="textshow">{Editing?.company_slogan}</p>
              </div>

              <img 
                src={Editing?.image}
                width={800}
                height={800}
                // onClick ={(e) => { 
                //     handleImage(e , data);
                //     FinalLogoEditing( data);
                //   }}
                // className={styles === data ? 'svgactive' : 'gen-logo-box'}
                
              />
          
      </div>
</div>
  )
}

export default LogoEditing