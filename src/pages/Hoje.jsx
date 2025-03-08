import styled from 'styled-components';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function Hoje() {

    return(

        <Container>
            <Data>Segunda, 17/05</Data>

            <Caixa>
                <div>
                <Habito>Ler 1 capitulo de livro</Habito>
                <Informacoes>Sequencia: 3 dias <br/>
                   Seu recorde: 5 dias</Informacoes>  
                </div>   
                <CheckBoxIcon sx={{fontSize:69, color: '#e7e7e7' }}/> 
            </Caixa>

            <Caixa>
                <div>
                <Habito>Estudar JS</Habito>
                <Informacoes>Sequencia: 3 dias <br/>
                   Seu recorde: 5 dias</Informacoes>
                </div>   
                <CheckBoxIcon sx={{fontSize:69, color: '#e7e7e7' }}/>
            </Caixa>

            <Caixa>
                <div>
                <Habito>Academia</Habito>
                <Informacoes>Sequencia: 3 dias <br/>
                   Seu recorde: 5 dias</Informacoes>
                </div>    
                <CheckBoxIcon sx={{fontSize:69, color: '#e7e7e7' }}/>
            </Caixa>
             

        </Container>
      
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
    
    
    
`

const Data = styled.h1`
    width:calc(100vw - 215px);
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
