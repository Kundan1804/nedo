import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Stack } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Signup() {



    const navigate = useNavigate();
    const navigatetosignin = () => {
        navigate("/signin")
    }

    return (
        <div id="customer_sign_in2" >
            <div className="page-wrapper" >
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
                    <section className="Login-wrap ptb-100 main_content" style={{ backgrounColor: "#bebebe" }}>
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
                                                                    {/* <form className="form-wrap" action="#"> */}
                                                                    <div className="row process_row">
                                                                        <div className="col-5">
                                                                            <div className="form-group">
                                                                                <p>full name</p>
                                                                                <input
                                                                                    className="text_box2"
                                                                                    id="text" name="subprocess"
                                                                                    type="text"
                                                                                    placeholder=""
                                                                                    required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-5">
                                                                            <div className="form-group">
                                                                                <p>company name</p>
                                                                                <input className="text_box2" id="text" name="subprocess" type="text" placeholder="" required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-5">
                                                                            <div className="form-group">
                                                                                <p>contact number</p>
                                                                                <input className="text_box2" id="text" name="subprocess" type="text" placeholder="" required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-5">
                                                                            <div className="form-group">
                                                                                <p>industry</p>
                                                                                <InputLabel id="demo-simple-select-label" sx={{
                                                                                    width: "100%",
                                                                                    backgroundColor: "#f1f2fd",
                                                                                    fontSize: "10px",
                                                                                    marginTop: "0",
                                                                                    marginLeft: "3%"
                                                                                }} />
                                                                                <Select
                                                                                    sx={{
                                                                                        width: "100%",
                                                                                        backgroundColor: "#f1f2fd",
                                                                                        fontSize: "10px",
                                                                                        marginTop: "0",
                                                                                        marginLeft: "2%"
                                                                                    }}
                                                                                    labelId="demo-simple-select-label"
                                                                                    id="demo-simple-select"
                                                                                >
                                                                                    <MenuItem value="0" selected></MenuItem>
                                                                                    <MenuItem value="1">Aerospace and Defense</MenuItem>
                                                                                    <MenuItem value="2">Automotive</MenuItem>
                                                                                    <MenuItem value="3">consumer Products</MenuItem>
                                                                                    <MenuItem value="4">Design Services</MenuItem>
                                                                                    <MenuItem value="5">Education</MenuItem>
                                                                                    <MenuItem value="6">Electronics and Semiconductors</MenuItem>
                                                                                    <MenuItem value="7">Energy</MenuItem>
                                                                                    <MenuItem value="8">Hardware Startups</MenuItem>
                                                                                    <MenuItem value="9">Heavy industry</MenuItem>
                                                                                    <MenuItem value="10">Industrial Equipment</MenuItem>
                                                                                    <MenuItem value="11">Instrumentation</MenuItem>
                                                                                    <MenuItem value="12">Lighting</MenuItem>
                                                                                    <MenuItem value="13">Medical and Dental</MenuItem>
                                                                                    <MenuItem value="14">Robotics</MenuItem>
                                                                                    <MenuItem value="15">Special Purpose Machinaries</MenuItem>
                                                                                    <MenuItem value="16">Supply Chain and Purchasing</MenuItem>
                                                                                </Select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-5">
                                                                            <div className="form-group">
                                                                                <p>City</p>
                                                                                <input className="text_box2" id="text" name="subprocess" type="text" placeholder="" required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-5">
                                                                            <div className="form-group">
                                                                                <p>Pin Code</p>
                                                                                <input className="text_box2" id="text" name="subprocess" type="text" placeholder="" required />

                                                                            </div>
                                                                        </div>
                                                                        <div className="col-5">
                                                                            <div className="form-group">
                                                                                <p>State</p>
                                                                                <input className="text_box2" id="text" name="subprocess" type="text" placeholder="" required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-5">
                                                                            <div className="form-group">
                                                                                <p>Country</p>
                                                                                <input className="text_box2" id="text" name="subprocess" type="text" placeholder="" required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="form-group">
                                                                                <p>work email</p>
                                                                                <input className="text_box2" id="text" name="subprocess" type="text" placeholder="example.abc@workemail.com" required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-5">
                                                                            <div className="form-group">
                                                                                <p>password</p>
                                                                                <input className="text_box2" id="text" name="subprocess" type="password" placeholder="Enter at least 8+ characters" required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-5">
                                                                            <div className="form-group">
                                                                                <p>confirm password</p>
                                                                                <input className="text_box2" id="text" name="subprocess" type="text" placeholder="Enter at least 8+ characters" required />
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
                                                                    {/* </form> */}
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
                                        <img src="../image_quote/customer sign up img.png" alt="machine" />
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