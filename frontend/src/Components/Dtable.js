import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useSelector} from 'react-redux';
import { db } from '../firebase/firebase';
import '../Style/Dtable.css'
function Dtable() {
    const UserList=useSelector(state=>state.UserList);
    console.log(UserList)
    const [Rows, SetRows] = useState([]);
    const deleteUser = (event) => {
        event.preventDefault();
        const Id=event.target.parentNode.getAttribute('id');
        db.collection('UserList').doc(Id).delete();
    }
    useEffect(()=>{
        console.log("UseEffect run!!!");
        db.collection('UserList').onSnapshot((snapshoot)=>{
            SetRows(snapshoot.docs.map((doc)=>{
                return {
                    ...doc.data(),
                    id:doc.id
                }

            }))
        })
    },[])
    return (
        <div className="dashboard__table">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell align="center">UserName</TableCell>
                            <TableCell align="center" >Email</TableCell>
                            <TableCell align="center">Contact</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody id="Tbody">
                        {Rows.map((row) => (
                            <TableRow key={row.Fname} id={row.id}>
                                <TableCell component="th" scope="row" align="center">{row.Fname+' '+row.Lname}</TableCell>
                                <TableCell align="center">{row.Email}</TableCell>
                                <TableCell align="center">{row.Contact}</TableCell>                                                                                                                                           
                                <button onClick={deleteUser} className="dashbord_delete_btn">Delete</button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Dtable