import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Cell from './Cell'
const StyledLine = styled.body`
    width: 100%;
    height: 12%;
    left: 0px;
    background: #FCDDEC;
`;
const StyledText = styled.text`
    position: relative;
    padding: 4.4%;
`;
export default class Line extends Component {
    state = {
        tempDate: 0
    }
    weekDayNum() {
        const { start, endOfLastMonth, endOfThisMonth, index,selectMonth } = this.props
        let weektemp = []
        if (index == 0) {                 // 첫 번째 주에서 저번달 월말과 이 번달 시작일 계산
            let date = start
            for (let i = 0; i < 7; i++) {
                if (date <= endOfLastMonth) {
                    weektemp.push({
                        date: date,
                        month: selectMonth - 1 
                    })
                    date += 1
                } else {
                    weektemp.push({
                        date:date - endOfLastMonth,
                        month: selectMonth
                    })
                    date += 1
                }
            }
        } else {
            let date = start                //나머지는 그냥 더하고 마지막 주 에서 다음달 시작일 계산
            for (let i = 0; i < 7; i++) {
                if (date <= endOfThisMonth) {
                    weektemp.push({
                        date: date,
                        month: selectMonth
                    })
                    date += 1
                } else {
                    weektemp.push({
                        date: date - endOfThisMonth,
                        month: selectMonth + 1
                    })
                    date += 1
                }
            }
        }
        return weektemp
    }
    changeTempDate = (date) => {
        this.props.changeDate(date)
    }
    render() {
        let weekDayNum = this.weekDayNum()
        const { selectDate, selectMonth,changeday} = this.props

        return (
            <StyledLine>
                {weekDayNum.map((date, index) => (
                    <Cell
                        date={date}
                        selectDate={selectDate}

                        selectMonth={selectMonth}
                        changday ={changeday}
                    />
                ))}
            </StyledLine>
        )
    }
}
