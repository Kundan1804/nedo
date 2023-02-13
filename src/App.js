import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Manufacturer_Registration from './pages/Manufacturer_Registration';
import Manufacture_registration2 from './pages/Manufacture_registration2';
import Manufacture_registration3 from './pages/Manufacture_registration3';
import Manufacture_registration4 from './pages/Manufacture_registration4';
import Manufacture_signin from './pages/Manufacture_signin';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Manufacturer_Registration1 from './pages/Manufacture_registration1';
import Step3 from './pages/Step3';
import Msaas from "./pages/Msaas"
import CustomerDashboard from './pages/customerDashboard/CustomerDashboard';

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
          <Route exact path="/msaas"
            element={<Msaas />}>
          </Route>
          <Route exact path="/CustomerDashboard"
            element={<CustomerDashboard />}>
          </Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
