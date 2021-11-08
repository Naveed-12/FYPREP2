export const Add__User=({Email,Password,Cnic,Contact,Fname,Lname}={})=>({
    type:'ADDUSER',
    new_user:{
    Email,
    Password,
    Cnic,
    Contact,
    Fname,
    Lname
    }
})