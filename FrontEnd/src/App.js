import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/mainPage';
import Rqleave from './components/rqleave';
import Main from './components/main';
import Home from './components/home';
import Student from './components/student';
import $ from 'jquery';function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Student/>
      <Home/> 
      <MainPage />
      <Routes>
        {/* <Route path='/' element={<Main />}/> */}
        <Route path='/requestleave' element={<Rqleave />} />
        <Route path='/about' element={<Rqleave />} />
        <Route path='/contact' element={<Rqleave />} />
        <Route path='/sendemail' element={<Rqleave />} />
        <Route path='/m' element={<Rqleave />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
