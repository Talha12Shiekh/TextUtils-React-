
import { useState } from 'react';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, Setmode] = useState('light');
  const [color, Setcolor] = useState('light');
  const [alert, Setalert] = useState(null);


  const showAlert = (message, type) => {
    Setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      Setalert(null);
    }, 1500);
  }

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-secondary');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-primary');
  // }

  const toggleMode = (cls) => {
    // removeBodyClasses();
    //   document.body.classList.add('bg-'+cls);
    //   if(document.body.classList.contains('bg-light')){
    //     document.body.classList.remove('bg-light');
    //   }
    if (mode === "light") {
      Setmode('dark');
      Setcolor('dark');
      document.body.style.backgroundColor = '#254d59';
      // showAlert("Dark mode has been enabled", "success");
      document.title = "Talha utils - Dark Mode";
    } else {
      Setmode('light');
      Setcolor('light');
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "success")
      document.title = "Talha utils - Light Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Talha utils" mode={mode} color={color} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About mode={mode} />} />
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze Below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
