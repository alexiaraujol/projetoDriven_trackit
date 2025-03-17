
import LoginPage from "./pages/LoginPage"
import SingUpPage from "./pages/SingUpPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Hoje from "./pages/Hoje";
import Habitos from "./pages/Habitos";
import UserContext from "./contexts/UserContext";
import styled from "styled-components";



function App() {

  const [token, setToken] = useState(localStorage.getItem("token"))
  const [user, setUser] = useState("");

  return (

    <Container>
      <UserContext.Provider value={[user, setUser]} >
        <BrowserRouter>
          <Routes>


            <Route path="/" element={<LoginPage setToken={setToken} />} />
            <Route path="/sing-up" element={<SingUpPage />} />
            <Route path="/hoje" element={<Hoje token={token} />} /> 
            <Route path="/habitos" element={<Habitos token={token} setToken={setToken} />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Container>





  )
}

export default App

const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    padding-bottom: 73px;
`;


