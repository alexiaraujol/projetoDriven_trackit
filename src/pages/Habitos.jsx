import styled from 'styled-components';
import AdicionarHabitos from '../components/AdicionarHabitos';
import Habito from '../components/Habito';

function Habitos() {

    return (
        <Container>
            <Adicionarhabito>
                <Textinho>Meus hábitos</Textinho>
                <Botao>+</Botao>
            </Adicionarhabito>



            {/* <AdicionarHabitos/> */}
            

            <Texto>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </Texto>

            {/* <Habito/> */}
            
        </Container>

    )
}

export default Habitos;

const Container = styled.div`
    padding-top: 87px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    background-color: #F2F2F2;
`

const Adicionarhabito = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #f2f2f2; 
    padding-left:17px;
    margin-right:17px;
    margin-bottom: 20px;
    padding-right: 11px;
   
`
const Textinho = styled.h2`

    font-family: "Lexend Deca", sans-serif;
    color: #126BA5;
    font-size: 22.98px;
    font-weight: 400;
    padding-left: 12px;
    
`

const Botao = styled.button`
    width:40px;
    height: 35px;
    border-radius: 5px;
    background-color: #52B6FF;
    border: none;
    font-size: 27px;
    color: #fff;
    

`

const Texto = styled.p`
    
    height: 74px;
    padding-top: 15px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 17.98px;
    font-weight: 400;
    font-family: "Lexend Deca", sans-serif;
    color: #666666;
`

