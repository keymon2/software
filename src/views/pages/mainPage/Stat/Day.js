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
  const [title, setTitle] = useState("");
  const [TagColor, setTagColor] = useState("white");
  const [TagTitle, setTagTitle] = useState("없음");
  useEffect(() => {
    if (schedule !== false) {
      setTagColor(schedule.tag.color);
      setTagTitle(schedule.tag.title);
      setTitle(schedule.title);
      setMemo(schedule.memo);
    }
  }, []);

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
            placeholder={schedule.title}
            onChange={titleChange}
          ></AutoInput>
        </span>
        <NewSelect></NewSelect>
        <ul class="list-group">
          <li class="list-group-item">
            {month}/{date + schedule.thisday - 4}
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
