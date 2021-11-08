import { useHistory } from "react-router"
import { Link } from "react-router-dom";
import '../Style/Nav.css';
function Nav() {
    const history=useHistory();
    return (
        <div className='Home_header'>
            <Link className = "Link" to = "/"><h1 className = "Title">Property Ticket</h1></Link>
                <ul className = "home_header_ul">
                    <Link className = "Link"  to = "/"><li className = "home_header_li">Home</li></Link>
                    <Link className = "Link"  to = "/areaguides"><li className = "home_header_li">AreaGuide</li></Link>
                    <Link className = "Link"  to = "/aboutus"><li className = "home_header_li">AboutUs</li></Link>
                    <Link  className = "Link" to = "/signin"><li className = "home_header_li">SignIn</li></Link>
                </ul>           
        </div>
    )
}
// <h1>Property ticket</h1>
// <ul className='home_header_ul'>
//     <Link to = "/"><li>Home</li></Link>
//     <Link to="/Map" target='_blank' style={{textDecoration:'none',color:'black'}}><li>Map</li></Link>
//     <li onClick={()=>history.push('/areaguides')}>Area Guides</li>
// </ul>

export default Nav