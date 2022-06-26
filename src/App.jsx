import "./App.css";

import Cadastro from "./pages/cadastro/Cadastro";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Private from "./components/private/Private";

function App() {
  
  return (
    <Routes>
         <Route path="/" element={<Cadastro/>}/>
         <Route path="/home"  element={<Private><Home/></Private>}/>
    </Routes>  
  )
}

export default App;
