
import './App.css';
import { Routes, Route,BrowserRouter } from "react-router-dom"
import Landingpage from './Components/Landingpage';
import Signup from './Components/signup';
import Login from './Components/Login';
import Trips from './Components/Trips';
import Citydetails from './Components/Citydetails';
import TravelForm from './Components/Maketrip';

function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Landingpage/> } />
        <Route path="Login" element={ <Login/> } />
        <Route path="Signup" element={ <Signup/> } />
        <Route path="Trips" element={ <Trips/> } />
        <Route path="City" element={ <Citydetails/> } />
        <Route path="/city/Travel" element={ <TravelForm/> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
