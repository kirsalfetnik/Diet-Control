import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages 
import Home from './pages/Home';
import About from './pages/About';

// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>

            <Route
            path="/"
            element={<Home />}
            />

            <Route 
            path="/about"
            element={<About />}
            />
            
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>  
    </div>
  );
}

export default App;
