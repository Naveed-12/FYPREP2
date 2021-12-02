import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router";
import "../Style/SignIn.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormGroup } from "@mui/material";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        Email: "",
        Password: "",
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  handleSubmit = async (event) => {
    const { user } = this.state; 
    console.log("User is : ", user);
    event.preventDefault();
    const res = await fetch("http://localhost:5000/api/users/usersignin", {
      method: "post",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    })
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("InValid Data");
    } 
    else {
      window.alert(data);
      this.props.history.push("/home");
    } 
  }
  signup = (e) => {
    this.props.history.push("/SignInform");
  };
  render() {
    const { user } = this.state;
    return (
      <div className="signin_container">
        <div className="container1">
          <div className="container1__img"></div>
          <div className="container1__form">
            <div className="new__acount">
              <p className="new_account_signin">Sign in</p>
              <p className="signup-history">
                Don’t have a account{" "}
                <span className="new_account_signup" onClick={this.signup}>
                  {" "}
                  Sign up
                </span>
              </p>
            </div>
            <div className="fields">
              <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={(errors) => console.log(errors)}
              >
                <label className="field_label">Email</label>
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
                <label className="field_label">Password</label>
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
                <div className="field_button">
                  <button type="submit">Log in</button>
                
                  </div>
                
                <div className="checkinfo">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox color="secondary" />}
                      label="I agree to the terms and conditions"
                    />
                  </FormGroup>
                </div>
              </ValidatorForm>
             <Link to= "adminlogin"><button type="submit" className = "adminloginbutton">Admin Login</button></Link> 
               
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
