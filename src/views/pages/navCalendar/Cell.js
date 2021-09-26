import React, { useEffect } from 'react'
import styled from 'styled-components'


// background: ${props => props.select ? '#E61B23' : ''};


const Cell = ({ date, selectDate, selectMonth }) => {
    const StyledCell = styled.button`
        width: 14.24%;
        height: 80%;
        
    `;
    useEffect(() => {
        console.log(date)
        
    }, [date])
    return (
        <StyledCell style={{background : date.date === selectDate && date.month === selectMonth ? '#E61B23' : '000000'}}>{date.date}</StyledCell>
        // (date === selectDate) ? (<StyledCell select onClick={changeDate(date)}> {date} </StyledCell>)
        //     : (<StyledCell >{date} </StyledCell>)

    )
}

export default Cell