import React from 'react'

function Manufacture_registration4() {
  return (

    <div id="manufaturing_login6">
      <div class="page-wrapper">
        <div class="search-area">
          <div class="container">
            <form action="#">
              <div class="form-group">
                <input type="search" placeholder="Search Here" autofocus />
              </div>
            </form>
            <button type="button" class="close-searchbox">
              <i class="ri-close-line"></i>
            </button>
          </div>
        </div>



        <div class="content-wrapper">

        <section className="Login-wrap ptb-100 main_content" style={{paddingTop:"0"}}>
            <div class="container">
              <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 one_col">
                  <div class=" col-12 login-form-wrap">
                    <div>
                      <h2 class="company_information_header">uploads</h2>
                    </div>
                    <div class="login-form login_form_row">
                      <div class="col-12 login-body login_body_row">
                        <form class="form-wrap" action="#">
                          <div class="row process_row">
                            <div class="col-lg-12 process_col">
                              <div class="form-group">
                                <div>
                                  <h3 class="company_information_header1">upload photos of your company premises and machineries </h3><h3 class="company_information_header1">you have mentioned in the earlier steps</h3>
                                </div>
                                <div class="upload col-12" id="upload1">

                                  <div class="drag-area" id="drag">
                                    <img src="image_quote/upload.png" alt="upload option" class="upload_img" />
                                    <span><b>drop file here</b></span>
                                    <span class="tsupported"><small>supported formats: PNG,JPG</small></span>
                                    <span class="tor">or <br /></span><p class="btn_browse">browse file</p>



                                  </div>
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

export default Manufacture_registration4