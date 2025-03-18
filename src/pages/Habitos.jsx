import styled from 'styled-components';
import CriarHabito from '../components/CriarHabito';
import HabitoCriado from '../components/HabitoCriado';
import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Habitos({ token }) {
    const [habits, setHabits] = useState([]);
    const [showCriarHabito, setShowCriarHabito] = useState(false);

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get(URL, config)
            .then(res => setHabits(res.data))
            .catch(err => console.log(err.response.data));
    }, [token]);

    const toggleCriarHabito = () => {
        setShowCriarHabito(!showCriarHabito);
    };

    const handleAddHabito = (novoHabito) => {
        setHabits([...habits, novoHabito]);
        setShowCriarHabito(false); // Ocultar o componente CriarHabito após adicionar o hábito
    };

    return (
        <>
            <Navbar />
            <Container>
                <Topo>
                    <Textinho>Meus hábitos</Textinho>
                    <Botao onClick={toggleCriarHabito}>+</Botao>
                </Topo>

                {showCriarHabito && <CriarHabito token={token} onAdd={handleAddHabito} />}

                {habits.map((habit, index) => (
                    <HabitoCriado token={token} habit={habit} key={index} />
                ))}
            </Container>
            <Rodape />
        </>
    );
}

export default Habitos;

const Container = styled.div`
    height: 100vh;
    padding-top: 87px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
    padding-bottom: 73px;
`;

const Topo = styled.div`
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
`;

const Textinho = styled.h2`
    font-family: "Lexend Deca", sans-serif;
    color: #126BA5;
    font-size: 22.98px;
    font-weight: 400;
    padding-left: 28px;
`;

const Botao = styled.button`
    width:40px;
    height: 35px;
    border-radius: 5px;
    background-color: #52B6FF;
    border: none;
    font-size: 27px;
    color: #fff;
    margin-right: 16px;
`;

const Texto = styled.p`
    height: 74px;
    padding-top: 15px;
    padding-left: 25px;
    padding-right: 25px;
    margin-left: 10px;
    font-size: 17.98px;
    font-weight: 400;
    font-family: "Lexend Deca", sans-serif;
    color: #666666;
`;