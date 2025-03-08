import perfil from '../assets/perfil.jpg';
import styled from 'styled-components';

function Navbar() {
    return (
        <Container>
            <Titulo>TrackIt</Titulo>
            <Foto src={perfil} alt="logo" />
        </Container>

    );
}

export default Navbar;


const Container = styled.div`
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;    
    justify-content: space-between;
    background-color:#126BA5;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.164);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

` ;

const Titulo = styled.h1`
    font-family: 'Playball', cursive;
    font-size: 39px;
    color: #fff;
    padding-left: 10px;

`



const Foto = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    margin-right: 18px;
`;