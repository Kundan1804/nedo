import React from 'react'

function Step3() {
    return (
        <div id="manufaturing_login5">
                <form class="form-wrap" action="#">
                    <div class="row process_row">
                        <div class="col-5 process_col">
                            <div class="form-group">
                                <p>process</p>
                                <div class="process_select">
                                    <select class="form-select"
                                        aria-label="Default select example">
                                        <option selected>process</option>
                                        <option value="1">cnc tuning</option>
                                        <option value="2">cnc milling</option>
                                        <option value="3">conventional lathe machine
                                        </option>
                                        <option value="4">fused deposition modeling</option>
                                        <option value="5">stereolithography</option>
                                        <option value="6">selective laser sintering</option>
                                        <option value="7">metal 3D printing</option>
                                        <option value="8">finising</option>
                                        <option value="9">co-ordinates measuring machine
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="form-group">
                                <p>model/make</p>
                                <input class="text_box2" id="text" name="subprocess"
                                    type="text" placeholder="" required />
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="form-group">
                                <p>max. allowable part size(mm)</p>
                                <input class="text_box2" id="text" name="subprocess"
                                    type="text" placeholder="" required />
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="form-group">
                                <p>min. allowable part size(mm)</p>
                                <input class="text_box2" id="text" name="subprocess"
                                    type="text" placeholder="" required />
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="form-group">
                                <p>finest surface roughness(Ra)</p>
                                <input class="text_box2" id="text" name="subprocess"
                                    type="text" placeholder="" required />
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="form-group">
                                <p>finest achievable tolerance(mm)</p>
                                <input class="text_box2" id="text" name="subprocess"
                                    type="text" placeholder="" required />
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="form-group">
                                <p>max. machiable hardness (hrc)</p>
                                <input class="text_box2" id="text" name="subprocess"
                                    type="text" placeholder="" required />
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="form-group">
                                <p>avg.</p>
                                <input class="text_box2" id="text" name="subprocess"
                                    type="text" placeholder="" required />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <p>material (more variety of material,more probabbility of
                                    order)</p>
                                <div class="process_select">
                                    <select class="form-select"
                                        aria-label="Default select example">
                                        <option selected>aluminum</option>
                                        <option value="1">plain carbon steel</option>
                                        <option value="2">alloy steel</option>
                                        <option value="3">tool steel</option>
                                        <option value="4">stainless steel</option>
                                        <option value="5">tool steel</option>
                                        <option value="6">copper & alloy</option>
                                        <option value="7">titanium</option>
                                        <option value="8">super alloy</option>
                                        <option value="9">engineering plastic</option>
                                        <option value="10">PLA</option>
                                        <option value="11">PTFE</option>
                                        <option value="12">PETG</option>
                                        <option value="13">ABS</option>
                                        <option value="14">Nylon</option>
                                        <option value="15">Other</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group col-12 btn_save">
                            <button class="style1 btn_back1">
                                save
                            </button>
                        </div>
                    </div>
                </form>
        </div>
    )
}

export default Step3