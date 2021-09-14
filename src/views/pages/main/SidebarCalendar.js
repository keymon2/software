import React, { Component } from 'react'
import styled from "styled-components"
import Line from './Line'
const StyledCalendar = styled.body`
    width: 100%;
    height: 240px;
`;
const StyledText = styled.text`
    position: relative;
    font-size: 10%;
    padding: 4.7%;
`;
const StyledUpDown = styled.button`
    font-size: 1%;
    padding: 0.4% 0.4%;
    float: right;
    &:hover {
        background-color: lightblue;
    }
`;

export default class SidebarCalendar extends Component {
    constructor(props){
        super(props);
        this.state = { 
            year: new Date().getFullYear(),
            month: new Date().getMonth()+1,
            date: new Date().getDate(),
            monthArray: [31,28,31,30,31,30,31,31,30,31,30,31],
        }
    }
    dayCalculator = (year,month,day) => {
        var prevYear = year -1
        var dayNum = prevYear*365 + ( Math.ceil(prevYear/4) -  Math.ceil(prevYear/100) +  Math.ceil(prevYear/400))
        for (var a = 0; a < month-1; a++){
            dayNum += this.state.monthArray[a]
        }
        if( month >=3 && (year%4 && year%100!=0 || year%400 == 0)){
            dayNum++;
        }
        dayNum += day;
        return dayNum % 7
    }

    render() {
        
        return (
            <StyledCalendar>
                <year>
                    {this.state.year}-{this.state.month}-{this.state.date}
                </year>
                <StyledUpDown > down </StyledUpDown>
                <StyledUpDown>  up </StyledUpDown>
                <br></br>
                <br></br>
                    <StyledText>일</StyledText>
                    <StyledText>월</StyledText>
                    <StyledText>화</StyledText>
                    <StyledText>수</StyledText>
                    <StyledText>목</StyledText>
                    <StyledText>금</StyledText>
                    <StyledText>토</StyledText>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
            </StyledCalendar>
        )
    }
}
