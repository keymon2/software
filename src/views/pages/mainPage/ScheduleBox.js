import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { cilDataTransferUp } from "@coreui/icons";

const Schedule = styled.div`
  z-index: 2;
  position: absolute;
  width: 130px;
  border-radius: 5%;
  background-color: red;
  height: ${(props) => props.height || 0}px;
  /*background-color: ${(props) => props.color}; */
  background-color: "red";
  left: ${(props) => props.left - 80 || 0}px;
  top: ${(props) => props.top + 72 || 0}px;
`;
const ScheduleBox = ({ List, today }) => {
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
      propsList.push(Stodo);
    });
  });
  console.log(propsList);
  return (
    <div style={{ zIndex: 2, position: "absolute" }}>
      {propsList.map((day, index) => (
        <Schedule height={day.height} left={day.left} top={day.top}></Schedule>
      ))}
      asdasdasdasd
    </div>
  );
};

export default ScheduleBox;
