import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Switch from '@mui/material/Switch';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function Manufacture_registration3() {
  const [personName, setPersonName] = React.useState([]);

  const [expanded, setExpanded] = useState(false);
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

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
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <div id="manufaturing_login4">

      <div class="page-wrapper">

        <div class="content-wrapper">

          <section className="Login-wrap ptb-100 main_content" style={{ paddingTop: "0" }}>
            <div class="container">

              <div>
                <h2 class="company_information_header">machineries</h2>
              </div>

              <Stack sx={{ display: "flex", flexDirection: "row", marginBottom: "5%" }}>
                <Accordion sx={{
                  width: "100%",
                  height: "6rem",                        // boxShadow: "3px 1px 10px"
                }}>
                  <AccordionSummary sx={{

                  }}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h2>New Mchine</h2>
                    <div class="div_edit_img">
                      <EditIcon sx={{ fontSize: "30px", marginTop: "", padddingRight: "10%" }} />
                    </div>
                    <div className="div_check_switch">
                      <Switch defaultChecked sx={{ marginTop: "1%", }} />
                    </div>
                  </AccordionSummary>
                  <AccordionDetails sx={{ width: "100%" }}>
                    <Typography sx={{ width: "100%" }}>
                      <div id="manufaturing_login5">
                        <form class="form-wrap" action="#">
                          <div class="row process_row">
                            <div class="col-5 process_col">
                              <div class="form-group">
                                <p>process</p>
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
                                  type="text" placeholder="eg. 10x10x10" required />
                              </div>
                            </div>
                            <div class="col-5">
                              <div class="form-group">
                                <p>min. allowable part size(mm)</p>
                                <input class="text_box2" id="text" name="subprocess"
                                  type="text" placeholder="eg. 500x500x500" required />
                              </div>
                            </div>
                            <div class="col-5">
                              <div class="form-group">
                                <p>finest surface roughness(Ra)</p>
                                <input class="text_box2" id="text" name="subprocess"
                                  type="text" placeholder="eg. 3.2 Ra" required />
                              </div>
                            </div>
                            <div class="col-5">
                              <div class="form-group">
                                <p>finest achievable tolerance(mm)</p>
                                <input class="text_box2" id="text" name="subprocess"
                                  type="text" placeholder="eg. 0.125" required />
                              </div>
                            </div>
                            <div class="col-5">
                              <div class="form-group">
                                <p>max. machiable hardness (hrc)</p>
                                <input class="text_box2" id="text" name="subprocess"
                                  type="text" placeholder="eg. 10" required />
                              </div>
                            </div>
                            <div class="col-5">
                              <div class="form-group">
                                <p>avg.</p>
                                <input class="text_box2" id="text" name="subprocess"
                                  type="text" placeholder="eg. 10" required />
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="form-group">
                                <p>material (more variety of material,more probabbility of
                                  order)</p>
                                {/* <div class="process_select">
                                  <select class="form-select"
                                    aria-label="Default select example" multiple>
                                    <option value="0">aluminum</option>
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
                                </div> */}
                                <InputLabel id="demo-multiple-name-label" />
                                <Select
                                  sx={{ width: "100%" }}
                                  labelId="demo-multiple-name-label"
                                  id="demo-multiple-name"
                                  multiple
                                  value={personName}
                                  onChange={handleChange2}
                                  input={<OutlinedInput />}
                                // MenuProps={MenuProps}
                                >
                                  {names.map((name) => (
                                    <MenuItem
                                      key={name}
                                      value={name}
                                    // style={getStyles(name, personName, theme)}
                                    >
                                      {name}
                                    </MenuItem>
                                  ))}
                                </Select>
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
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <div class="col-1">
                  <div class="form-group add_more_btn">
                    <AddIcon onClick={() => handleAdd()} sx={{ fontSize: "40px", cursor: "pointer", paddingBottom: "5px" }} />
                  </div>
                </div>
              </Stack>
              {val.map((data, i) => {
                return (
                  <div style={{ marginBottom: "5%" }}>
                    <Stack sx={{ display: "flex", flexDirection: "row" }}>
                      <Accordion sx={{
                        width: "100%",
                        height: "6rem",
                      }}>
                        <AccordionSummary
                          aria-controls="panel3a-content"
                          id="panel3a-header"
                        >
                          <h2>New Mchine</h2>
                          <div class="div_edit_img">
                            <EditIcon sx={{ fontSize: "30px", marginTop: "30%", padddingRight: "10%" }} />
                          </div>
                          <Switch defaultChecked sx={{ marginTop: "1%", }} />
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography sx={{ width: "100%" }}>
                            <div id="manufaturing_login5">
                              <form class="form-wrap" action="#">
                                <div class="row process_row">
                                  <div class="col-5 process_col">
                                    <div class="form-group">
                                      <p>process</p>
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
                                        <InputLabel id="demo-multiple-name-label" />
                                        <Select
                                          sx={{ width: "100%" }}
                                          labelId="demo-multiple-name-label"
                                          id="demo-multiple-name"
                                          multiple
                                          value={personName}
                                          onChange={handleChange2}
                                          input={<OutlinedInput />}
                                        // MenuProps={MenuProps}
                                        >
                                          {names.map((name) => (
                                            <MenuItem
                                              key={name}
                                              value={name}
                                            // style={getStyles(name, personName, theme)}
                                            >
                                              {name}
                                            </MenuItem>
                                          ))}
                                        </Select>
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
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <div class="col-1">
                        <div class="form-group add_more_btn">
                          <AddIcon onClick={() => handleAdd()} sx={{ fontSize: "40px", cursor: "pointer", paddingBottom: "5px" }} />
                        </div>
                      </div>
                    </Stack>
                  </div>
                )
              })}



            </div>
          </section>
        </div>
      </div>

    </div>
  )
}

export default Manufacture_registration3