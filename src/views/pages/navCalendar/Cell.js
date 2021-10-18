import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { changeDay } from "../../../store/selectDay";
// background: ${props => props.select ? '#E61B23' : ''};

const Cell = ({ date, selectDate, selectMonth }) => {
  const StyledCell = styled.div`
    border: 0.5px solid black;
    text-align: center;
    flex: 1;
  `;
  const dispatch = useDispatch();
  const day = useSelector((state) => state.day);
  console.log("ASDAAAAAAAAAAA");
  console.log(day);
  const warpChangeday = (date) => {
    let Day = {};
    if (date.month <= 0) {
      Day.year = day.year - 1;
      Day.month = 12;
      Day.date = date.date;
    } else if (date.month > 12) {
      Day.year = day.year + 1;
      Day.month = 1;
      Day.date = date.date;
    } else {
      Day.year = day.year;
      Day.month = date.month;
      Day.date = date.date;
    }

    return dispatch(changeDay(Day));
  };
  return (
    <StyledCell
      style={{
        background:
          date.date === day.date && date.month === day.month
            ? "#E61B23"
            : "000000",
      }}
      onClick={() => warpChangeday(date)}
    >
      {date.date}
    </StyledCell>
  );
};

export default Cell;
