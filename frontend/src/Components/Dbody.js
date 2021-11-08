import React,{useEffect,useState} from 'react'
import '../Style/Dbody.css'
import PersonIcon from '@mui/icons-material/Person';
import Dtable from './Dtable';
import {db} from '../firebase/firebase';

function Dbody() {
    const [count,setcount]=useState(0);
    useEffect(()=>{
            db.collection('UserList').onSnapshot(querySnapshot=>{
            let doc=querySnapshot.docs;
            setcount(doc.length);
        })                             
    },[])
    return (
        <div className="dashboard__body_container">
        <div className="dashboard__body">
            <h1 className="dashboard__title">Dashboard</h1>
            <h1 className="dashboard__user"><PersonIcon fontSize="30px"/>Users ( {count} )</h1>
        </div>
         <Dtable/>
         </div>
    )
}

export default Dbody