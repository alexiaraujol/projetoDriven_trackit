
import styled from 'styled-components';
import CriarHabito from '../components/CriarHabito';
import HabitoCriado from '../components/HabitoCriado';
import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import { useEffect, useState, } from 'react';
import axios from 'axios';

function Habitos({ token }) {

    const [habits, setHabits] = useState(null)

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get(URL, config)
            .then(res => setHabits(res.data))
            .catch(err => console.log(err.response.data))
    }, [])


    if (habits === null) {
        return (
            <>
                <Navbar />
                <Container>
                    <Topo>
                        <Textinho>Meus hábitos</Textinho>
                        <Botao>+</Botao>
                    </Topo>
                    <Texto>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </Texto>
                </Container>
                <Rodape />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <Container>
                <Topo>
                    <Textinho>Meus hábitos</Textinho>
                    <Botao>+</Botao>
                </Topo>

                {/* <CriarHabito /> */}

                {habits.map((habits, index) => (

                    <HabitoCriado habits={habits} key={index} />

                ))}



            </Container>
            <Rodape />
        </>
    );
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
    font-size: 17.98px;
    font-weight: 400;
    font-family: "Lexend Deca", sans-serif;
    color: #666666;
`;

