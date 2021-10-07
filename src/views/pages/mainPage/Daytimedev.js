import React, {useState} from 'react';
import styled from 'styled-components'
import Stat from './Stat'

const Container = styled.div`
    display: inline-grid;
    grid-template-rows: 1fr,1fr;
    row-gap: 10px;
`;
const Schedule = styled.table`
    display: inline-block;
    width: 650px;
    
`;
const Cell = styled.th`
    border: 1px solid black;
    width: 130px;
    height: 72px;
`;
const Time = styled.th`
    width: 50px;
    height: 50px;
`;
const Line = styled.tr`

`;
const RedLine = styled.div`
    position: relative;
    height: 4px;
    width: 30%;
    top:  ${props => props.top}px;
    color: red;
    background-color: red;
    
`;


function Daytimedev(props) {
    const Hours = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    const [ X , setX] = useState(0);
    const [ Y, setY] = useState(0)
    const followLine = e => {
        let component = e.target.parentElement.getBoundingClientRect().top
        //setX(  component  + window.pageYOffset );
        setY(  e.pageY - 91  );
        setX(e.pageX)
    }
    const followLineWheel = e => {
        setY( Y + e.deltaY);
    }   
    return (
        <div>
        <RedLine top={Y}></RedLine>
            <Schedule onMouseMove={followLine} >
                {Hours.map((hours, index) => (
                    <Line>
                        <Time>{hours} Am</Time>
                        <Cell>{Y}</Cell>
                        <Cell>{X}</Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                    </Line>
                ))}
                {Hours.map((hours, index) => (
                    <Line>
                        <Time>{hours} pm</Time>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                    </Line>
                ))}
            </Schedule>
            <Stat></Stat>

        </div>
    );
}

export default Daytimedev;