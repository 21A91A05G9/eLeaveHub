import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/mainPage';
import Rqleave from './components/rqleave';
import Main from './components/main';
import Home from './components/home';
import Student from './components/student';
import Register from './components/register';
import Hod from './components/hod'
import Contact from './components/contact';
import HodAccept from './components/hodaccept';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      {/* <Student/> */}
      {/* <Hod/> */}
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/requestleave' element={<Rqleave />} />
        <Route path='/studentDashboard' element={<Student/>}/>
        <Route path='/register' element={<Register />} />
        {/* <Route path='/about' element={<Rqleave />} /> */}
        <Route path='/login' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sendemail' element={<Rqleave />} />
        <Route path='/studentReq' element={<HodAccept/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;