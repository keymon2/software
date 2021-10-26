import { duration } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

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
`;
const ScheduleBox = ({ List, today, select }) => {
  let propsList = [];
  List.map((day, index) => {
    day.schedule.map((todo, index) => {
      let Stodo = {};
      Stodo.height =
        (todo.during.end.h - todo.during.start.h) * 72 +
        (todo.during.end.m - todo.during.start.m) * 1.2;
      Stodo.left = (day.day.date - today.date + 3) * 130;
      Stodo.top =
        parseInt(todo.during.start.h) * 72 + todo.during.start.m * 1.2;
      Stodo.color = todo.tag.color;
      Stodo.self = todo;

      propsList.push(Stodo);
    });
  });

  return (
    <div style={{ zIndex: 2, position: "absolute" }}>
      {propsList.map((day, index) => (
        <Schedule
          height={day.height}
          left={day.left}
          top={day.top}
          color={day.color}
        >
          {day.self.title}
          <div>
            {day.self.during.start.h}시{day.self.during.start.m}분
          </div>
        </Schedule>
      ))}
    </div>
  );
};

export default ScheduleBox;
