import React, {useState} from 'react';
import styled from 'styled-components'
import Stat from './Stat'
import {useSelector} from 'react-redux'
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
const MonthLength = (month) => {
    const monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let monthTemp = 0
    if(month - 1 < 0){
        monthTemp = 11
    }
    else{
        monthTemp = month -1
    }
    return monthArray[monthTemp]
}

function Daytimedev(props) {
    const Hours = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    const Weak = [ '일','월', '화', '수', '목','금','토']
    const [ X , setX] = useState(0);
    const [ Y, setY] = useState(74);
    let dayListFive = [];
    console.log("DayTimedev++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    const {year,month,date} = useSelector(state=>state.day)
    for(let i = -2; i < 3; i++){
        if(date + i <= 0 && i < 0){ // 전달 
            if(month -1 <= 0){
                dayListFive.push({ // 전 년
                    year: year -1,
                    month: 12,
                    date: MonthLength(12)+ i
                })
            }else{
                dayListFive.push({ 
                    year: year ,
                    month: month - 1,
                    date: MonthLength(month - 1) + i
                })
            }
    }else if(date + i > MonthLength(month) && i > 0){ // 다음달 
            if(month + 1 > 12){
                dayListFive.push({ // 다음 년 
                    year: year + 1,
                    month: 1,
                    date: MonthLength(1)+ i
                })   
            }else{
                dayListFive.push({
                    year: year,
                    month: month + 1,
                    date: MonthLength(month + 1)+ i
                })     
            }
    }else{
        dayListFive.push({// 이번달 이번년도 날짜만 바뀌는 경우
            year: year ,
            month: month,
            date: date + i 
        })
    }}
    console.log(dayListFive)
    console.log(year,month,date)
    const followLine = e => {
        let component = e.target.parentElement.getBoundingClientRect().top
        //setX(  component  + window.pageYOffset );
        if(e.pageY - 91 <= 74)
            setY(74)
        else
            setY(  e.pageY - 91  );
        setX(e.pageX)
    } 
    return (
        <div>
        <RedLine top={Y}></RedLine>
            <Schedule onMouseMove={followLine} >
            <Line>
                <Time></Time>
                {dayListFive.map((day,index) =>(
                    <Cell>{Weak[new Date(`${day.year}-${day.month}-${day.date}`).getDay()]}</Cell>
                ))}  
            </Line>
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