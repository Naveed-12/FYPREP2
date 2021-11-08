import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import "../Style/form.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import AlertError from "./Alert";
import fetch from "node-fetch";

function SignInform() {
  const history = useHistory();
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Gender, SetGender] = useState("");
  const [Fname, SetFname] = useState("");
  const [Lname, SetLname] = useState("");
  const [Cnic, SetCnic] = useState("");
  const [Contact, SetContact] = useState("");

  const registered = {
    Fname: Fname,
    Lname: Lname,
    Gender: Gender,
    Email: Email,
    Password: Password,
    Cnic: Cnic,
    Contact: Contact,
  };

  const submitform = async (req, res) => {
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
  };

  return (
    <div className="SignInform">
      <h2 className="form__logo">Property Ticket</h2>
      <form onSubmit={() => submitform()} id="form">
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
        <div className="text">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            name="radio-buttons-group"
            onChange={(e) => SetGender(e.target.value)}
            defaultValue="female"
            row
            aria-label="gender"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </div>
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
        <div id="alert" style={{ display: "none" }}>
          <AlertError title="Enter Valid Cnic!" />
        </div>
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
        <div className="form__btn">
          <Button
            variant="contained"
            color="success"
            type="submit"
            className="btn"

          >
            Submit
          </Button>
          <Link className = "back" to="/signin"> Click here to go back to signin page</Link>
        </div>
      </form>
    </div>
  );
}

export default SignInform;
