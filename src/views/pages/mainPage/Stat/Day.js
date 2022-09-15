import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updating } from "../../../../store/update";
import NewSelect from "./NewSelect";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";
import { dele, upda } from "../../../../controller/ContollerDay";
import { select } from "../../../../store/selectSchedule";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: "100%";
  height: 500px;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const Day = ({ schedule, data }) => {
  const [memo, setMemo] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.schedule);
  useEffect(() => {
    if (selected.select) {
      setMemo(data[selected.index].memo);
      setTitle(data[selected.index].title);
      setTag(data[selected.index].tag.title);
      setColor(data[selected.index].tag.color);
    }
  }, [data, selected.index, selected.select]);
  const del = async () => {
    const res = await dele({ _id: data[selected.index]._id });
    console.log(res);
    dispatch(updating(true));
    dispatch(select({ index: -1, select: false }));
  };
  const updat = async () => {
    const res = await upda({
      _id: data[selected.index]._id,
      tag: {
        title: tag,
        color: color,
      },
      title: title,
      memo: memo,
    });
    dispatch(updating(true));
    dispatch(select({ index: -1, select: false }));
  };
  const { year, monh, date } = useSelector((state) => state.day);
  if (selected.select === false) {
    return <div> 해당 스케줄 없음</div>;
  } else {
    return (
      <Container>
        <Tinput
          placeholder={data[selected.index].title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></Tinput>
        <Hinput
          placeholder={data[selected.index].tag.title}
          onChange={(e) => {
            setTag(e.target.value);
          }}
        ></Hinput>
        <NewSelect data={data} setColor={setColor}></NewSelect>
        <br></br>
        <span style={{ fontSize: 14, color: "#fff", lineHeight: 1.5 }}>
          {data[selected.index].day.month}월 {data[selected.index].day.date}
          일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {data[selected.index].during.start.h <= 12 ? "오전" : "오후"}
          {data[selected.index].during.start.h <= 12
            ? data[selected.index].during.start.h
            : data[selected.index].during.start.h - 12}
          :{data[selected.index].during.start.m}
          {data[selected.index].during.end.h <= 12 ? "오전" : "오후"}
          {data[selected.index].during.end.h <= 12
            ? data[selected.index].during.end.h
            : data[selected.index].during.end.h - 12}
          :{data[selected.index].during.end.m}
        </span>
        <div>메모</div>
        <EditorContainer>
          <textarea
            value={memo}
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "transparent",
              color: "#fff",
            }}
            onChange={(e) => setMemo(e.target.value)}
          />
        </EditorContainer>
        <div style={{ alignItems: "left" }}>
          <button
            class="btn btn-primary rounded-pill"
            style={{
              backgroundColor: "#6c7a89",
              color: "#fff",
              border: "1px solid black",
            }}
            onClick={() => updat()}
          >
            저장
          </button>
          <button
            class="btn btn-secondary rounded-pill"
            style={{
              backgroundColor: "#6c7a89",
              color: "#fff",
              border: "1px solid black",
            }}
            onClick={() => del()}
          >
            삭제
          </button>
        </div>
      </Container>
    );
  }
};
const Tinput = styled.input`
  background-color: transparent;
  border: 0px solid;
  height: 40px;
  width: 160px;
  font-size: 30;
  color: #fff;
`;
const Hinput = styled.input`
  background-color: transparent;
  border: 0px solid;
  height: 30px;
  font-size: 30;
  width: 160px;
  color: #000;
`;
export default Day;
