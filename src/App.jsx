import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/about';
import Profile from './pages/Profile';
import Home from './pages/Home';

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/sign-in" element={<Signin />} />
      <Route path = "/sign-up" element={<SignUp />} />
      <Route path = "/about" element={<About />} />
      <Route path = "/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>

}
