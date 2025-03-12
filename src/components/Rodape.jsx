import styled from "styled-components"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Link } from "react-router-dom";

function Rodape() {
    return (
        <ContainerRodape>
            <Habitos to="/habitos"> <CalendarMonthIcon/> Hábitos</Habitos>
            <Hoje to="/hoje"> <EventAvailableIcon/> Hoje</Hoje>
        </ContainerRodape>

    )
}

export default Rodape;

const ContainerRodape = styled.div`
        width: 100vw;
        height: 65px;
        position: fixed;
        bottom: 0;
        display: flex; /* Adicionado para alinhar os botões lado a lado */
`

const Habitos = styled(Link)`
    width: 50%; /* Ajustado para 50% da largura */
    height: 65px;
    background-color: #52B6FF;
    border: none;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 400;
    font-family: "Lexend Deca", sans-serif;
    display: flex;
    justify-content: center;    
    align-items: center;
    text-decoration: none;
    
`

const Hoje = styled(Link)`
    width: 50%; /* Ajustado para 50% da largura */
    height: 65px;
    background-color: #FFFFFF;
    border: none;
    color: #D4D4D4;
    font-size: 18px;
    font-weight: 400;
    font-family: "Lexend Deca", sans-serif; 
    display: flex;
    justify-content: center;    
    align-items: center;
    text-decoration: none;
    
`