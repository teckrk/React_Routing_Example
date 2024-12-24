import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import Page404 from './components/page404';
import User from './components/user';
import Filter from './components/filter';
import Footballers from './components/footballers';
import Ronaldo from './components/ronaldo';
import Neymar from './components/neymar';
import Messi from './components/messi';
import Login from './components/login';
import Protected from './components/protected';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Protected Component={Home} />} />
          <Route path='/about' element={<Protected Component={About} />} />
          {/* <Route path='/*' element={<Page404 />} /> */}
          <Route path='/user/:name' element={<User />} />
          <Route path='/*' element={<Navigate to="/" />} />
          <Route path='/filter' element={<Protected Component={Filter} />} />
          <Route path='/footballers/' element={<Protected Component={Footballers} />}>
            <Route path='ronaldo' element={<Ronaldo />} />
            <Route path='neymar' element={<Neymar />} />
            <Route path='messi' element={<Messi />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
