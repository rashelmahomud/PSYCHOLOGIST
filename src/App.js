import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Compornents/Shared/Header';
import Footer from './Compornents/Shared/Footer';
import Home from './Compornents/Home/Home';
import { useEffect, useState } from 'react';
import Person from './Compornents/Service/service1/Person';
import PersonDetails from './Compornents/Service/service1/PersonDetails';

function App() {
  const [theme, setTheme] = useState(false);



  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };
  return (
    <div data-theme={theme && "my_dark"}>

      <Header handleThemeChange={handleThemeChange} theme={theme}></Header>
      <Routes>



        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/person' element={<Person></Person>} ></Route>
        <Route path='/personDetails/:detailsId' element={<PersonDetails></PersonDetails>} ></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
