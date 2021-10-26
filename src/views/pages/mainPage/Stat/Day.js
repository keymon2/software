import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
`;
const AutoInput = styled.input`
  background-color: #e5e5e5;
`;
const Button = styled.button`
  width: 50px;
  height: 30px;
  font-size: 10px;
  text-align: top;
`;
const Day = ({ schedule, ThisDay }) => {
  const [width, setWidth] = useState(2);
  const { year, month, date } = useSelector((state) => state.day);
  if (schedule === false) {
    return <div> 해당 스케줄 없음</div>;
  } else {
    return (
      <Container>
        <span style={{ width: width }}>
          <AutoInput
            type="text"
            width={width}
            placeholder={schedule.title}
            onChange={(e) => setWidth(e.target.value.length)}
          ></AutoInput>
        </span>

        <div>
          <span>
            {month}월{date + ThisDay - 4}일
          </span>
          <span style={{ textAlign: "right", float: "right" }}>
            {schedule.during.start.h}시 {schedule.during.start.m}분 ~{" "}
            {schedule.during.end.h}시 {schedule.during.end.m}분
          </span>
        </div>
        <br></br>
        <div>메모</div>
        <input style={{ height: 200 }}></input>
        <div style={{ alignItems: "left" }}>
          <Button>저장</Button>
          <Button>삭제</Button>
        </div>
      </Container>
    );
  }
};

export default Day;
