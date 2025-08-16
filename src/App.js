import NavBar from './NavBar';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CardProvider } from "./CardContext";
import CoursesPage from "./CourseDescription";
function App() {
  return (
   <CardProvider>
    <Router>
      <Routes>
        <Route path='/' element={
          <>
          <NavBar />
          <Home />
          </>
        } 
        />
         <Route
            path="/course/:id"
            element={<CoursesPage />}
          />
      </Routes>
    </Router>
   </CardProvider>
  );
}

export default App;
