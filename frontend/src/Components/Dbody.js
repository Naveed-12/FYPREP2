import React,{useEffect,useState} from 'react'
import '../Style/Dbody.css'
import PersonIcon from '@mui/icons-material/Person';
import Dtable from './Dtable'
import fetch from 'node-fetch'
import axios from 'axios';

function Dbody() {
    const [count,setcount]=useState(0);
    const [Pcount, setPcount] = useState(0);
    useEffect(()=>{
        const get = async()=>{
             const data = axios.get("http://localhost:5000/api/users/userdatacount", {
              }).then(res =>{
                // console.log("Count is :  ", res.data.count);
                setcount(res.data.count);  
            }) 
        }
        const getPending = async()=>{
            const data = axios.get("http://localhost:5000/api/users/pendinguserdatacount", {
            }).then(res =>{
              // console.log("Count is :  ", res.data.count);
              setPcount(res.data.Pcount);  
          })
        }
        get();
        getPending();
    },[])
    return (
        <div className="dashboard__body_container">
        <div className="dashboard__body">
            <h1 className="dashboard__title">Dashboard</h1>
            <h1 className="dashboard__user"><PersonIcon fontSize="30px"/>Users ( {count} )</h1>
            <h1 className="dashboard__user"><PersonIcon fontSize="30px"/>Pending Users ( {Pcount} )</h1>
        </div>
         <Dtable/>
         </div>
    )
}

export default Dbody