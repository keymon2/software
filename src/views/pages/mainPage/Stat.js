import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Data from "./scheduleData";
const StatBox = styled.div`
  display: inline-block;
  position: absolute;
  left: 950px;
  top: ${(props) => props.top + 98 || 98}px;
  border: 1px solid black;
  width: 300px;
  height: 700px;
`;
const Line = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 2px;
  width: 93%;
  color: red;
  background-color: #000000;
`;
const Stat = ({ List, now }) => {
  const [Y, setY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setY(window.scrollY);
    });
  }, []);
  console.log("nownow");
  console.log(now);
  return (
    <StatBox top={Y}>
      <div style={{ flexDirection: "row" }}>
        <div
          style={{
            display: "inline-block",
            backgroundColor: "yellow",
            border: "1px solid",
            width: "10px",
            height: "10px",
          }}
        ></div>
        공부
      </div>
      <div style={{ flexDirection: "row" }}>
        <div
          style={{
            display: "inline-block",
            backgroundColor: "red",
            border: "1px solid",
            width: "10px",
            height: "10px",
          }}
        ></div>
        직장
      </div>
      <div style={{ flexDirection: "row" }}>
        <div
          style={{
            display: "inline-block",
            backgroundColor: "blue",
            border: "1px solid",
            width: "10px",
            height: "10px",
          }}
        ></div>
        취미
      </div>
      <Line></Line>
      <div>2021-10-12</div>
      <div> 책읽기 </div>
      <div> 운동가기 </div>
      <Line></Line>
      <div> 운동가기</div>
      <div> 스쿼트 10세트 </div>
      <div> 밴치프레스 10세트 </div>
      <div> 풀업 10세트 </div>
    </StatBox>
  );
};

export default Stat;
