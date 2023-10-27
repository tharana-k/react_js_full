import { createContext, useState } from "react";
import Data from "./Data";

import{ BrowserRouter, Route, Routes } from "react-router-dom"
import Tables from "./Table";
import Viewpage from "./Viewpage";
import Editpage from "./Editpage";
import Deletepage from "./Deletepage";
import { Createpage } from "./Createpage";



const Newcontext = createContext();
function App() {

  const[data,setData]=useState(Data);
  console.log(data);
  return (
    <div className="App">
  <Newcontext.Provider value={[data,setData]}>
<BrowserRouter>
<Routes>
<Route path='/' element={<Tables/>}  />
<Route path='/viewpage/:user' element={<Viewpage/>}  />
<Route path='/editpage2/:user' element={<Editpage/>}  />
<Route path='/deletepage/:user' element={<Deletepage/>}  />
<Route path='/createpage' element={<Createpage/>}  />
</Routes>
</BrowserRouter>
</Newcontext.Provider>
    </div>
  );
}

export default App;
export {Newcontext}