/*import Carousel1 from './Components/Carousels/Carousel1';*/

import './App.css'
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Choose from './Components/Choose/Choose';


import Footer from './Components/Footer/Footer';
import Logo from './Components/Logo/Logo';

import Navbars from './Components/Navbars/Navbars';
import Process from './Components/Process/Process';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
<Route path='/' element={<> <Navbars/>
{/*<Carousel1/>*/}
<Banner/>
<Logo/>
<About/>
<Process/>
<Choose/>
   <Footer/></>}  />
<Route path='/about' element={<><Navbars/><About/><Footer/></>}  />
<Route path='/services' element={<><Navbars/><Process/><Footer/></>}  />
<Route path='/logo' element={<><Navbars/><Logo/><Footer/></>}  />
</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
