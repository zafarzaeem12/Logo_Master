import React, { Component } from "react";

export class CompanyName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props?.data?.company_name,
    };
  }
  render() {
    const handlechange = (e) => {
      this.setState({ name: e });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmitName(this.state.name);
    };

    const { CompanyName, data } = this.props;

    return (
      <>
        <div class="form-group">
          <label class="gen-label">{CompanyName}</label>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder="Logo Name"
              value={this.state.name}
              class="logo-name gen-input"
              onChange={(e) => handlechange(e.target.value)}
            />
          </form>
        </div>
      </>
    );
  }
}

export default CompanyName;
