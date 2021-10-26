import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tag from "./Tag";
import Day from "./Day";
const StatBox = styled.div`
  display: inline-block;
  position: absolute;
  left: 950px;
  top: ${(props) => props.top + 98 || 98}px;
  border: 1px solid black;
  width: 200px;
  height: 700px;
`;
const Line = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 2px;
  width: 93%;
  color: red;
  background-color: #000000;
`;
const Stat = ({ List, X, Y, setTag, schedule, ThisDay }) => {
  const [pageY, setPageY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setPageY(window.scrollY);
    });
  }, []);
  let temp = [];
  List.map((day, index) => {
    day.schedule.map((data, index) => {
      temp.push(data.tag);
    });
  });
  const tagList = [...new Set(temp.map(JSON.stringify))].map(JSON.parse);
  console.log(ThisDay);
  return (
    <StatBox top={pageY}>
      {tagList.map((data, index) => (
        <Tag data={data} key={index} setTag={setTag}></Tag>
      ))}
      <Line></Line>
      <Day schedule={schedule} ThisDay={ThisDay}></Day>
    </StatBox>
  );
};

export default Stat;