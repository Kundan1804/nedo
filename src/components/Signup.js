import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const navigate= useNavigate();
    const navigatetosignin=() => {
        navigate("/signin")
    }
    return (
        <div id="customer_sign_in2" >

            <div className="page-wrapper" >
                <div className="search-area">
                    <div className="container">
                        <form action="#">
                            <div className="form-group">
                                <input type="search" placeholder="Search Here" autofocus/>
                            </div>
                        </form>
                        <button type="button" className="close-searchbox">
                            <i className="ri-close-line"></i>
                        </button>
                    </div>
                </div>

                <div className="content-wrapper">
                    <section className="Login-wrap ptb-100 main_content" style={{backgrounColor:"#bebebe"}}>
                        <div className="container">
                            <div className="row1">
                                <div className="col-xxl-8 col-xl-8 col-lg-8 col-sm-11 col-md-11 one_col">
                                    <div className=" col-12 login-form-wrap">

                                        <div className="login-form login_form_row">
                                            <div className="col-12 login-body login_body_row">
                                                <form className="form-wrap" action="#">
                                                    <div className="row process_row">
                                                        <div className=" col-11 login-form-wrap">
                                                            <div>
                                                                <h2 className="company_information_header">create an account</h2>
                                                            </div>
                                                            <div className="login-form login_form_row">
                                                                <div className="col-12 login-body login_body_row">
                                                                    <form className="form-wrap" action="#">
                                                                        <div className="row process_row">
                                                                            <div className="col-5">
                                                                                <div className="form-group">
                                                                                    <p>full name</p>
                                                                                    <input className="text_box2" id="text" name="subprocess" type="text" placeholder="" required/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-5">
                                                                                <div className="form-group">
                                                                                    <p>company name</p>
                                                                                    <input className="text_box2" id="text" name="subprocess" type="text" placeholder="" required/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-5">
                                                                                <div className="form-group">
                                                                                    <p>contact number</p>
                                                                                    <input className="text_box2" id="text" name="subprocess" type="text" placeholder="" required/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-5">
                                                                                <div className="form-group">
                                                                                    <p>industry</p>
                                                                                    <div className="process_select">
                                                                                        <select className="form-select text_box tsub_process" aria-label="Default select example">
                                                                                            <option value="0" selected></option>
                                                                                            <option value="1">Aerospace and Defense</option>
                                                                                            <option value="2">Automotive</option>
                                                                                            <option value="3">consumer Products</option>
                                                                                            <option value="4">Design Services</option>
                                                                                            <option value="5">Education</option>
                                                                                            <option value="6">Electronics and Semiconductors</option>
                                                                                            <option value="7">Energy</option>
                                                                                            <option value="8">Hardware Startups</option>
                                                                                            <option value="9">Heavy industry</option>
                                                                                            <option value="10">Industrial Equipment</option>
                                                                                            <option value="11">Instrumentation</option>
                                                                                            <option value="12">Lighting</option>
                                                                                            <option value="13">Medical and Dental</option>
                                                                                            <option value="14">Robotics</option>
                                                                                            <option value="15">Special Purpose Machinaries</option>
                                                                                            <option value="16">Supply Chain and Purchasing</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12">
                                                                                <div className="form-group">
                                                                                    <p>work email</p>
                                                                                    <input className="text_box2" id="text" name="subprocess" type="text" placeholder="example.abc@workemail.com" required/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-5">
                                                                                <div className="form-group">
                                                                                    <p>password</p>
                                                                                    <input className="text_box2" id="text" name="subprocess" type="password" placeholder="Enter at least 8+ characters" required/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-5">
                                                                                <div className="form-group">
                                                                                    <p>confirm password</p>
                                                                                    <input className="text_box2" id="text" name="subprocess" type="text" placeholder="Enter at least 8+ characters" required/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group col-12">
                                                                                <button className="col-12 btn_sign_up1">
                                                                                    sign up
                                                                                </button>
                                                                            </div>
                                                                            <div className="col-12 dont_have_acc">
                                                                                <p className="tdont_have">already have an account?</p>
                                                                                <button className="btn_sign_up" onClick={navigatetosignin}>sign in</button>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-5 col-xl-5 col-lg-5 col-sm-11 col-md-11 second_col">

                                    <div className="img_machine">
                                        <img src="../image_quote/customer sign up img.png" alt="machine"/>
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

export default Signup