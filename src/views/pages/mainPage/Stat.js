import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StatBox = styled.div`
  display: inline-block;
  position: absolute;
  left: 900px;
  top: ${(props) => props.top + 90 || 90}px;
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
const Stat = ({ scrollY }) => {
  const [Y, setY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setY(window.scrollY);
    });
  }, [window.scrollY]);
  return (
    <StatBox top={Y}>
      <Line></Line>
    </StatBox>
  );
};

export default Stat;
