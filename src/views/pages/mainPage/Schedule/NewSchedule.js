import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { select } from "../../../../store/selectSchedule";
const Schedule = styled.div`
  z-index: 2;
  position: absolute;
  width: 130px;
  border-radius: 5%;
  background-color: ${(props) => props.color || "#000000"};
  height: ${(props) => props.height || 0}px;
  left: ${(props) => props.left || 0}px;
  top: ${(props) => props.top || 0}px;
  overflow: hidden;
`;
const NewSchedule = ({ startS, start, end, y, setSchedule, today }) => {
  const [NewDay, setNewDay] = useState({
    thisday: 0,
    tag: {
      color: "#3399ff",
      title: "새로운 TAG",
    },
    during: {
      start: {
        h: 0,
        m: 0,
      },
      end: {
        h: 0,
        m: 0,
      },
    },
    title: "새로운 스케줄",
    memo: "test2",
  });
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  let height = 18;
  let top = 0;
  let ctop = 0;
  let cend = 0;
  if (start - end <= 0) {
    height = end - start;
    top = start;
    ctop = start;
    cend = end;
  } else {
    height = start - end;
    top = end;
    cend = start;
    ctop = end;
  }
  if (height < 18) {
    height = 18;
    if (start - end <= 0) {
      cend = top + 18;
    } else {
      ctop = cend - 18;
    }
  }
  let left = 130 * parseInt(y / 132);
  useEffect(() => {
    setNewDay((day) => {
      if (startS) setActive(true);
      let h = parseInt((ctop - 172) / 72);
      let m = parseInt((ctop - h * 72 - 172) / 1.2);
      let endh = parseInt((cend - 172) / 72);
      let endm = parseInt((cend - endh * 72 - 172) / 1.2);
      day.during.start.h = h;
      day.during.start.m = m;
      day.during.end.h = endh;
      day.during.end.m = endm;
      day.thisday = parseInt(y / 130);
      return day;
    });
    if (active === true && startS === false) {
      setSchedule(NewDay);
      dispatch(
        select({
          select: true,
          tag: {
            title: "기본",
            color: "#3499ff",
          },
          day: {
            year: today.year,
            month: today.month,
            date: today.date + NewDay.thisday,
          },
          during: NewDay.during,
          title: "새로운 이벤트",
          memo: "",
        })
      );
    } else setSchedule(false);
    console.log(NewDay);
  }, [startS]);

  return (
    <div style={{ zIndex: 2, position: "absolute" }}>
      <Schedule
        left={left - 210}
        top={top - 100}
        height={height}
        color={NewDay.tag.color}
        onClick={() => setSchedule(NewDay)}
      >
        {NewDay.title}
        <div>
          {NewDay.during.start.h}시 {NewDay.during.start.m}분
        </div>
      </Schedule>
    </div>
  );
};

export default NewSchedule;
