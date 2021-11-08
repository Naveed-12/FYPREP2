import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import '../Style/SignIn.css'
import { auth } from '../firebase/firebase'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert__Error from './Alert';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function SignIn() {
const [value, setValue] = React.useState(0);
    const history = useHistory();
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');
    const [modal,setmodal]=useState(false);
    const AdminEmail = 'ibtisamakram111@gmail.com';
    const AdminPass = '12345678910';
    
    const AdminSignIn = (event) => {
        event.preventDefault();
        document.getElementById('Admin-form').reset();
        if (Email === AdminEmail && Password === AdminPass) {
            history.push('/Dashboard');
            return true
        }
        document.getElementById('alert').style.display='block'
        setTimeout(()=>document.getElementById('alert').style.display='none',2000);
        return false
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const userSignIn = (event) => {
        event.preventDefault();
       
    }

    const createUser = (event) => {
        event.preventDefault();
        history.push('/SignInform')
    }
    return (
        <div className="Login">
            <h2 className="SignIn__logo">Property Ticket</h2>
            <div className="Login-container">
                <h1>Sign-in</h1>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="User" {...a11yProps(0)} />
                            <Tab label="Admin" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <form onSubmit={userSignIn} id="user-form">
                            <h5>E-mail</h5>
                            <input type="text" name="email" required placeholder="xyz5@gmail.com" pattern=".+@gmail.com" onChange={e => SetEmail(e.target.value)}></input>
                            <h5>Password</h5>
                            <input type="password" name="pass" required onChange={e => SetPassword(e.target.value)}></input>
                            <div id="alert" style={{display:'none'}}>
                                <Alert__Error title="Enter Valid Email and Password!"/>
                            </div>
                            <button className="Login-button" type="submit">Sign in</button>
                        </form>
                        <p>Hispanic Heritage Month recognizes the contributions and influence of Hispanic Americans to the history</p>
                        <div className="btn-create"><button onClick={createUser} id="create">Create your Account</button></div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <form onSubmit={AdminSignIn} id="Admin-form">
                            <h5>E-mail</h5>
                            <input type="text" name="email" required placeholder="xyz5@gmail.com" pattern=".+@gmail.com" onChange={e => SetEmail(e.target.value)}></input>
                            <h5>Password</h5>
                            <input type="password" name="pass" required onChange={e => SetPassword(e.target.value)}></input>
                            <div id="alert" style={{display:'none'}}>
                                <Alert__Error title="Enter Valid Email and Password!"/>
                            </div>
                            <button className="Login-button" type="submit" id="create1">Sign in</button>
                        </form>
                        <p>Hispanic Heritage Month recognizes the contributions and influence of Hispanic Americans to the history</p>
                    </TabPanel>
                </Box>
            </div>
        </div>

    )
}

export default SignIn

