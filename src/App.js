import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from "./pages/homepage";
import { Register } from "./pages/registerpage";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/loginPage";
import { useContext } from "react";
import { Context } from "./context/Context";
import { ErrorPage } from "./pages/error";

function App(props) {
  const { user } = useContext(Context);
  return (
  <BrowserRouter>
    <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path="*"  element={<ErrorPage />} />
    </Routes>   
  </BrowserRouter>
  
  )
}

export default App;