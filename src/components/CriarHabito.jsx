import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

function CriarHabito({ token }) {

    const diasDaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <Adicionarcontainer>
            <form>
                <Input
                    type="text"
                    placeholder="nome do hábito"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    disabled={loading}
                />
                <div>
                    {diasDaSemana.map((dia, index) => (
                        <DiadaSemana
                            key={index}
                            type="button"
                            selecionado={diasSelecionados.includes(index)}
                            onClick={() => handleDiaClick(index)}
                            disabled={loading}
                            aria-label={`Dia ${dia}`}
                        >
                            {dia}
                        </DiadaSemana>
                    ))}
                </div>

                <Botoes>
                    <Cancelar type="button" disabled={loading}>Cancelar</Cancelar>
                    <Salvar type="submit" disabled={loading}>
                        {loading ? <ThreeDots
                            visible={true}
                            height="13"
                            width="51"
                            color="#fff"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /> : "Salvar"}
                    </Salvar>
                </Botoes>
            </form>
        </Adicionarcontainer>
    );
}


export default CriarHabito;

const Adicionarcontainer = styled.div`
    width: 340px;
    height: 180px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

const Input = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-bottom: 6px;
    padding-left: 11px;
    font-size: 20px;
    font-family: "Lexend Deca", sans-serif;
    color: #666666;
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

const Cancelar = styled.button`
    border: none;
    background-color: #fff;
    color: #52B6FF;
    font-size: 16px;
    font-family: "Lexend Deca", sans-serif; 
`;

const Salvar = styled.button`
    width: 84px;
    height: 35px;
    border: none;
    background-color: #52B6FF;
    color: #fff;
    font-size: 16px;
    font-family: "Lexend Deca", sans-serif;
    padding: 10px;
    border-radius: 4.64px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 9px;
`;

const Botoes = styled.div`
    width: 303px;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 35px;
`;