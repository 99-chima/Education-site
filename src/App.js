import NavBar from './NavBar';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CardProvider } from "./CardContext";
import CoursesPage from "./CourseDescription";
import About from './About';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';
import Checkout from './Checkout';
import Login from './Login';
function App() {
  return (
   <CardProvider>
    <Router>
      <Routes>
        <Route path='/' element={
          <>
          <NavBar />
          <Home />
          <About />
          <Testimonial />
          <Contact />
          <Footer />
          </>
        } 
        />
         <Route
            path="/course/:id"
            element={<CoursesPage />}
          />
           <Route path="/Checkout" element={
  <>
  <NavBar />
  <Checkout />
  <Footer />
  </>
}
/>
<Route
            path="/login"
            element={
              <>
                <NavBar />
                <Login />
                <Footer />
              </>
            }
          />
      </Routes>
    </Router>
   </CardProvider>
  );
}

export default App;
