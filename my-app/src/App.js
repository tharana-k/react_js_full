
import './App.css';
import Array_destructuring from './Array_destructuring';
import Arrayobjects_simpleupdate from './Arrayobjects_simpleupdate';
import Arraysimpleupdate from './Arraysimpleupdate';
import Accordins from './Components/Accordins/Accordins';
import Cards3 from './Components/Cards3/Cards3';

import Carousel1 from './Components/Carousels/Carousel1';
import Footer from './Components/Footer/Footer';

import Navbars from './Components/Navbars/Navbars';
import Map1 from './Map1';
import Mapcard from './Mapcard';
import Mapcarousel from './Mapcarousel';
import Maptable from './Maptable';
import Object1 from './Object1';
import Object_destructuring from './Object_destructuring';
import Props1 from './Props1';
import Spread_addobjects from './Spread_addobjects';
import Spread_updation from './Spread_updation';
import Spreadoperator_return from './Spreadoperator_return';
import Spreadsimple from './Spreadsimple';
import Ternaryoperataor from './Ternaryoperataor';
import Ternaryoperator_cards from './Ternaryoperator_cards';
import Ternaryoperatorbackground from './Ternaryoperatorbackground';
import Ternaryoperatorcards from './Ternaryoperatorcards';
import Usestate1 from './Usestate1';
import Usestate2 from './Usestate2';
import Usestate3 from './Usestate3';
import Usestate4 from './Usestate4';
import Usestate5 from './Usestate5';
import Usestateobjects from './Usestateobjects';
import Propsternary1 from './Propsternary1'
import Useeffecthook1 from './Useeffecthook1';
import Useffecthook2 from './Useffecthook2';
import Dummyaxiosapi from './Dummyaxiosapi';
import Dummyaxiosapi2 from './Dummyaxiosapi2';
import Dummyaxiosapi_card from './Dummyaxiosapi_card';
import Dummyaxiosapi_carousel from './Dummyaxiosapi_carousel';
import Props_no_destructure1 from './Props_no_destructure1';
import Dummyaxiosapi_card2 from './Dummyaxiosapi_card2';
import Context_valuecopy from './Context_valuecopy';
import { createContext, useState } from 'react';
import Data from './Data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 {/*import Demo1 from './Demo1';
 import Card3 from './Card3';
 import Modal1 from './Modal1';
 import Carousel1 from './Carousel1';
import Demo2 from './Demo2';
import Externalcss from './Externalcss';
import Inline from './Inline';
import Internalcss from './Internalcss';
import Reacticons from './Reacticons';*/}



const Newcontext = createContext();
function App() {

 /*const[data,setData]=useState(Data);
  console.log(data);*/
  return (
    <div className="App">

<BrowserRouter>
<Routes>
<Route path='/' element={<><Navbars/><Carousel1/><Cards3/></>}  />
<Route path='/link1' element={<Accordins/>}  />


</Routes>
</BrowserRouter>



  {/* <Newcontext.Provider value={{data,setData}}>
<Context_valuecopy/>

</Newcontext.Provider>
      <Dummyaxiosapi_card2/>
     <Props_no_destructure1/>
      <Dummyaxiosapi_card/>
     <Dummyaxiosapi_card/>
     <Dummyaxiosapi2/>
     <Dummyaxiosapi/>
        <Useffecthook2/> 
      <Useeffecthook1/> 
       <Propsternary1/>
       <Props1/>
      <Ternaryoperatorbackground/>
      <Ternaryoperatorcards/>
      <Ternaryoperator_cards/>
      <Ternaryoperataor/>
      <Spreadoperator_return/>
      <Spread_updation/>
      <Spread_addobjects/>
      <Spreadsimple/>
      <Arrayobjects_simpleupdate/>
      <Arraysimpleupdate/>
      <Usestate5/>
<Usestate4/>
      <Usestateobjects/>
      <Usestate3/>
      <Usestate2/>
      <Usestate1/>
      <Maptable/>
      <Object1/>
    <Mapcard/>
    <Mapcarousel/>
    <Object_destructuring/>
    <Array_destructuring/>
      {/*   <Map1/>
       <Navbars/>
<Carousel1/>
<Cards3/>
<Accordins/>
   <Footer/>
     <Card3 />
    <Modal1/>
    <Carousel1/>
  <Demo1/>
   <Demo2/>
   <Inline/>
   <Internalcss/>
   <Externalcss/>
  <Reacticons/>*/}
    </div>
  );
}

export default App;
export {Newcontext}