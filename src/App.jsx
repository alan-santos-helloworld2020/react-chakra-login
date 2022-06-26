import "./App.css";
import {
  Container,
  Box,
  Center,
  Text,
  Flex
} from "@chakra-ui/react";
import Cadastro from "./pages/cadastro/Cadastro";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  
  return (
    <Routes>
         <Route path="/" element={<Cadastro/>}></Route>
         <Route path="/home"  element={<Home/>}></Route>
    </Routes>  
  )
}

export default App;
