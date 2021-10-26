import React, { useState } from "react";
import styled from "styled-components";
const Line = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => (!props.ho ? "#e5e5e5" : "#DC8B39")};
`;
const CheckBox = styled.img`
  background-color: ${(props) => props.color || "#e5e5e5"};

  border-radius: 20%;
`;
const Text = styled.div`
  flex: 9;
  margin-bottom: auto;
  margin-top: auto;
  margin-left: 10%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 5;
`;
const checkimg = require("./check2.png").default;
const Tag = ({ data, key, setTag }) => {
  const [hover, setHover] = useState(false);

  return (
    <Line ho={hover}>
      <div
        style={{ flex: 1 }}
        onClick={() => {
          setHover(!hover);
          if (hover !== false) {
            setTag((prev) => {
              return prev
                .map(JSON.stringify)
                .filter((word) => word !== JSON.stringify(data))
                .map(JSON.parse);
            });
          } else {
            setTag((state) => {
              return [...state, data];
            });
          }
        }}
      >
        <CheckBox
          src={checkimg}
          alt="empty"
          width={20}
          height={20}
          color={data.color}
        ></CheckBox>
      </div>
      <Text>{data.title}</Text>
    </Line>
  );
};

export default Tag;
