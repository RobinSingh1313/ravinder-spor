import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'
import Footer from './components/Footer'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import Imageslider from './components/Imageslider';
import Products from './components/Products';
import Product from './components/Product';


function App() {
  return (<>
    <div className="App">

     <Navbar>

   
     </Navbar>
     <Hero/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
