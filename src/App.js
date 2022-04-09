import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <>
          <Route path='/' element={<Navigate replace to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
