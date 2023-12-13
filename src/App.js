import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Footer from "./components/Footer"
import React, { useState, useEffect } from 'react';


function App() {

  // checking local storage
  useEffect(() => {
    const SystemThemeUser = localStorage.getItem("ChoosenTheme");
    if (SystemThemeUser && SystemThemeUser === "light") {
      document.querySelector("body").classList.remove("dark");
    }
    // dark
    else if (SystemThemeUser && SystemThemeUser === "dark") {
      document.querySelector("body").classList.add("dark");
    }

    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({ matches }) => {
        if (matches) {
          // dark
          document.body.classList.add('dark');
          localStorage.setItem('ChoosenTheme', "dark");
        } else {
          // light
          document.body.classList.remove('dark');
          localStorage.setItem('ChoosenTheme', "light");
        }
      })
  }, []);

  // Loader
  const [loading, setLoading] = useState(true);
  const Spinner = document.getElementById("loader-overlay");
  if (Spinner) {
    setTimeout(() => {
      Spinner.classList.add("loader-overlay-hidden");
      setLoading(false);
    }, 1000);
  }

  return (
    !loading && (
    <>

      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>

      </>
    )
  );
}

export default App;
