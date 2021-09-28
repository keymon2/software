import React, {useState} from 'react';
import styled from 'styled-components'


const Container = styled.div`
    
    display: grid;
    grid-template-rows: repeat(26,50px)

`;
const LineItem = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 30px repeat(5,1fr)
`;
const Item = styled.div`
    border 1px solid black;
`;


const Daytime = () => {
    const Hours = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
 
    return (
        <div>
        <Container >
            {Hours.map((hour,index)=>(
                <LineItem>
                    {hour}AM
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                </LineItem>
            ))}
            {Hours.map((hour,index)=>(
                <LineItem>
                    {hour}PM
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                </LineItem>
            ))}
        </Container>
        </div>
    );
};

export default Daytime;