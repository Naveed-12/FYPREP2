const routes = require("express").Router();
const User = require("../modules/userSchema");
const bycrypt = require('bcryptjs');

const Admin = require("../modules/adminSchema");

routes.post("/register", (req, res) => {
  const { Fname, Lname, Gender,Email, Password, Cnic, Contact } = req.body;
  const AddUser = async () => {
    try {
      if (!Fname || !Lname || !Gender || !Email || !Password || !Cnic || !Contact) {
        res.status(400).json({ error: "Invalid Input" });
      } else {
        const st = new User({
          Fname: req.body.Fname,
          Lname: req.body.Lname,
          Gender: req.body.Gender,
          Email:req.body.Email,
          Password: req.body.Password,
          Cnic: req.body.Cnic,
          Contact: req.body.Contact,
        });
        const result = await st.save();
        console.log(result);
        res.send(result);
      }
    } catch (err) {
      console.log(err);
    }
  };
  AddUser();
});
routes.post('/usersignin', async (req,res)=>{  
    const { Email, Password } = req.body;
  try {
    if (!Email || !Password) {
      return res.status(400).json({ error: "Input Fields Are Empty" });
    }
    const userLogin = await User.findOne({ Email: Email });

    if (userLogin) {
      const isMatch = await bycrypt.compare(Password, userLogin.Password);

      if (!isMatch) {
        res.status(400).json({ error: "User Error" });
      } else {
        console.log("Login SuccessFull");
        res.status(200).json({ success: {userLogin}});
      }
    } else {
      res.status(400).json({ error: "User Error" });
    }
  } catch (err) {
    console.log(err);
  }
})
routes.post('/adminsignin', async (req,res)=>{  
    const { Email, Password } = req.body;
  try {
    if (!Email || !Password) {
      return res.status(400).json({ error: "Input Fields Are Empty" });
    }
    const userLogin = await Admin.findOne({ Email: Email });

    if (userLogin) {
      const isMatch = await bycrypt.compare(Password, userLogin.Password);

      if (!isMatch) {
        res.status(400).json({ error: "User Error" });
      } else {
        console.log("Login SuccessFull");
        res.status(200).json({ success: {userLogin}});
      }
    } else {
      res.status(400).json({ error: "User Error" });
    }
  } catch (err) {
    console.log(err);
  }
})
routes.get('/dashboard', async (req,res)=>{
    const Users = await User.find();
    res.json(Users);
})
module.exports = routes;
