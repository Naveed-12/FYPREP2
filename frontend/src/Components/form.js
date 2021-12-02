import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useSelector, useDispatch } from "react-redux";
import "../Style/form.css";
import { useHistory } from "react-router";
import emailjs from 'emailjs-com';


function SignInform() {
  const history = useHistory();
  const [Email, SetEmail] = React.useState("");
  const [Password, SetPassword] = React.useState("");
  const [Fname, SetFname] = React.useState("");
  const [Lname, SetLname] = React.useState("");
  const [Gender, SetGender] = React.useState(""); 
  const [Cnic, SetCnic] = React.useState("");
  const [Contact, SetContact] = React.useState("");
  const [Count, SetCount] = React.useState(0);

  const registered = {
    Fname: Fname,
    Lname: Lname,
    Gender: Gender,
    Email: Email,
    Password: Password,
    Cnic: Cnic,
    Contact: Contact,
  }
  const sendEmail = ()=>{
   const send = {
     name : Fname +' '+Lname,
     user_email:Email,
     message:"Your Request is Submited ... Wait for approval by Admin ....",

   }
   console.log("Sending Email : ",send);
    emailjs.sendForm('service_kqbdomq'
    ,'template_zcen2g2'
    ,send,'user_a2dRXfS2AhJdCHEGP1QF9'
    ).then(res=>
      {
        console.log(res);
      }).catch(err=>{
        console.log("Error",err);
      })

  }
  const submitform = async (event) => {
    event.preventDefault();
    console.log(registered);
    const respose = await fetch("http://localhost:5000/api/users/register", {
      method: "post",
      body: JSON.stringify(registered),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        console.log("Response : ", respose);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Submit Finished");
    history.push("/signin");
    sendEmail();
  };
  // useEffect(() => {
    
  // }, []);
  const btnclick1 = (event) => {
    event.preventDefault();
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "block";
  };
  const btnclick2 = (event) => {
    event.preventDefault();
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "block";
  };
  return (
    <div className="signin_container">
      <div className="container1">
        <div className="container1__img"></div>
        <div className="container1__form">
          <div className="new__acount">
            <p className="new_account_signin">Create an Account</p>
          </div>
          <div className="field1">
            <div id="btn1">
              <form onSubmit={btnclick1}>
                <div>
                  <div className="text">
                    <TextField
                      onChange={(e) => SetFname(e.target.value)}
                      label="First Name"
                      variant="standard"
                      required
                      fullWidth
                      inputProps={{ pattern: "[a-z-A-Z]{3,8}" }}
                      placeholder="Contains 3 to 8 letters"
                    />
                  </div>
                  <div className="text">
                    <TextField
                      onChange={(e) => SetLname(e.target.value)}
                      label="Last Name"
                      variant="standard"
                      name="lname"
                      required
                      fullWidth
                      inputProps={{ pattern: "[a-z-A-Z]{3,8}" }}
                      placeholder="Contains 3 to 8 letters"
                    />
                  </div>
                  <RadioGroup
                    name="radio-buttons-group"
                    defaultValue="female"
                    onChange = {(e)=>SetGender(e.target.value)}
                    row
                    aria-label="gender"
                    className="text"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </div>
                <label className="btn1-label">
                  Already have one ?{" "}
                  <span className="btn1-span" onClick={() => history.push("/")}>
                    Sign in
                  </span>
                </label>
                <div className="field1_button">
                  <button type="submit">Next</button>
                </div>
              </form>
            </div>
            <div id="btn2" style={{ display: "none" }}>
              <form onSubmit={btnclick2}>
                <div className="text">
                  <TextField
                    onChange={(e) => SetEmail(e.target.value)}
                    label="Email"
                    variant="standard"
                    required
                    fullWidth
                    type="email"
                    inputProps={{ pattern: ".+@gmail.com" }}
                    placeholder="xyz5@gmail.com"
                  />
                </div>
                <div className="text">
                  <TextField
                    type="password"
                    onChange={(e) => SetPassword(e.target.value)}
                    label="Password"
                    variant="standard"
                    required
                    fullWidth
                  />
                </div>
                <div className="text">
                  <TextField
                    onChange={(e) => SetCnic(e.target.value)}
                    label="CNIC"
                    variant="standard"
                    required
                    fullWidth
                    placeholder="XXXXX-XXXXXXX-X"
                    inputProps={{ pattern: "[0-9]{5}-[0-9]{7}-[0-9]{1}" }}
                  />
                </div>
                <label className="btn1-label">
                  Already have one ?{" "}
                  <span className="btn1-span" onClick={() => history.push("/")}>
                    Sign in
                  </span>
                </label>
                <div className="field1_button">
                  <button type="submit">Next</button>
                </div>
              </form>
            </div>

            <div id="btn3" style={{ display: "none" }}>
              <form onSubmit={submitform}>
                <div className="text">
                  <TextField
                    onChange={(e) => SetContact(e.target.value)}
                    label="Contact"
                    variant="standard"
                    name="Contact"
                    required
                    fullWidth
                    type="tel"
                    inputProps={{ pattern: "[0-9]{4}-[0-9]{7}" }}
                    placeholder="0301-XXXXXXX"
                  />
                </div>
                <label className="btn1-label">
                  Already have one ?{" "}
                  <span className="btn1-span" onClick={() => history.push("/")}>
                    Sign in
                  </span>
                </label>
                <div className="field1_button">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInform;
