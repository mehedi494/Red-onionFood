import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../images/logo.png'
import './Footer.css';
const Footer = () => {
    return (
        <div className='footerContainer ' >
            <div className='footerFirstComponets container'>
                <div>
                    <img src={images}alt="" />
                </div>
                <div className='text-white ' >
                    <Link className='text-decoration-none' to="#"> <h6>About online food</h6></Link>
                    <Link className='text-decoration-none' to="#"> <h6>Road out Blog</h6></Link>
                    <Link className='text-decoration-none' to="#"><h6>Sign up to deliver</h6></Link>
                    <Link className='text-decoration-none' to="#">  <h6>Add your resturant</h6></Link>
                </div>
                <div className='text-white ' >
                   <h6>Get Help</h6>
                    <Link className='text-decoration-none' to="#">      <h6>Read FAQs</h6> </Link>
                    <Link className='text-decoration-none' to="#">  <h6>View all cities</h6></Link>
                    <Link className='text-decoration-none' to="#"> <h6>Resturant near me</h6></Link>
                </div>
            </div>


            <div className='text-white footerSecondComponets container mt-5' >
                <div className="row mt-3">
                    <div className='col-12 col-sm-6'><small className='text-muted'>Copy right @ 2022 red_onion</small></div>

                    <div className='col-12  col-sm-2'>  <Link className='text-decoration-none' to="#"><h6>Privacy Policy.</h6></Link></div>

                    <div className='col-12 col-sm-2'><Link className='text-decoration-none' to="#">   <h6>Terms of Use</h6></Link></div>

                    <div className='col-12 col-sm-2'><Link className='text-decoration-none' to="#">    <h6>Pricing</h6></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;