import React, { useState , useEffect } from "react";

function Colors() {

  const [select, SetSelect] = useState([]);
  const [checked, Setchecked] = useState([]);

  const colorIntgration = async () => {
    const url = await fetch(`https://devv74.myprojectstaging.com/logo-master/public/api/colors`);
    const data = await url.json();
    SetSelect(data?.colors);
  }
  
  const handleChange = (e,data) => {
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
      {console.log("checkedchecked",checked)}
      <form className="logo-maker-form">
          <div className="color-selection-wrap">
              {
                select &&
                select.length > 0 &&
                select.map((data , index) => (
                  <div key={index} className="color-item">
                    <input  type="checkbox" value={checked} onChange={(e) => handleChange(e, data)} />
                    <span className={data?.name}>
                      <p>{data?.name}</p>
                      <p className="color-detail">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </span>
                  </div>
                ))
              }
        </div>
      </form>
    </>
  );
}

export default Colors;
