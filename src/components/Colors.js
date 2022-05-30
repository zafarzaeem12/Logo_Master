import React, { useEffect } from "react";

function Colors(
  {select , SetSelect,
    checked,Setchecked,
    isLoading,setIsLoading
  }) {



  const colorIntgration = async () => {
    const url = await fetch(`https://devv74.myprojectstaging.com/logo-master/public/api/colors`);
    const data = await url.json();
    SetSelect(data?.colors);
    setIsLoading(false)
  
  }
  
  const handleColorChange = (e,data) => {
    e.preventDefault();
    Setchecked(data?.id)
    // console.log("fffff",data?.id)
  }

  useEffect(()=>{
    colorIntgration();
  },[])

  
  return (
    <>
      <div class="create-text-1">
        <p class="heading title-font">
          Pick Some Colors <span>You Like</span>
        </p>
        <p>Colors help convey emotion in your logo</p>
      </div>
      <form className="logo-maker-form">
          <div className="color-selection-wrap">
            {
              !isLoading ? (
                select &&
                select.length > 0 &&
                select.map((data , index) => (
                  <div key={index} className="color-item">
                    <input  type="checkbox" value={checked} onChange={(e) => handleColorChange(e, data)} />
                    <span className={data?.name}>
                      <p>{data?.name}</p>
                      <p className="color-detail">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </span>
                  </div>
                ))

              ) : (
                <>
                  <div className="spinner-container">
                     <div className="loading-spinner">

                        </div>
                    </div>
                </>
              )
            }
           
        </div>
      </form>
    </>
  );
}

export default Colors;
