import React from 'react'
import { useNavigate } from 'react-router-dom'


function Signin() {
    const navigate= useNavigate();
    const navigatetosignup=() => {
        navigate("/")
    }
    return (
        <div id="customer_sign_in">


            <div class="page-wrapper">

                {/* <header class="header-wrap style2">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href="index.html">
                                <img class="logo-light" src="image_quote/36f93e66-1769-40d1-9fbe-022433dc7c0a.png" alt="logo"/>
                            </a>
                            <div class="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
                                <div class="menu-close d-lg-none">
                                    <a href="javascript:void(0)"> <i class="ri-close-line"></i></a>
                                </div>
                                <ul class="navbar-nav ms-auto">

                                    <li class="nav-item">
                                        <a href="about.html" class="nav-link">
                                            our solution
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            industries
                                        </a>

                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            resources

                                        </a>

                                    </li>

                                    <li class="nav-item">
                                        <a href="contact.html" class="nav-link">contact us</a>
                                    </li>

                                </ul>


                            </div>
                        </nav>
                        <div class="mobile-bar-wrap">
                            <button class="searchbtn d-lg-none"><i class="ri-search-line"></i></button>
                            <div class="mobile-menu d-lg-none">
                                <a href="javascript:void(0)"><i class="ri-menu-line"></i></a>
                            </div>
                        </div>
                    </div>
                </header> */}
                <div class="search-area">
                    <div class="container">
                        <form action="#">
                            <div class="form-group">
                                <input type="search" placeholder="Search Here" autofocus/>
                            </div>
                        </form>
                        <button type="button" class="close-searchbox">
                            <i class="ri-close-line"></i>
                        </button>
                    </div>
                </div>

                <div class="content-wrapper">
                    <section class="Login-wrap ptb-100 main_content">
                        <div class="container">
                            <div class="row">
                                <div class="col-xxl-12 col-xl-12 col-lg-12 one_col">
                                    <div class=" col-12 login-form-wrap">

                                        <div class="login-form login_form_row">
                                            <div class="col-12 login-body login_body_row">
                                                <form class="form-wrap" action="#">
                                                    <div class="row process_row">
                                                        <div class="col-8 process_col">
                                                            <div class="form-group">
                                                                <div>
                                                                    <h2 class="tsign_in">sign in</h2>
                                                                </div>
                                                                <div class="col-11">
                                                                    <div class="form-group box_email">
                                                                        <p class="temail">email</p>
                                                                        <input class="text_box2" id="text-e" name="subprocess" type="text" placeholder="Enter your email" required/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-11">
                                                                    <div class="form-group box_email">
                                                                        <p class="temail">password</p>
                                                                        <input class="text_box2" id="text-p" name="subprocess" type="password" placeholder="Enter your password" required/>
                                                                    </div>
                                                                </div>
                                                                <div class="form-check3 col-11">
                                                                    <div class="check_box col-6">
                                                                        <div>
                                                                            <input type="checkbox" value="remeber"/>
                                                                        </div>
                                                                        <div class="tremeber">

                                                                            <p>remeber me</p>
                                                                        </div>

                                                                    </div>

                                                                    <div class="btn_forgot">
                                                                        <button class="forgot">forgot password?</button>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-11 sign_in_btn">
                                                                    <button class="style1 btn_sign_in col-3">
                                                                        sign in
                                                                    </button>
                                                                </div>
                                                                <div class="col-11 dont_have_acc">
                                                                    <p class="tdont_have">don't have an account?</p>
                                                                    <button class="btn_sign_up" onClick={navigatetosignup}>sign up</button>
                                                                </div>
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

export default Signin