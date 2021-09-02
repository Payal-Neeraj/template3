import globalStyles from './globalStyles'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar';
import MiddleSection from './components/MiddleSection';
import FeaturedCourses from './components/FeaturedCourses';
import PricingPlan from './components/PricingPlan';
import Testimonials from './components/Testimonials';
import SlickSlider from './components/SlickSlider';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <>
      <Navbar/>
       <MiddleSection /> 
       <Testimonials />
       <Subscribe />
       <PricingPlan />
       <Footer />
    </>
  );
}

export default App;
