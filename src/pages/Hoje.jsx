import styled from 'styled-components';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Navbar from '../components/Navbar';
import Rodape from '../components/Rodape';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Hoje({ token }) {

    const [habits, setHabits] = useState ([])
    const navigate = useNavigate


    useEffect(() => {
        if(!token) {
            navigate("/")
        }

    }, [])

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

    if (habits.length === 0) {
        return (
            <>
                <Navbar /> 
                <Container>
                    <Data>Segunda, 17/05</Data>
                    <Texto>Você não tem nenhum hábito cadastrado hoje.</Texto>
                </Container>
                <Rodape />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <Container>
                <Data>Segunda, 17/05</Data>

                {habits.map((habit, index) => (

                    <Caixa key={index}>
                        <div>
                            <Habito>{habit.name}</Habito>
                            <Informacoes>Sequencia: {habit.currentSequence} dias <br />
                                Seu recorde: {habit.highestSequence} dias</Informacoes>
                        </div>
                        <CheckBoxIcon sx={{ fontSize: 69, color: '#e7e7e7', padding:'10px 10px 0px 0px' }}
                        />
                    </Caixa>

                ))}

            </Container>
            <Rodape />
        </>

    )
}

export default Hoje;

const Container = styled.div`
    padding-top: 87px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    background-color: #F2F2F2;
`


const Caixa = styled.div`
    width:calc(100vw - 34px);
    height:94px;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 15px;
    display: flex;
    justify-content:space-between;
    
    
    
`

const Data = styled.h1`
    width:calc(100vw - 203px);
    height:29px;
    font-family: "Lexend Deca", sans-serif;
    color: #126BA5;
    font-size: 22.98px;
    font-weight: 400;
    margin-bottom: 10px;
    margin-right: 178px;

`
const Habito = styled.p`
    font-family: "Lexend Deca", sans-serif;
    color: #666666;
    font-size: 20px;
    font-weight: 400;
    padding-top: 10px;
    padding-left:15px ;
    padding-bottom: 10px;  
`

const Informacoes = styled.p`
    width: 146px;
    height: 32px;
    font-family: "Lexend Deca", sans-serif;
    color: #666666;
    font-size: 13px;
    font-weight: 400;
    padding-left: 15px;
    
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
`;
