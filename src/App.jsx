
import LoginPage from "./pages/LoginPage"
import SingUpPage from "./pages/SingUpPage"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Hoje from "./pages/Hoje";
import Habitos from "./pages/Habitos";
 


function App() {

  const [token, setToken] = useState(localStorage.getItem("token"))

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken} />} />
        <Route path="/sing-up" element={<SingUpPage />} />
        <Route path="/hoje" element={<Hoje token={token} />} />
        <Route path="/habitos" element={<Habitos  token ={token} setToken={setToken}/>} />
      </Routes>
    </BrowserRouter>
    



  )
}

export default App


