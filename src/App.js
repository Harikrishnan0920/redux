import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './page/Home';
import Other from './page/Other';
function App() {
  return <>
<BrowserRouter>
  <Routes>

    <Route path='/' element={<Home/>} ></Route>
    <Route path='/other' element={<Other/>} ></Route>
  </Routes>
</BrowserRouter>


  </>
}

export default App;
