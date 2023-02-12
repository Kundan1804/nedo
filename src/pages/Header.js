import React from 'react'

function Header() {
    return (
        <div id="customer_sign_in" style={{backgrounColor:"#ffffff"}}>
            <div class="page-wrapper">
                <header class="header-wrap style2" style={{backgrounColor:"#ffffff"}}>
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <a class="navbar-brand" href="index.html">
                                <img class="logo-light" src="image_quote/36f93e66-1769-40d1-9fbe-022433dc7c0a.png" alt="logo" />
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
                </header>
            </div>
        </div>
    )
}

export default Header