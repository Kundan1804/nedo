import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signin from './components/Signin';
import Signup from './components/Signup';
import Manufacturer_Registration from './components/Manufacturer_Registration';
import Manufacture_registration2 from './components/Manufacture_registration2';
import Manufacture_registration3 from './components/Manufacture_registration3';
import Manufacture_registration4 from './components/Manufacture_registration4';
import Manufacture_signin from './components/Manufacture_signin';
import Header from './components/Header';
import Footer from './components/Footer';
import Manufacturer_Registration1 from './components/Manufacture_registration1';
import Step3 from './components/Step3';
import Msaas from "./components/Msaas"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/"
            element={<Signup />}>
          </Route>
          <Route exact path="/signin"
            element={<Signin />}>
          </Route>
          <Route exact path="/Manufacture_Registration"
            element={<Manufacturer_Registration/>}>
          </Route>
          <Route exact path="/Manufacture_Registration1"
            element={<Manufacturer_Registration1 />}>
          </Route>
          <Route exact path="/Manufacture_Registration2"
            element={<Manufacture_registration2 />}>
          </Route>
          <Route exact path="/Manufacture_Registration3"
            element={<Manufacture_registration3 />}>
          </Route>
          <Route exact path="/Manufacture_Registration4"
            element={<Manufacture_registration4/>}>
          </Route>
          <Route exact path="/Manufacture_signin"
            element={<Manufacture_signin />}>
          </Route>
          <Route exact path="/3"
            element={<Step3 />}>
          </Route>
          <Route exact path="/msaas"
            element={<Msaas />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
