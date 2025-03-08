
import logo from '../assets/logo.png'
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


function LoginPage() {
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const navigate = useNavigate();

   function sendLogin(e) {
      e.preventDefault()
      const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
      const body = {
         email,
         password: senha
      }

      axios.post(URL, body)
         .then(res => {
            console.log(res.data)
            navigate("/pagina-inicial")

            
         })
         .catch(err => alert(err.response.data.message))
   }



   return (

      <Container>

         <Logo src={logo} alt="logo" />

         <Formulario onSubmit={sendLogin}>

            <Input
               type="email"
               placeholder="email"
               required
               value={email}
               onChange={e => setEmail(e.target.value)}
            />

            <Input
               type="password"
               placeholder="senha"
               required
               value={senha}
               onChange={e => setSenha(e.target.value)}
            />

            <Button type="submit">Entrar</Button>
            <Texto to="/sing-up" >Não tem uma conta? Cadastre-se!</Texto>
         </Formulario>

      </Container>


   )

}

export default LoginPage

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 68px ;
`

const Logo = styled.img`
   width: 180px;
   height: 178px;`

const Formulario = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: #fff;
   margin-top: 40px;

   `

const Input = styled.input`
   width: 303px;
   height: 45px;
   margin-bottom: 6px;
   border: 1px solid #D5D5D5;
   border-radius: 5px;
   font-size: 19.98px;
   font-weight: 400;
   padding-left: 10px;
   font-family: "Lexend Deca", sans-serif;
   color: #DBDBDB;

`

const Button = styled.button`
   width: 303px;
   height: 45px;
   margin-bottom: 25px;
   padding: 10px;
   border: 1px solid #D5D5D5;
   border-radius: 5px;
   font-size: 20px;
   color: #FFFFFF;
   background-color: #52B6FF;
   font-family: "Lexend Deca", sans-serif;
   font-weight: 400;
   cursor: pointer
`
const Texto = styled(Link)`
   font-size: 16px;
   font-weight: 400;
   font-family: "Lexend Deca", sans-serif;
   color: #126BA5;
   cursor: pointer;
   margin-top: 10px;
   text-decoration: underline;
`