import React from 'react'

export default function CustomerDashboard() {
    return (
        <div id="msaas1">
            <div className="page-wrapper">
                <div className="content-wrapper">
                    <section className="create-collection-wrap ptb-100">
                        <div className="container">
                            <div className="row1 col-xl-8 col-lg-8 col-md-8">
                                <div className="col-xxl-12 col-xl-12 col-lg-12">
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 one_col">
                                        <div className="file-drop-area drop_area">
                                            <form className="choose-files upload_form">
                                                <div className="button-wrapper subupload_form">
                                                    <p className="upload_another">Upload another 3D model <br />
                                                        <img src="../../image_quote/Cloud upload 1.jpg" alt="upload img"
                                                            className="upload_img" /> <br />
                                                        <span className="drop_file">Drop file here</span><br />
                                                        <span className="drop_file">Supported formates STEP,STL</span>
                                                    </p>
                                                    <input type="file" id="fileElem" multiple accept="image/*"
                                                        onchange="handleFiles(this.files)" hidden />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="viewer col-xxl-12 col-xl-12 col-lg-12 quato_row">
                                    <p className="we_got">we got, what you left off,</p>
                                    <p className="tview">view all quote</p>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="blog-card style1">
                                        <div className="blog-info">
                                            <div className="header">
                                                <h3 className="tknuckle">knuckle.step</h3>
                                            </div>
                                            <div className="below_knuckle">
                                                <img src="../../image_quote/Menu 1.png" alt="menu" className="img_menu" /><span
                                                    className="tyymm">yymmdd123</span>
                                            </div>
                                            <div className="below_knuckle">
                                                <img src="../../image_quote/Attach money 1.png" alt="menu" className="img_menu" /><span
                                                    className="tyymm">150 /-</span>
                                            </div>
                                            <div className="below_knuckle">
                                                <img src="../../image_quote/Check circle 1.png" alt="menu" className="img_menu" /><span
                                                    className="tyymm">auto-quote</span>
                                            </div>
                                            <div className="below_knuckle">
                                                <img src="../../image_quote/Event 1.png" alt="menu" className="img_menu" /><span
                                                    className="tyymm">last update - 29.10.2022</span>
                                            </div>
                                        </div>
                                        <div className="btn_order_col">
                                            <div className="get-btn">
                                                <a href="add-wallet.html" className="get_btn">order once again</a>
                                            </div>
                                            <div className="get-btn">
                                                <a href="add-wallet.html" className="copy_btn">copy quote to configure</a>
                                            </div>
                                        </div>
                                        <div className="part">
                                            <p className="part_no">02 part</p>
                                        </div>
                                        <div className="img_3d">
                                            <img src="../../image_quote/Image 9.png" alt="design" />
                                            <img src="../../image_quote/Image 9.png" alt="design" />
                                        </div>
                                        <div className="delete_part">
                                            <img src="../../image_quote/bin.png" alt="" /><span className="tdelete">delete part</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="blog-card style1">
                                        <div className="blog-info">
                                            <div className="header">
                                                <h3 className="tknuckle">knuckle.step</h3>
                                            </div>
                                            <div className="below_knuckle">
                                                <img src="../../image_quote/Menu 1.png" alt="menu" className="img_menu" /><span
                                                    className="tyymm">yymmdd123</span>
                                            </div>
                                            <div className="below_knuckle">
                                                <img src="../../image_quote/Attach money 1.png" alt="menu" className="img_menu" /><span
                                                    className="tyymm">150 /-</span>
                                            </div>
                                            <div className="below_knuckle">
                                                <img src="../../image_quote/Check circle 1.png" alt="menu" className="img_menu" /><span
                                                    className="tyymm">auto-quote</span>
                                            </div>
                                            <div className="below_knuckle">
                                                <img src="../../image_quote/Event 1.png" alt="menu" className="img_menu" /><span
                                                    className="tyymm">last update - 29.10.2022</span>
                                            </div>
                                        </div>
                                        <div className="btn_order_col">
                                            <div className="get-btn">
                                                <a href="add-wallet.html" className="get_btn">order once again</a>
                                            </div>
                                            <div className="get-btn">
                                                <a href="add-wallet.html" className="copy_btn">copy quote to configure</a>
                                            </div>
                                        </div>
                                        <div className="part">
                                            <p className="part_no">01 part</p>
                                        </div>
                                        <div className="img_3d">
                                            <img src="../../image_quote/Image 9.png" alt="design" />

                                        </div>
                                        <div className="delete_part get-btn">
                                            <a href="add-wallet.html">
                                                <img src="../../image_quote/bin.png" alt="" /><span className="tdelete">delete part</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="viewer col-xxl-12 col-xl-12 col-lg-12 quato_row">
                                    <p className="we_got">recent orders,</p>
                                    <p className="tview">view all quote</p>
                                </div>
                                <div className="col-xxl-12 col-xl-12 col-lg-12 quato_row1">
                                    <img src="../../image_quote/Group 127.png" alt="" />


                                </div>
                            </div>
                            <div className="row2 col-xl-4 col-lg-4 col-md-4">
                                <div className="time_box">
                                    <p className="tyou"><b>you saved total</b></p>
                                    <p className="t320"><b>320 min</b></p>
                                    <p className="tyou"><b>before actual</b></p>
                                    <p className="tyou"><b>production starts</b></p>
                                </div>
                                <div className="box_conversion">
                                    <div className="sub_row1">
                                        <p className="tquote_to">quote to order conversion</p>
                                        <img src="../../image_quote/More horiz 1.png" alt="horizontal btn" className="hori_img" />
                                    </div>

                                    <div className="graph1">
                                        <ul className="chart-skills">
                                            <li>
                                                <span></span>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="subrow2">
                                        <p className="tquoted">quoted <br /><span className="percentage">72%</span></p>
                                        <p className="tquoted">ordered <br /><span className="percentage">28%</span></p>
                                    </div>
                                </div>
                                <div className="box_conversion">
                                    <div className="sub_row1">
                                        <p className="tquote_to">order completion status</p>
                                        <img src="../../image_quote/More horiz 1.png" alt="horizontal btn" className="hori_img" />
                                    </div>

                                    <div className="graph1">
                                        <ul className="chart-skills">
                                            <li>
                                                <span></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="subrow2">
                                        <p className="tquoted">quoted <br /><span className="percentage">72%</span></p>
                                        <p className="tquoted">ordered <br /><span className="percentage">28%</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <footer className="footer-wrap bg-f pt-100 ">
                    <img src="assets/img/section-shape-1.png" alt="Image" className="section-shape" />
                    <div className="container">
                        <div className="row pb-75">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 pe-xl-5">
                                <div className="footer-widget">
                                    <a href="index.html" className="footer-logo">
                                        <img src="assets/img/logo-white.png" alt="Image" />
                                    </a>
                                    <p className="comp-desc">
                                        Lorem ipsum dolor sit amet consec tetur aditonsi soom isotope elit esumo tempo incidunt
                                        labore dolore magna aliqu core tetur adip iscing.
                                    </p>
                                    <ul className="social-profile list-style style1">
                                        <li>
                                            <a target="_blank" href="https://facebook.com">
                                                <i className="flaticon-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://twitter.com">
                                                <i className="flaticon-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://instagram.com">
                                                <i className="flaticon-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://linkedin.com">
                                                <i className="flaticon-linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h3 className="footer-widget-title">Marketplace</h3>
                                    <ul className="footer-menu list-style">
                                        <li>
                                            <a href="explore-auction.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                Art
                                            </a>
                                        </li>
                                        <li>
                                            <a href="explore-auction.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                All NFTs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="explore-auction.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                Music
                                            </a>
                                        </li>
                                        <li>
                                            <a href="explore-auction.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                Trending Card
                                            </a>
                                        </li>
                                        <li>
                                            <a href="explore-auction.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                Virtual World
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-xl-4 ps-lg-5">
                                <div className="footer-widget">
                                    <h3 className="footer-widget-title">Resources</h3>
                                    <ul className="footer-menu list-style">
                                        <li>
                                            <a href="contact.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                Help &amp; Support
                                            </a>
                                        </li>
                                        <li>
                                            <a href="live-auction.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                Live Auction
                                            </a>
                                        </li>
                                        <li>
                                            <a href="item-details.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                Item Details
                                            </a>
                                        </li>
                                        <li>
                                            <a href="activity.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                Activity
                                            </a>
                                        </li>
                                        <li>
                                            <a href="collection.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                Collection Card
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget">
                                    <h3 className="footer-widget-title">Company</h3>
                                    <ul className="footer-menu list-style">
                                        <li>
                                            <a href="about.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-left-sidebar.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                Latest News
                                            </a>
                                        </li>
                                        <li>
                                            <a href="privacy-policy.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="terms-of-service.html" target="_blank">
                                                <i className="flaticon-next-1" />
                                                Terms &amp; Conditions
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p className="copyright-text">
                            <i className="ri-copyright-line" />
                            <script>document.write(new Date().getFullYear())</script> <span>Nedo</span>. All Rights Reserved By
                            <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a>
                        </p>
                    </div>
                </footer>
            </div>
            <div className="modal fade" id="placeBid" tabindex="-1" aria-labelledby="placeBid" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="modal-close" data-bs-dismiss="modal" aria-label="Close"><i
                            className="ri-close-line"></i></button>
                        <div className="modal-body">
                            <div className="bidding-popup">
                                <h2>Place A Bid</h2>
                                <h6>You must bid at least <span>5.88 ETH</span></h6>
                                <form action="#" className="bidding-form">
                                    <div className="form-group">
                                        <input type="number" placeholder="00.00 ETH" />
                                    </div>
                                    <div className="form-group">
                                        <p>Enter Quantity: <span>5 Available</span></p>
                                        <input type="number" placeholder="00.00 ETH" />
                                    </div>
                                </form>
                                <ul className="bidding-tablelist list-style">
                                    <li>
                                        <p>You must bid at least</p>
                                        <span>5.88 ETH</span>
                                    </li>
                                    <li>
                                        <p>Service Fee</p>
                                        <span>0.88 ETH</span>
                                    </li>
                                    <li>
                                        <p>Total Bid Amount</p>
                                        <span>5 ETH</span>
                                    </li>
                                </ul>
                                <button className="btn style1" type="submit"> Place A Bid</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
