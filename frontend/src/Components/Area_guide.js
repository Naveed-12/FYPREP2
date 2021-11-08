import imag1 from '../images/DHA.png'
import imag2 from '../images/bahria.jpg'
import imag3 from '../images/al-jalil-garden.jpg'
import slide1 from '../images/imag3.jpg'
import DHAkarachi from '../images/dha-karachi.jpg'
import bahriaKarachi from '../images/bahrai-karachi.jpg'
import DHAcity from '../images/dha-city.png'
import eighteen from '../images/eighteen.jpg'
import smartcity from '../images/smartcity.jpg'
import DHAislamabad from '../images/dha-islamabad.jpg'
import Nav from './Nav'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import React from 'react'
import Footer from './Footer'
import Areas from './Areas';
function Area_guide() {

  const fadeImages = [
    {
      url: slide1,
    },
    {
      url: imag2,
    },
    {
      url: smartcity,
    },
    {
      url: imag3,
    },
  ];
  return (

    <React.Fragment>
        <Nav/> 
    <div className="slide-container">
        <Fade transitionDuration={2000} duration={1000} indicators={true} arrows={false}>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={fadeImage.url} className='areaguide_img' alt=''/>
              </div>
            </div>
          ))}
        </Fade>
      </div>
      <h1 className='explore_heading'>Explore Pakistan</h1>
            <Areas img1={imag1}  title1='dha defence lahore' img2={imag2} title2='bahria town lahore' img3={imag3}  title3='al jalil garden' location='lahore'/>
            <Areas img1={DHAkarachi}  title1='dha defence karachi' img2={bahriaKarachi} title2='bahria town karachi' img3={DHAcity}  title3='dha defence lahore' location='karachi'/>
            <Areas img1={eighteen}  title1='f-8 islamabad' img2={smartcity} title2='smart city rewalpindi' img3={DHAislamabad}  title3='dha defence islamabad' location='islamabad'/>
    <Footer/>
            </React.Fragment>
  )
}

export default Area_guide
