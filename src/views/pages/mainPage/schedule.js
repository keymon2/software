import React, {useState} from 'react';
import styled from 'styled-components'
import Daytime from './Daytime'
const Header = styled.div`
    display: grid;
    grid-template-columns: 30px repeat(5,1fr) 12px;
 
    align-items: stretch;
`;
const HeaderItem = styled.div`
    width: 100%;
    border: 1px solid black;
    height: 70px;
    background-collor: #000000;
    text-align: center;
`;
const Body = styled.div`
    overflow: scroll;
    width: 100%;
    height: 92%;
`;
const Container = styled.div`
    width: 80%;
    height: 70vh;
`;

const RedLine = styled.div`
    position: relative;
    height: 4px;
    width: 100%;
    top:  ${props => props.top}px;
    color: red;
    background-color: red;
    
`;

const Schedule = () => {
    const [ X , setX] = useState(0);
    const [ Y, setY] = useState(0)
    const followLine = e => {
        setX(  e.clientX);
        setY(  e.screenY);
    }

    const week= ['화','수','목','금','토']
    return (
        <div>
        <div></div>
            <Container >
                <Header>
                    <div></div>
                    {week.map((week,index)=> (
                        <HeaderItem>
                        {week}
                        <div> 날짜(리덕스)</div>
                        </HeaderItem>
                    ))}
                    <div></div>
                </Header>
                <Body onClick={followLine}>
                    <RedLine top={Y}/>
                    <Daytime ></Daytime>
                </Body>
            </Container>
        </div>
    );
};

export default Schedule;