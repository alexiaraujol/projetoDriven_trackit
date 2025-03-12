import styled from 'styled-components';

function HabitoCriado({habits}) {
    const diasDaSemana = [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        
        <>
        
            <Habitocontainer >
                <Texto>{habits.name}</Texto>
                {diasDaSemana.map((dia, index) => (
                    <DiadaSemana key={index} type="button">{dia}</DiadaSemana>
                ))}
            </Habitocontainer>
       
        </>
        
    );
}

export default HabitoCriado;

const Habitocontainer = styled.div`

    width:340px;
    height:91px;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;

    background-color: #fff;



`

const Texto = styled.p`
  
    font-family: "Lexend Deca", sans-serif;
    color: #666666;
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;  
`

const DiadaSemana = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-bottom: 6px;
    font-size: 20px;
    margin-right: 5px;
    font-family: "Lexend Deca", sans-serif;
    color: #D4D4D4;
    background-color: #fff;
   
`



