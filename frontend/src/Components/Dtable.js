import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux';
import axios from 'axios';
import fetch from 'node-fetch';

import '../Style/Dtable.css'
function Dtable() {
    const [Rows, SetRows] = useState([]);
    const [Row1, SetRow1] = useState([]);
    const [Row2,SetRow2] = useState([]); 
    // let Rows = [];
    const deleteUser = async(user) => {
        console.log("Delete User : ",user);
            await fetch('http://localhost:5000/api/users/deleteuser',{
            method: "delete",
            body: JSON.stringify(user),
             headers: { "Content-Type": "application/json" },
        }).then(res =>{
            window.location.reload();
        })
    }
    const ApproveUser = async(user)=>{
        console.log("Approving User : ");
        const respose = await fetch("http://localhost:5000/api/users/approve", {
        method: "put",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => {
        alert("User is Approved By You !!!")
        window.location.reload();
      })
      .then(() => {
        console.log("Response : ", respose);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    useEffect(async ()=>{
        console.log("UseEffect run!!!");
        const data = axios.get("http://localhost:5000/api/users/userdata", {
        }).then(res =>{  
            console.log("Data is : ", res);
            SetRow1(res.data);
            
      })
      const data2 = axios.get("http://localhost:5000/api/users/pendinguserdata", {
        }).then(res =>{  
            console.log("Data is : ", res);
            SetRow2(res.data);
      })
    },[])
    return (
        <div className="dashboard__table">
            <h1 className = "users">Users</h1>    
        <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell align="center"><b className = "bold"> Status </b></TableCell>
                            <TableCell align="center"><b className = "bold"> UserName </b></TableCell>
                            <TableCell align="center" ><b className = "bold"> Email </b></TableCell>
                            <TableCell align="center"><b className = "bold"> Contact </b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody id="Tbody">
                        {Row1.map((row) => (
                            <TableRow key={row.Fname} id={row.id}>
                                {
                                    row&&row.Status&&
                                    <TableCell align="center"><p className = "red">pending request...</p></TableCell>
                                }
                                {
                                    !row.Status&&
                                    <TableCell align="center"><p className = "green">Approved</p></TableCell>
                                }
                                <TableCell component="th" scope="row" align="center">{row.Fname+' '+row.Lname}</TableCell>
                                <TableCell align="center">{row.Email}</TableCell>
                                <TableCell align="center">{row.Contact}</TableCell>         
                                <TableCell align="center"><i  onClick={(e)=>deleteUser(row)} className=" bi bi-trash-fill dashbord_delete_btn ">Delete</i></TableCell>
                                {
                                    row&&row.Status&&
                                    <TableCell align="center">
                                    <i onClick = {(e)=>ApproveUser(row)} className="dashbord_approve_btn bi bi-check-all">Approve</i></TableCell>
                                }
                                {
                                    !row.Status&&
                                    <TableCell align = "center">
                                    <i className="bi bi-pencil-square dashbord_edit_btn">Edit</i>  
                                    </TableCell>
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Dtable