const routes = require("express").Router();
const User = require("../modules/userSchema");
const bycrypt = require('bcryptjs');
const Admin = require("../modules/adminSchema");

routes.get('/userdatacount' , (req,res)=>{  
    const getCount = async() => {
      try{
     const count = await User.find().count();
      res.send({count});
    }catch(err){
      console.log(err)
    }   
  }
  getCount();
})

routes.get('/pendinguserdatacount' , (req,res)=>{  
  const getCount = async() => {
    try{
   const Pcount = await User.find({Status:true}).count();
    res.send({Pcount});
  }catch(err){
    console.log(err)
  }   
}
getCount();
})
routes.delete('/deleteuser' , async (req , res)=>{
  const { _id,Fname, Lname, Gender,Email, Password, Cnic, Contact } = req.body;
  const result = await User.remove({_id:_id});
  res.send(result);
})
routes.get('/userdata' , (req,res)=>{  
  const getCount = async() => {
    try{
   const data = await User.find();
    res.json(data);
  }catch(err){
    console.log(err)
  }   
}
getCount();
})
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
    console.log("Email : ", Email);
    try {
    if (!Email || !Password) {
      return res.status(400).json({ error: "Input Fields Are Empty" });
    }
    const userLogin = await User.findOne({ Email: Email });
    console.log("Pass USer : ", userLogin.Password);
    if (userLogin) {
      const isMatch = await bycrypt.compare(Password, userLogin.Password);
      if (!isMatch) {
        res.status(400).json("User Error");
      } else {
        console.log("Login SuccessFull");
        if(userLogin.Status){
          res.status(200).json("Your Request is Pending on Admin You Cannot Buy and Sell")
        }
        else{
          res.status(200).json("Login Successfully");
        }
        console.log(userLogin);
       return userLogin;
      }
    } else {
      res.status(400).json({ error: "User Error" });
    }
  } catch (err) {
    console.log(err);
  }
})
routes.post('/adminlogin', async (req,res)=>{  
    const { Email, Password } = req.body;
  try {
    if (!Email || !Password) {
      return res.status(400).json({ error: "Input Fields Are Empty" });
    }
    const adminLogin = await Admin.findOne({ Email: Email });

    if (adminLogin) {
      const isMatch = await bycrypt.compare(Password, adminLogin.Password);

      if (!isMatch) {
        res.status(400).json({ error: " Error" });
      } else {
        console.log("Login SuccessFull");
        res.status(200).json({ success: {adminLogin}});  
      }
    } else {
      res.status(400).json({ error: " Error" });
    }
  } catch (err) {
    console.log(err);
  }
})
routes.get('/dashboard', async (req,res)=>{
    const Users = await User.find();
    res.json(Users);
})
routes.put('/approve',async (req,res)=>{
  const {_id} =req.body;   
  console.log("id is : ", _id);
  const result = await User.updateOne({_id:_id},{Status:false} );
  res.send(result);
})
module.exports = routes;
