import React from 'react'
import '../Style/Header.css'
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import Tooltip from '@mui/material/Tooltip';
import {useHistory} from 'react-router';
function Header() {
    const history=useHistory();
    const logout=()=>{
         history.push('/');
    }
    return (
       <div className="dashboard__header">
           <h2 className="dashboard__logo">Property Ticket</h2>
           <div className="dashboard__right">
               <h2 className="dashboard__admin">Admin Name</h2>
               <div className="dashboard__admin__logo">
                   <Tooltip title="Logout"><AdminPanelSettingsRoundedIcon fontSize="large" onClick={logout}/></Tooltip>
               </div>

           </div>
       </div>
    )
}

export default Header
