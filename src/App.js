import React ,{ useState } from 'react'; 
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
import Alert from './components/Alertt';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
    
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type 
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
    
  }
  const toggleMode= ()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success");
    document.title='MyApp-dark mode';
    // setInterval(()=>{
    //   document.title='MyApp is Amazing Mode';
    // },2000);
    // setInterval(()=>{
    //   document.title='Install MyApp Now';
    // },1500);
  }
  else
  {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title='MyApp-light mode';
  }
}
  return (

<>
{/* <Router basename='/myapp'> */}
<Navbar title="App" mode={mode} toggleMode={toggleMode}/>
<TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>

{/* <Alert alert={alert}/> */}
<div className="container my-3">
{/* <Routes>
          <Route path="/" element={ <TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          
</Routes> */}
</div>
{/* </Router> */}
</>
);
}

export default App;
