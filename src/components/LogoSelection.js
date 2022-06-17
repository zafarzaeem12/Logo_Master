import React from 'react'

const LogoSelection = ({isLoading,logoimages,handleimage,colorIntgration,DataByCategory,Active,Selected,styles}) => {
  return (
    <>
         <div className="create-text-1">
              <p className="heading title-font">Pick some logos</p>
              <p>We'll use these as inspiration.</p>
            </div>
            <form className="logo-maker-form">
              <div className="catgImgWrap">
                <div className="catgImg">
                  {isLoading ? (
                      <div className="spinner-container">
                        <div className="loading-spinner"></div>
                    </div>
                  ) : (
                    logoimages &&
                    logoimages?.length > 0 &&
                    logoimages?.map((data) => {
                      return (
                        <>
                          {data?.logos &&
                            data?.logos?.length > 0 &&
                            data?.logos?.map((dat, ind) => {
                              return (
                                <>
                                  <img
                                    src={dat?.image}
                                    key={ind}
                                    width={200}
                                    height={200}
                                    alt={"img.jpg"}
                                    onClick={(e) => {
                                      handleimage(e, dat);
                                       colorIntgration(dat);
                                      if(Active === 3) {
                                       return  DataByCategory(Selected, dat); 
                                      }
                                    }}
                                    className={
                                      styles === dat
                                        ? "imageactive"
                                        : "imagenonactive"
                                    }
                                  />
                                </>
                              );
                            })}
                        </>
                      );
                    })
                  )}
                </div>
              </div>
            </form>
    </>
  )
}

export default LogoSelection