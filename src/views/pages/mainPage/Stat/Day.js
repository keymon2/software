import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NewSelect from "./NewSelect";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: "100%";
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

const Day = ({ schedule }) => {
  const [memo, setMemo] = useState("");
  const NewSchedule = useSelector((state) => state.schedule);
  const memoChange = (e) => {
    setMemo(e.target.value);
  };
  useEffect(() => {
    setMemo(NewSchedule.memo);
  }, [NewSchedule]);
  const { year, month, date } = useSelector((state) => state.day);
  if (NewSchedule.select === false) {
    return <div> 해당 스케줄 없음</div>;
  } else {
    return (
      <Container>
        <span>
          <AutoInput type="text" placeholder={NewSchedule.title}></AutoInput>
        </span>
        <NewSelect></NewSelect>
        <ul class="list-group">
          <li class="list-group-item">
            {NewSchedule.day.month}/{NewSchedule.day.date}
          </li>
          <li class="list-group-item">
            {NewSchedule.during.start.h}: {NewSchedule.during.start.m} -{" "}
            {NewSchedule.during.end.h}: {NewSchedule.during.end.m}
          </li>
        </ul>

        <br></br>

        <div>
          <h6>메모</h6>
          <EditorContainer>
            <textarea
              value={memo}
              style={{ height: "200px" }}
              onChnage={memoChange}
            />
          </EditorContainer>
        </div>

        <div style={{ alignItems: "left" }}>
          <button class="btn btn-primary rounded-pill" type="button">
            저장
          </button>
          <button class="btn btn-secondary rounded-pill" type="button">
            삭제
          </button>
        </div>
      </Container>
    );
  }
};

export default Day;
