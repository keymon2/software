import React, { useState } from "react";
import { useSelector } from "react-redux";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
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
const EditorContainer = styled.div`
  height: 200px;
`;


const Day = ({ schedule, ThisDay }) => {
  const [width, setWidth] = useState(2);
  const [memo, setMemo] = useState("");
  const [title, setTitle] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const memoChange = (e) => {
    setMemo(e.target.value);
  };
  const { year, month, date } = useSelector((state) => state.day);
  if (schedule === false) {
    return <div> 해당 스케줄 없음</div>;
  } else {
    return (
      <Container>
        <span>          
        <AutoInput
          type="text"
          width={width}
          placeholder={schedule.title}
          onChange={titleChange}
        ></AutoInput>
        </span>
        <ul class="list-group">
          <li class="list-group-item">       
              {month}/{date + ThisDay - 4}
          </li>
          <li class="list-group-item">
              {schedule.during.start.h}: {schedule.during.start.m} -{" "}
              {schedule.during.end.h}: {schedule.during.end.m}
          </li>
        </ul>

        
      <br></br>
      
        <div>
          <h6>메모</h6>
          <EditorContainer>
            <textarea style={{ height: "200px" }} onChnage={memoChange}>
              {memo}
            </textarea>
          </EditorContainer>
        </div>

        <div style={{ alignItems: "left" }}>
          <button class="btn btn-primary rounded-pill" type="button">저장</button>
          <button class="btn btn-secondary rounded-pill" type="button">삭제</button>
        </div>
      </Container>
    );
  }
};

export default Day;
