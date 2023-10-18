
import './App.css';
import About from './Components/About';
import Banner from './Components/Banner';
import Navbar1 from './Components/Navbar1';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
    <Navbar1/>
    <div className="mains">
<Banner/>
<About/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
