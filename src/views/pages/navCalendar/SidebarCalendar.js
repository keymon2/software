import React, { Component } from 'react'
import styled from "styled-components"
import Line from './Line'
import {connect} from 'react-redux'
import {changeDay} from '../../../store/selectDay'
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


export class SidebarCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            date: new Date().getDate(),
            monthArray: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            weekArr: ["일", "월", "화", "수", "목", "금", "토"],
        }
    }
    componentDidMount(){
        const {year,month,date} = this.props
        console.log("sidebar")
        console.log(year,month,date)
        this.setState({
            year: year,
            month: month,
            date: date
        })
    }
    MonthLength = (month) => {
        let monthTemp = 0
        if(month - 1 < 0){
            monthTemp = 11
        }
        else{
            monthTemp = month -1
        }
        return this.state.monthArray[monthTemp]
    }

    dayList = () => {
        let daylist = [];
        let dayOfWeek = new Date(`${this.state.year}-${this.state.month}-01`).getDay()
        console.log(dayOfWeek)
        console.log(`${daylist}-${this.state.month}-01`)
        let monthLength = this.MonthLength(this.state.month)
        if (dayOfWeek === 0) {
            daylist.push(1)
        }
        else {
            daylist.push(this.MonthLength(this.state.month - 1) - dayOfWeek + 1)

        }


        for (let i = 8 - dayOfWeek; i <= monthLength; i += 7) {
            daylist.push(i)
        }

        return daylist
    }
    up = () => {

        if (this.state.month === 12) {
           
            this.setState({
                year: this.state.year + 1,
                month: 1
            })
        } else {
          
            this.setState({
                year: this.state.year,
                month: this.state.month + 1
            })
        }
    }
    down = () => {

        if (this.state.month === 1) {

            this.setState({
                year: this.state.year - 1,
                month: 12
            })
        } else {
        
            this.setState({
                year: this.state.year ,
                month: this.state.month -1,
            })
        }
    }

    render() {
        let DayList = this.dayList()

        const {year,month,date} = this.props
        const {changeDay} = this.props
        return (
            <StyledCalendar>
                <year>
                    {this.state.year}-{this.state.month}
                </year>
                <StyledUpDown onClick={this.down} > down </StyledUpDown>
                <StyledUpDown onClick={this.up}>  up </StyledUpDown>
                <br></br>
                <br></br>
                <div>
                    {this.state.weekArr.map((week, index) => (
                        <StyledText>{week}</StyledText>
                    ))}
                </div>
                <div>
                    {DayList.map((weekStartDay, index) => (
                        <Line
                            start={weekStartDay} 
                            endOfThisMonth={this.MonthLength(this.state.month)}
                            endOfLastMonth={this.MonthLength(this.state.month - 1)}
                            index={index}
                            selectDate={this.state.date}
                            selectMonth={this.state.month}
                            selectYear={this.state.year}
                            changeday = {changeDay}
                        />
                    ))}
                </div>
            </StyledCalendar>
        )
    }
}

const mapStateToProps = (state) => ({
    year: state.day.year,
    month: state.day.month,
    date:state.day.date
})

const mapDispatchToProps = (dispatch) => ({
    changeDay: (payload) => dispatch(changeDay(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(SidebarCalendar)