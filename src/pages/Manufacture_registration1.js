import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function Manufacturer_Registration1() {
    return (
        <div id="manufaturing_login">
            <div className="page-wrapper">
                <div className="search-area">
                    <div className="container">
                        <form action="#">
                            <div className="form-group">
                                <input type="search" placeholder="Search Here" autofocus />
                            </div>
                        </form>
                        <button type="button" className="close-searchbox">
                            <i className="ri-close-line"></i>
                        </button>
                    </div>
                </div>
                <div className="content-wrapper">
                    <section className="Login-wrap ptb-100 main_content" style={{paddingTop:"0"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-12 col-xl-12 col-lg-12">
                                    <div className="login-form-wrap">
                                        <div>
                                            <h3 className="company_information_header">company information</h3>
                                        </div>
                                        <div className="login-form">
                                            <div className="login-body">
                                                <form className="form-wrap" action="#">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <p>first name</p>
                                                                <input className="text_box" id="text" name="fname" type="text" placeholder="First name" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <p>last name</p>
                                                                <input className="text_box" id="text" name="lname" type="text" placeholder="last name" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <p>company name</p>
                                                                <input className="text_box" id="text" name="cname" type="text" placeholder="company name" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <p>GST number</p>
                                                                <input className="text_box" id="text" name="gstnumber" type="text" placeholder="GST number" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <p>compant address</p>
                                                                <input className="text_box" id="text" name="caddress" type="text" placeholder="company address" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <p>pin code</p>
                                                                <input className="text_box" id="text" name="pincode" type="text" placeholder="pin code" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <p>contact number(mention whatsapp ccount number)</p>
                                                                <input className="text_box" id="text" name="contact" type="text" placeholder="whatsapp number" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <p>email (you will recieve order notification on this mail id)</p>
                                                                <input className="text_box" id="text-e1" name="email" type="text" placeholder="enter your email" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <p>password</p>
                                                                <input className="text_box" id="text" name="cpassword" type="password" placeholder="enter at least 8+ character" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <p>confirm password</p>
                                                                <input className="text_box" id="text" name="cpassword" type="password" placeholder="enter at least 8+ character" required />
                                                            </div>
                                                        </div>

                                            

                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Manufacturer_Registration1