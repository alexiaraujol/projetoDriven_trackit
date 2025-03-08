
import LoginPage from "./pages/LoginPage"
import PaginaInicial from "./pages/PaginaInicial"
import SingUpPage from "./pages/SingUpPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
 


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sing-up" element={<SingUpPage />} />
        <Route path="/pagina-inicial" element={<PaginaInicial />} />
      </Routes>
    </BrowserRouter>
    



  )
}

export default App


