import React, { useState } from "react";
import { Stack } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function Manufacture_registration2() {

    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }
    return (
        <div id="manufaturing_login2">
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
                    <section className="Login-wrap ptb-100 main_content" style={{ paddingTop: "0" }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-xxl-12 col-xl-12 col-lg-12">
                                    <div class=" col-12 login-form-wrap">
                                        <div>
                                            <h3 class="company_information_header">process capabilities</h3>
                                        </div>
                                        <div class="login-form login_form_row">
                                            <div class="col-12 login-body login_body_row">
                                                <form class="form-wrap" action="#">
                                                    <div class="row process_row" style={{ marginBottom: "5%" }}>
                                                        <div class="col-lg-4 process_col">
                                                            <div class="form-group">
                                                                <p class="tprocess">process</p>
                                                                <InputLabel id="demo-simple-select-label" />
                                                                <Select
                                                                    sx={{ width: "100%" }}
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    onChange={handleChange}
                                                                >
                                                                    <MenuItem selected>process</MenuItem>
                                                                    <MenuItem value="1">cnc tuning</MenuItem>
                                                                    <MenuItem value="2">cnc milling</MenuItem>
                                                                    <MenuItem value="3">conventional lathe machine
                                                                    </MenuItem>
                                                                    <MenuItem value="4">fused deposition modeling</MenuItem>
                                                                    <MenuItem value="5">stereolithography</MenuItem>
                                                                    <MenuItem value="6">selective laser sintering</MenuItem>
                                                                    <MenuItem value="7">metal 3D printing</MenuItem>
                                                                    <MenuItem value="8">finising</MenuItem>
                                                                    <MenuItem value="9">co-ordinates measuring machine
                                                                    </MenuItem>
                                                                </Select>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-8">
                                                            <div class="form-group add_more_btn">
                                                                <button onClick={() => handleAdd()} class="btn_add_more"><img src="image_quote/add.png" alt="configure" class="img_plus" />
                                                                    <span>   add more than one process</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="form-group">
                                                                <p class="tsub_process">sub process</p>
                                                                <input class="text_box" id="text" name="subprocess" type="text" placeholder="eg. cnc turning" required />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {val.map((data, i) => {
                                                        return (
                                                            <div style={{ marginBottom: "5%" }}>
                                                                <div class="row process_row">
                                                                    <div class="col-lg-4 process_col">
                                                                        <div class="form-group">
                                                                            <p class="tprocess">process</p>
                                                                            <div class="process_select">

                                                                                <InputLabel id="demo-simple-select-label" />
                                                                                <Select
                                                                                    sx={{ width: "100%" }}
                                                                                    labelId="demo-simple-select-label"
                                                                                    id="demo-simple-select"
                                                                                    onChange={handleChange}
                                                                                >
                                                                                    <MenuItem selected>process</MenuItem>
                                                                                    <MenuItem value="1">cnc tuning</MenuItem>
                                                                                    <MenuItem value="2">cnc milling</MenuItem>
                                                                                    <MenuItem value="3">conventional lathe machine
                                                                                    </MenuItem>
                                                                                    <MenuItem value="4">fused deposition modeling</MenuItem>
                                                                                    <MenuItem value="5">stereolithography</MenuItem>
                                                                                    <MenuItem value="6">selective laser sintering</MenuItem>
                                                                                    <MenuItem value="7">metal 3D printing</MenuItem>
                                                                                    <MenuItem value="8">finising</MenuItem>
                                                                                    <MenuItem value="9">co-ordinates measuring machine
                                                                                    </MenuItem>
                                                                                </Select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-8">
                                                                        <div class="form-group add_more_btn">
                                                                            <button onClick={() => handleAdd()} class="btn_add_more"><img src="image_quote/add.png" alt="configure" class="img_plus" />
                                                                                <span>   add more than one process</span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-12">
                                                                        <div class="form-group">
                                                                            <p class="tsub_process">sub process</p>
                                                                            <input class="text_box" id="text" name="subprocess" type="text" placeholder="" required />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}

                                                    <div class="col-12 example_para_row">
                                                        <div class="form-group box_email">
                                                            <p class="tsub_process">industries</p>
                                                            <select class="form-select text_box tsub_process" aria-label="Default select example">
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
                                                        <div class="form-group box_email">
                                                            <p class="tsub_process">experience (in year)</p>
                                                            <input class="text_box" id="text" name="subprocess" type="text" placeholder="" required />
                                                        </div>
                                                        <div class="form-group box_email">
                                                            <p class="tsub_process">certification</p>
                                                            <input class="text_box" id="text" name="subprocess" type="text" placeholder="" required />
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="form-group">
                                                                <p class="p_please_mention">please mention any other process you can do (it will be preferrable if you can do other process as well)</p>
                                                                <input class="text_box" id="text" name="subprocess" type="text" placeholder="example we can do finishing or inspection through our connections" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 next_btn2">

                                                        <div class="form-group" id='save_new'>
                                                            <button class="style1 btn_save_for" id="save_btn" >
                                                                save for later
                                                            </button>
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

export default Manufacture_registration2