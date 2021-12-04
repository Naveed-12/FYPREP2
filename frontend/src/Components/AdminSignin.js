import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router";
import "../Style/AdminLogin.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class AdminLogin extends React.Component {
  constructor(props){
      super(props);
    this.state = {
        user: {
          Email: "",
          Password: "",
        },
      };
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (event) => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  handleSubmit = async (event) => {
    const { user } = this.state;
    event.preventDefault();
    console.log(user);
    const res = await fetch("http://localhost:5000/api/users/adminlogin", {
      method: "post",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    })
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("InValid Data");
    } else {
      window.alert("Login Successfull Admin");
      this.props.history.push("/Dashboard");
    }
  };

  render() {
    const { user } = this.state;
    return (
      <div className="ibsignin_container">
        <div className="ibcontainer1">
          <div className="ibcontainer1__img"></div>
          <div className="ibcontainer1__form">
            <div className="ibnew__acount">
              <p className="ibnew_account_signin"> Sign in</p>
            </div>
            <div className="ibfields">
              <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={(errors) => console.log(errors)}
              >
                <label>Email</label>
                <TextValidator
                  // label="Email"
                  onChange={this.handleChange}
                  name="Email"
                  value={user.Email}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                  size="small"
                  margin="dense"
                  fullWidth
                />
                <label>Password</label>
                <TextValidator
                  // label="Password"
                  onChange={this.handleChange}
                  name="Password"
                  value={user.Password}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  size="small"
                  type="password"
                  margin="dense"
                  id="outlined-password-input"
                  fullWidth
                />

                <div className="ibfield_button">
                  <button type="submit" >Log in</button>
                </div>
              </ValidatorForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(AdminLogin);
