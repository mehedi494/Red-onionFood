import React from 'react';
import images from '../../images/logo.png'
import './Footer.css';
const Footer = () => {
    return (
        <div className='footerContainer ' >
            <div className='footerFirstComponets container'>
                <div>
                    <img src={images}alt="" />
                </div>
                <div className='text-white' >
                    <h6>About online food</h6>
                    <h6>Road out Blog</h6>
                    <h6>Sign up to deliver</h6>
                    <h6>Add your resturant</h6>
                </div>
                <div className='text-white' >
                    <h6>Get Help</h6>
                    <h6>Read FAQs</h6>
                    <h6>View all cities</h6>
                    <h6>Resturant near me</h6>
                </div>
            </div>
            <div className='text-white footerSecondComponets container' >
                <div className="row">
                    <div className='col-12 col-sm-6'><small>copy rigt@ 2022 redonion</small></div>
                    <div className='col-12  col-sm-2'><h6>Privacy Policy.</h6></div>
                    <div className='col-12 col-sm-2'><h6>Terms of Use</h6></div>
                    <div className='col-12 col-sm-2'><h6>Pricing</h6></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;