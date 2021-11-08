import React, { Component } from "react";
import "../Style/Home.css";

import pic1 from "../images/homeback.jpg";
import pic2 from "../images/dha-karachi.jpg";
import pic3 from "../images/imag2.jpg";
import pic4 from "../images/imag3.jpg";

import { Link } from "react-router-dom";
import Footer from "./Footer";
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex">
          <div className="container-fuild body">
            <div className="container-fluid secondCon">
              <h1 className="Title2">
                Property Ticket
                <p className="para">Invest in the Future you believe in</p>
              </h1>
              <ul className="ul">
                <Link className="Link" to="/">
                  <li className="li">Home</li>
                </Link>
                <Link className="Link" to="/areaguides">
                  <li className="li">AreaGuide</li>
                </Link>
                <Link className="Link" to="/aboutus">
                  <li className="li">Aboutus</li>
                </Link>
                <Link className="Link" to="/signin">
                  <li className="li">SignIn</li>
                </Link>
              </ul>
              <div className="para2">
                Built And Diversify Your Real Estate Property. Meet Property
                Ticket,a Secure Simple Real Estate Management Platform
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="box">
                      find Your Dream Home
                      <p className="boxpara">
                        We Provide Various Types Of Houses From Cheapest to
                        Premium
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="box">
                      <i className="bi bi-shield-fill white"></i>Our Best Home
                      Guarantee
                      <p className="boxpara">
                        If You buy A House You Will Get Special Guarantee
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="box">
                      <i className="bi bi-lock-fill white"></i>100% Safe
                      <p className="boxpara">
                        Your Transaction Will Always be kept Confidential and
                        safe using the technology of blockchain
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3  ">
                    <div className="box">
                      <i className="bi bi-heart-fill white"></i>Facilities
                      <p className="boxpara">
                        Buy Your House Without Any Kind of Difficulty
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row form">
                  <h4 className="searching">What do you searching for?</h4>
                  <select className="input">
                    <option value="1">Buy</option>
                    <option value="2">Rent</option>
                  </select>
                  <input
                    type="text"
                    className="input"
                    placeholder="Search Area"
                  />
                  <select className="input">
                    <option value="1">Lahore</option>
                    <option value="2">Islamabad</option>
                  </select>
                  <select className="input">
                    <option value="1">size</option>
                    <option value="2">5 marla</option>
                    <option value="3">10 marla</option>
                    <option value="4">15 marla</option>
                    <option value="5">1 Kanal marla</option>
                    <option value="6">1.5 Kanal marla</option>
                  </select>
                  <select className="input">
                    <option value="1">Residential</option>
                    <option value="2">Commercial</option>
                  </select>
                  <input type="number" className="input" placeholder="Price" />
                  <button className="Findbtn">Find</button>
                </div>
              </div>
              <div className="container paras">
                <h4 className="para3">What we are ?</h4>
                <br />
                <p className="para4">
                  Our vision is provide the client the secure platform to
                </p>
                <br />
                <p className="para4">
                  buy or rent property and smooth online transaction using the
                </p>
                <br />
                <p className="para4">
                  rising technology of <span>Block Chain.</span>
                </p>
                <br />
              </div>
              <div className="container paras2">
                <h4 className="para3">What do we offer?</h4>
                <br />
                <p className="para4">
                  We offer variety of commercial, residential, industrial plots
                </p>
                <br />
                <p className="para4">
                  houses and projects to our client within the capacity of
                </p>
                <br />
                <p className="para4">affordability and accessibility.</p>
                <br />
              </div>
              <br />
              <div className="container2 paras2">
                <h2 className="para5  ">Have Any Query?</h2>
                <input type="text" className="input2" placeholder="FirstName" />
                <input type="text" className="input2" placeholder="LastName" />
                <input type="email" className="input2" placeholder="Email" />
                <input
                  type="email"
                  className="input3"
                  placeholder="Your Question..."
                />
              </div>
              <Footer/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
