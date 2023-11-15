/*import Carousel1 from './Components/Carousels/Carousel1';*/

import './App.css'
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import AnimatedCounter from './Components/Counter/AnimatedCounter';


import Footer from './Components/Footer/Footer';
import Logo from './Components/Logo/Logo';

import Navbars from './Components/Navbars/Navbars';
import Process from './Components/Process/Process';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Team1 from './Components/Team1/Team1';
import Form_Sec from './Components/Form_sec/Form_Sec';
import { createContext, useState } from 'react';
import Data from './Data';
import { Createpage } from './Createpage';
import Teampage from './Teampage';
import Updatepage from './Updatepage';
import Deletepage from './Deletepage';
import Inner_banner from './Components/Inner_banner/Inner_banner';
import Joinus from './Components/Joinus/Joinus';
import Adminlogin from './Components/Adminlogin/Adminlogin';
import Details from './Components/Details/Details';
import stuData from './Studentdata';
import Deletestudentpage from './Deletestudentpage';
import Updatestudentpage from './Updatestudentpage';
import { Createstudentpage } from './Createstudentpage';
import Studentpage from './Studentpage';
import adminData from './Components/Adminlogin/Admindata';



const Newcontext = createContext();
const newcontext = createContext();
const newcontext1 = createContext();

function App() {

  const[studata,setstudata]=useState(stuData);
  const[data,setData]=useState(Data);


console.log(adminData)
  return (
    <div className="App">
        <newcontext1.Provider value={{adminData}}>
        <newcontext.Provider value={[studata,setstudata]}>
  <Newcontext.Provider value={[data,setData]}>
<BrowserRouter>
<Routes>
<Route path='/' element={<> <Navbars/>
{/*<Carousel1/>*/}
<Banner/>
<Logo/>
<About/>
   <AnimatedCounter value1={100} value2={150} value3={20} value4={15} />
<Process/>
<Form_Sec/>
<Team1/>
   <Footer/></>}  />
<Route path='/about' element={<><Navbars/> <Inner_banner text="About us" /><About/><Footer/></>}  />
<Route path='/courses' element={<><Navbars/><Inner_banner text="courses"/><Process/><Footer/></>}  />
<Route path='/Team1' element={<><Navbars/><Inner_banner text="Our Team"/><Team1/><Footer/></>}  />
<Route path='/contactUs' element={<><Navbars/><Inner_banner text="Contact Us"/><Form_Sec/><Footer/></>}  />
<Route path='/Teampage' element={<><Navbars/><Inner_banner text="Team Members"/><Teampage/><Footer/></>}  />
<Route path='/createpage' element={<><Navbars/><Inner_banner text="Faculty Register"/><Createpage/><Footer/></>}  />
<Route path='/Updatepage/:user' element={<><Navbars/><Inner_banner text="Update Details"/><Updatepage/><Footer/></>}  />
<Route path='/deletepage/:user' element={<><Navbars/><Inner_banner text="Delete Details"/><Deletepage/><Footer/></>}  />
<Route path='/innerbanner' element={<Inner_banner/>}  />
<Route path='/joinus' element={<><Navbars/><Inner_banner text="Join Us Now"/><Joinus/><Footer/></>}  />
<Route path='/adminlogin' element={<><Navbars/><Inner_banner text="Admin Login"/><Adminlogin/><Footer/></>}  />
<Route path='/details' element={<><Navbars/><Inner_banner text="People Details"/><Details/><Footer/></>}  />
<Route path='/createstudentpage' element={<><Navbars/><Inner_banner text="Student Register"/><Createstudentpage/><Footer/></>}  />
<Route path='/updatestudentpage/:user' element={<><Navbars/><Inner_banner text="Update Details"/><Updatestudentpage/><Footer/></>}  />
<Route path='/deletestudentpage/:user' element={<><Navbars/><Inner_banner text="Delete Details"/><Deletestudentpage/><Footer/></>}  />
<Route path='/Studentpage' element={<><Navbars/><Inner_banner text="Students List"/><Studentpage/><Footer/></>}  />
</Routes>
</BrowserRouter>
</Newcontext.Provider>
</newcontext.Provider>
</newcontext1.Provider>
    </div>
  );
}

export default App;
export {Newcontext}
export {newcontext}
export {newcontext1}