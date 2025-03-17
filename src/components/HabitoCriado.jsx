import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function HabitoCriado({ token }) {
    const [habitos, setHabitos] = useState([]);
    const diasDaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get(URL, config)
            .then(res => setHabitos(res.data))
            .catch(err => console.log(err.response.data));
    }, [token]);

    return (
        <>
            {habitos.map((hab) => (
                <Habitocontainer key={hab.id}>
                    <Texto>{hab.name}</Texto>
                    <DiasContainer>
                        {diasDaSemana.map((dia, index) => (
                            <DiadaSemana
                                key={index}
                                selecionado={hab.days.includes(index)}
                            >
                                {dia}
                            </DiadaSemana>
                        ))}
                    </DiasContainer>
                </Habitocontainer>
            ))}
        </>
    );
}

export default HabitoCriado;

const Habitocontainer = styled.div`
    width: 340px;
    height: 91px;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;
    background-color: #fff;
`;

const Texto = styled.p`
    font-family: "Lexend Deca", sans-serif;
    color: #666666;
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;  
`;

const DiasContainer = styled.div`
    display: flex;
`;

const DiadaSemana = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-bottom: 6px;
    font-size: 20px;
    margin-right: 5px;
    font-family: "Lexend Deca", sans-serif;
    color: ${({ selecionado }) => (selecionado ? '#fff' : '#D4D4D4')};
    background-color: ${({ selecionado }) => (selecionado ? '#CFCFCF' : '#fff')};
`;



