
import './App.css';
import { Creaddetails } from './Creaddetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Creadview } from './Creadview';
import { Creadedit } from './Creadedit';
import { Creaddelete} from './Creaddelete'
import { Creadcreate } from './Creadcreate';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Routes>
<Route path='/' element={<Creaddetails/>}  />
<Route path='/Creadview/:user' element={<Creadview/>}  />
<Route path='/Creadedit/:user' element={<Creadedit/>}  />
<Route path='/Creaddelete/:user' element={<Creaddelete/>}  />
<Route path='/Creadcreate' element={<Creadcreate/>}  />
</Routes>
</BrowserRouter>
  
    </div>
  );
}

export default App;
