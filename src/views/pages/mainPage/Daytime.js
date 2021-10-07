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
const RedLine = styled.div`
    position: relative;
    height: 4px;
    width: 100%;
    top:  ${props => props.top}px;
    color: red;
    background-color: red;
`;


const Daytime = () => {
    const Hours = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    const [ X , setX] = useState(0);
    const [ Y, setY] = useState(0);

    const followLine = e => {
        let rect = e.target.getBoundingClientRect();
        setX(  e.clientX );
        setY(  e.pageY + rect.top  );
    }

    return (
        <div>
        <Container onMouseMove={followLine} >
            <RedLine top={Y}></RedLine>
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