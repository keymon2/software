import React, {useState} from 'react';
import styled from 'styled-components'
import Daytime from './Daytime'
import Daytimedev from './Daytimedev'
const Header = styled.div`
    display: grid;
    grid-template-columns: 30px repeat(5,1fr) 12px;
    left: 10000px;
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


const Schedule = () => {
    
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
                <Body >
                    <Daytimedev ></Daytimedev>
                </Body>
            </Container>
        </div>
    );
};

export default Schedule;