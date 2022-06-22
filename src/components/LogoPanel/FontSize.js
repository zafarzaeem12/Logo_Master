import React,{useState} from 'react'

const FontSize = (props) => {

  const [Size , setSize] = useState(22)

  const handlechange = (e) => {
    console.log("mmmmm",e)
    setSize(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmitSize(Size)
  }

  return (
    <>
        <div class="form-group">
            <label>Font Size</label>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input  
                type="number" 
                placeholder="16" 
                id="logo-text-size" 
                value={Size}
                class="gen-input" 
                onChange={(e) => handlechange(e.target.value)}
                /> 
            </form>
        </div>
    </>
  )
}

export default FontSize