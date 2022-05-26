import React,{useState} from 'react'

const InputForms = (props) => {
    const [Companyname, Setcompanyname] = useState("");
    const [Slogan, Setslogan] = useState("");

    const handleCompanyName = (e) => {
        Setcompanyname(e.target.value)
    }

    const handleCompanySlogan = (e) => {
        Setslogan(e.target.value)
    }

  const handlechange = (e) => {
    e.preventDefault();
    const data = {
        name:    Companyname,
        slogan : Slogan
    }
    // console.log("rth",data)
   props.onDataHandle(data)
  
  };

  return (
    
    <form class="logo-maker-form" onSubmit={handlechange} >
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <input 
                            type="text"
                            placeholder="Company Name"
                            value={Companyname} 
                            onChange={handleCompanyName} 
                            className="logo-name" 
                            name="Companyname" 
                            />
                    
                    </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <input 
                        type="text" 
                        placeholder="Add a Slogan (Optional)" 
                        value={Slogan} 
                        onChange={handleCompanySlogan} 
                        className="logo-slogan" 
                        name="slogan"  />
                    
                    <input type="submit" />
                    </div>
            </div>
        </div>
  </form>
  )
}

export default InputForms