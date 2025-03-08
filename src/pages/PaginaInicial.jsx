import Navbar from "../components/Navbar"
import Rodape from "../components/Rodape"
import Habitos from "./Habitos"
import Hoje from "./Hoje"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"


function PaginaInicial() {

   const [habitos,setHabitos]= useState("")


   useEffect(() => {

      const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
      axios.get(URL)
      .then()
      .catch(err => console.log(err.response.data))
   }, [])


    return (

       <div>

            <Navbar/>

              <Habitos/>
               {/* <Hoje/> */}
           
            <Rodape/>




       </div>    
           
        
    ) 
     
  }
  export default PaginaInicial