/*import Carousel1 from './Components/Carousels/Carousel1';*/
import './App.css';
import Banner from './Components/Banner/Banner';
import Cards3 from './Components/Cards3/Cards3';


import Footer from './Components/Footer/Footer';

import Navbars from './Components/Navbars/Navbars';
import Process from './Components/Process/Process';
import Team from './Components/Team/Team';
function App() {
  return (
    <div className="App">
 <Navbars/>
{/*<Carousel1/>*/}
<Banner/>
<Process/>
<Cards3/>
<Team/>
   <Footer/>
    </div>
  );
}

export default App;