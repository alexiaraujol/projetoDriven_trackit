import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import logo from "/src/assets/logo.png";

function SignUpPage() {
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const [nome, setNome] = useState("");
   const [foto, setFoto] = useState("");
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   function cadastro(e) {
      e.preventDefault();
      setLoading(true);
      const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
      const body = {
         email,
         password: senha,
         name: nome,
         image: foto
      };

      axios.post(URL, body)
         .then(() => {
            setLoading(false);
            navigate("/");
         })
         .catch(err => {
            setLoading(false);
            alert(err.response.data.message);
         });
   }

   return (
      <Container>
         <Logo src={logo} alt="logo" />
         <Formulario onSubmit={cadastro}>
            <Input
               type="text"
               placeholder="email"
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               disabled={loading}
            />
            <Input
               type="password"
               placeholder="senha"
               required
               value={senha}
               onChange={(e) => setSenha(e.target.value)}
               disabled={loading}
            />
            <Input
               type="text"
               placeholder="nome"
               required
               value={nome}
               onChange={(e) => setNome(e.target.value)}
               disabled={loading}
            />
            <Input
               type="url"
               placeholder="foto"
               required
               value={foto}
               onChange={(e) => setFoto(e.target.value)}
               disabled={loading}
            />
            <Button type="submit" disabled={loading}>
               {loading ? (
                  <ThreeDots
                     visible={true}
                     height="13"
                     width="51"
                     color="#fff"
                     radius="9"
                     ariaLabel="three-dots-loading"
                     wrapperStyle={{}}
                     wrapperClass=""
                  />
               ) : (
                  "Cadastrar"
               )}
            </Button>
            <Texto to="/">Já tem uma conta? Faça login!</Texto>
         </Formulario>
      </Container>
   );
}

export default SignUpPage;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 68px;
`;

const Logo = styled.img`
   width: 180px;
   height: 178px;
`;

const Formulario = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: #fff;
   margin-top: 40px;
`;

const Input = styled.input`
   width: 303px;
   height: 45px;
   margin-bottom: 6px;
   border: 1px solid #D4D4D4;
   border-radius: 5px;
   font-size: 19.98px;
   font-weight: 400;
   padding-left: 10px;
   font-family: "Lexend Deca", sans-serif;
   color: #DBDBDB;
`;

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
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Texto = styled(Link)`
   font-size: 16px;
   font-weight: 400;
   font-family: "Lexend Deca", sans-serif;
   color: #126BA5;
   cursor: pointer;
   margin-top: 10px;
   text-decoration: underline;
`;