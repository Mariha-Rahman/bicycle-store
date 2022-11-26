
import './App.css';
import Header from './components/Header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Header/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
