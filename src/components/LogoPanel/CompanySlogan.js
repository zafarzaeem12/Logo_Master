import React, { Component } from 'react'

class CompanySlogan extends Component {
  constructor(props){
    super(props)
    this.state={
      slogan: props?.data?.company_slogan
    }

  }

  
  render() {

    const handlechange = (e) => {
      this.setState({slogan:e})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmitSlogan(this.state.slogan)
    }

    const { name ,data } = this.props
    return (
      <>
              <div class="form-group">
                 <label class="gen-label">{name}</label>
                 <form onSubmit={(e) => handleSubmit(e)} >
                    <input 
                          type="text" 
                          placeholder="Slogan" 
                          value={this.state.slogan}
                          class="logo-slogan gen-input"
                          onChange={(e) => handlechange(e.target.value)}
                    />
                 </form>
               </div>
      </>
    )
  }
}

export default CompanySlogan

// import React from 'react'

// const CompanySlogan = ({name,data}) => {
//   return (
//     <>
//         <div class="form-group">
//             <label class="gen-label">{name}</label>
//             <input 
//                 type="text" 
//                 placeholder="Slogan" 
//                 value={data?.company_slogan}
//                 class="logo-slogan gen-input"
//              />
//         </div>
//     </>
//   )
// }

// export default CompanySlogan