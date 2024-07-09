import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNav from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';  
import Directory from './components/Directory/Directory.jsx';  
import AddNumber from './components/AddNumber/AddNumber.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/viewDirectory' element={<Directory />} />
          <Route path='/addPhoneNumber' element={<AddNumber />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
