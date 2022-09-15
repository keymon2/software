import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tag from "./Tag";
import Day from "./Day";
const StatBox = styled.div`
  display: inline-block;
  position: absolute;
  left: 950px;
  top: ${(props) => props.top + 98 || 98}px;
  border: 5px;
  width: 210px;
  height: 700px;
`;
const Line = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1px;
  margin-bottom: 10px;
  height: 2px;
  width: 93%;
  color: red;
  background-color: #ebedef;
`;
const Stat = ({ List, X, Y, setTag, schedule, ThisDay, data }) => {
  const [pageY, setPageY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setPageY(window.scrollY);
    });
  }, []);
  let temp = [];
  List.map((day, index) => {
    temp.push(day.tag);
  });
  const tagList = [...new Set(temp.map(JSON.stringify))].map(JSON.parse);
  console.log(ThisDay);
  return (
    <StatBox top={pageY}>
      {tagList.map((data, index) => (
        <Tag data={data} key={index} setTag={setTag}></Tag>
      ))}
      <Line></Line>
      <Day schedule={schedule} ThisDay={ThisDay} data={data}></Day>
    </StatBox>
  );
};

export default Stat;
