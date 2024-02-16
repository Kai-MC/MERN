import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/about';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Header from './components/Header';
import PrivateRouter from './components/PrivateRouter';

export default function App() {
  return <BrowserRouter>
  <Header/>
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/sign-in" element={<Signin />} />
      <Route path = "/sign-up" element={<SignUp />} />
      <Route path = "/about" element={<About />} />
      <Route element={<PrivateRouter/>}>
        <Route path = "/profile" element={<Profile />} />
      </Route>
      
    </Routes>
  </BrowserRouter>

}
