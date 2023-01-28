import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Manufacturer_Registration1 from './Manufacture_registration1';
import Manufacture_registration2 from './Manufacture_registration2';
import Manufacture_registration3 from './Manufacture_registration3';
import Manufacture_registration4 from './Manufacture_registration4';

const steps = ['Company Information', 'Process Capabilities', 'Machineries', 'Uploads'];
function getStepContent(step) {
    switch (step) {
        case 0:
            return <Manufacturer_Registration1 />;
        case 1:
            return <Manufacture_registration2 />;
        case 2:
            return <Manufacture_registration3 />;
        case 3:
            return <Manufacture_registration4 />;
        default:
            return 'Unknown step';
    }
}

function Manufacturer_Registration() {

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());


    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const handleReset = () => {
        setActiveStep(0);
    };


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
                    <section className="Login-wrap ptb-100 main_content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-12 col-xl-12 col-lg-12 one_col" style={{ width: "100%" }}>
                                    <div className="login-form-wrap" style={{ width: "100%", }}>
                                        <div className='uperstep' style={{ width: "100%", }}>
                                            <div style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
                                                <Stepper activeStep={activeStep} sx={{ fontSize: "xx-large" }}>
                                                    {steps.map((label, index) => {
                                                        const stepProps = {};
                                                        const labelProps = {};
                                                        return (
                                                            <Step key={label} {...stepProps}>
                                                                <StepLabel {...labelProps}>{label}</StepLabel>
                                                            </Step>
                                                        );
                                                    })}
                                                </Stepper>
                                            </div>
                                            <div>
                                                {activeStep === steps.length ? (
                                                    <div>
                                                        <Typography sx={{ mt: 2, mb: 1 }}>
                                                            All steps completed - you&apos;re finished
                                                        </Typography>
                                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                            <Box sx={{ flex: '1 1 auto' }} />
                                                            <Button onClick={handleReset}>Reset</Button>
                                                        </Box>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <div>
                                                            {getStepContent(activeStep)}
                                                        </div>
                                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, marginBottom: '10px', marginLeft: '5px' }}>
                                                            <div style={{display:"flex",alignItems:"center"}}>
                                                                <ArrowBackIosNewIcon  sx={{margin:"2px auto",fontSize:"2rem"}}/>
                                                                <button
                                                                    className="next_btn"
                                                                    disabled={activeStep === 0}
                                                                    onClick={handleBack}
                                                                >
                                                                    Back
                                                                </button>
                                                            </div>
                                                            <Box sx={{ flex: '1 1 auto' }} />
                                                            <div style={{display:"flex",alignItems:"center"}}>
                                                                <button onClick={handleNext} className="next_btn">
                                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                                </button>
                                                                <ArrowForwardIosIcon sx={{fontSize:"2rem"}}/>
                                                            </div>
                                                        </Box>

                                                    </div>
                                                )}
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

export default Manufacturer_Registration