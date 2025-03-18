import styled from "styled-components";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Link, useLocation } from "react-router-dom";

function Rodape() {
    const location = useLocation();
    const isHojeSelected = location.pathname === "/hoje";
    const isHabitosSelected = location.pathname === "/habitos";

    return (
        <ContainerRodape>
            <StyledLink to="/habitos" selected={isHabitosSelected}>
                <CalendarMonthIcon />
                Hábitos
            </StyledLink>
            <StyledLink to="/hoje" selected={isHojeSelected}>
                <EventAvailableIcon />
                Hoje
            </StyledLink>
        </ContainerRodape>
    );
}

export default Rodape;

const ContainerRodape = styled.div`
    width: 100vw;
    height: 65px;
    position: fixed;
    bottom: 0;
    display: flex;
`;

const StyledLink = styled(Link)`
    width: 50%;
    height: 65px;
    background-color: ${({ selected }) => (selected ? "#52B6FF" : "#FFFFFF")};
    border: none;
    color: ${({ selected }) => (selected ? "#FFFFFF" : "#D4D4D4")};
    font-size: 18px;
    font-weight: 400;
    font-family: "Lexend Deca", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;