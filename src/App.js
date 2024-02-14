import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import codeContext from "./contexts/codecontext";
import Header from "./components/Header";
import Home from './pages/Home'


function App() {
  const [codeSettings, setCodeSettings] = useState({
    langName: 'html',
    langIndex: 0,
 });

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


  return (
    <>

      <Router>
        <div className='container'>
          <codeContext.Provider value={{codeSettings, setCodeSettings}}>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </codeContext.Provider>
        </div>
      </Router>

    </>
  );
}

export default App;
