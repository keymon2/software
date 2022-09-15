import { duration } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { select } from "../../../../store/selectSchedule";
import { object } from "prop-types";
import { getAll } from "../../../../controller/ContollerDay";
import { getTextColorByBackgroundColor } from "../../../../util";
const Schedule = styled.div`
  z-index: 2;
  position: absolute;
  width: 130px;
  border-radius: 5%;
  background-color: ${(props) => props.color || "#ffffff"};
  height: ${(props) => props.height || 0}px;
  left: ${(props) => props.left - 80 || 0}px;
  top: ${(props) => props.top + 72 || 0}px;
  overflow: hidden;
  border: 0.3px solid black;
  color: ${(props) => (props.textcolor < 127.5 ? "white" : "black")};
`;
const ScheduleBox = ({ List, today, data }) => {
  console.log("sadasd");
  let tempList = [];

  data.map((sch, index) => {
    let temp = {};
    console.log(sch.day);
    console.log(today);
    if (
      sch.day.year === today.year &&
      sch.day.month === today.month &&
      sch.day.date - today.date <= 2 &&
      sch.day.date - today.date >= -2
    ) {
      temp.height =
        (sch.during.end.h - sch.during.start.h) * 72 +
        (sch.during.end.m - sch.during.start.m) * 1.2;
      temp.left = (sch.day.date - today.date + 3) * 130;
      temp.top = parseInt(sch.during.start.h) * 72 + sch.during.start.m * 1.2;
      temp.color = sch.tag.color;
      temp.self = sch;
      temp.day = sch.day;
      temp.index = index;
      console.log(temp);
      tempList.push(temp);
    }
  });
  const dispatch = useDispatch();

  const clickHandler = (day) => {};
  return (
    <div style={{ zIndex: 2, position: "absolute" }}>
      {tempList.map((day, index) => (
        <Schedule
          height={day.height}
          left={day.left}
          top={day.top}
          color={day.color}
          textcolor={getTextColorByBackgroundColor(day.color)}
          onClick={() =>
            dispatch(
              select({
                index: day.index,
                select: true,
              })
            )
          }
        >
          <div style={{ marginLeft: 5 }}>{day.self.title}</div>
          <div style={{ marginLeft: 5 }}>
            {day.self.during.start.h}시{day.self.during.start.m}분
          </div>
        </Schedule>
      ))}
    </div>
  );
};

export default ScheduleBox;
