import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Stat from "./Stat/Stat";
import { useSelector, useDispatch } from "react-redux";
import ScheduleBox from "./Schedule/ScheduleBox";
import { Data } from "./scheduleData";
import NewSchedule from "./Schedule/NewSchedule";
import { select } from "../../../store/selectSchedule";
import { getAll } from "../../../controller/ContollerDay";
function Daytimedev(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function asd() {
      const data = await getAll();
      setData(data.data);
    }
    asd();
  }, []);
  const Hours = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  const PHours = [
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
  ];
  const Weak = ["일", "월", "화", "수", "목", "금", "토"];
  const [X, setX] = useState(271);
  const [Y, setY] = useState(74);
  const [start, setStart] = useState(false);
  const { year, month, date } = useSelector((state) => state.day);
  const [addY, setAddY] = useState(0);
  const [addX, setAddX] = useState(0);
  const [endY, setEndY] = useState(0);
  const daylist = useCallback(() => {
    let dayListFive = [];
    for (let i = -2; i < 3; i++) {
      if (date + i <= 0 && i < 0) {
        // 전달
        if (month - 1 <= 0) {
          dayListFive.push({
            // 전 년
            year: year - 1,
            month: 12,
            date: MonthLength(12) + i + 1,
          });
        } else {
          dayListFive.push({
            year: year,
            month: month - 1,
            date: MonthLength(month - 1) + i + 1,
          });
        }
      } else if (date + i > MonthLength(month) && i > 0) {
        // 다음달
        if (month + 1 > 12) {
          dayListFive.push({
            // 다음 년
            year: year + 1,
            month: 1,
            date: date + i - MonthLength(1),
          });
        } else {
          dayListFive.push({
            year: year,
            month: month + 1,
            date: date + i - MonthLength(month),
          });
        }
      } else {
        dayListFive.push({
          // 이번달 이번년도 날짜만 바뀌는 경우
          year: year,
          month: month,
          date: date + i,
        });
      }
    }
    return dayListFive;
  }, [year, month, date]);

  const followLine = useCallback((e) => {
    if (e.pageY - 91 <= 74) setY(74);
    else setY(e.pageY - 91);
    setX(e.pageX);
  }, []);
  const clickStart = useCallback((e) => {
    if (e.pageY <= 172) return;
    if (e.pageX <= 270 || e.pageX >= 920) return;
    setStart(true);
    setAddY(e.pageY);
    setEndY(e.pageY);
    setAddX(e.pageX);
  }, []);
  const clicking = useCallback(
    (e) => {
      if (start === false) return;
      if (e.pageY <= 172) {
        setEndY(172);
      }
      if (e.pageY >= 1899) {
        setEndY(1899);
      }
      setEndY(e.pageY);
    },
    [start]
  );
  const clickEnd = useCallback((e) => {
    setStart(false);
  }, []);
  let today = new Date();
  let hours = today.getHours();
  let min = today.getMinutes();
  const dayListFive = daylist();
  return (
    <div style={{ zIndex: 1 }} onMouseMove={clicking} onMouseUp={clickEnd}>
      <RedLine top={hours * 72 + min * 1.2 + 72}>
        {hours}:{min}
      </RedLine>
      <NewSchedule
        start={addY}
        end={endY}
        y={addX}
        startS={start}
        today={{
          year: year,
          month: month,
          date: date,
        }}
      />
      <ScheduleBox
        List={Data}
        data={data}
        today={{
          year: year,
          month: month,
          date: date,
        }}
      />
      <Schedule onClick={followLine} onMouseDown={clickStart}>
        <Line>
          <Time></Time>
          {dayListFive.map((day, index) => (
            <Cell>
              {Weak[new Date(`${day.year}-${day.month}-${day.date}`).getDay()]}
              {day.date}
            </Cell>
          ))}
        </Line>
        {Hours.map((hours, index) => (
          <Line>
            <Time>{hours} Am</Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </Line>
        ))}
        {PHours.map((hours, index) => (
          <Line>
            <Time>{hours} pm</Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </Line>
        ))}
      </Schedule>
      <Stat List={Data} Y={Y} X={X} />
    </div>
  );
}
const Schedule = styled.table`
  display: inline-block;
  width: 900px;
  z-index: 1;
`;
const Cell = styled.th`
  border: 1px solid black;
  width: 130px;
  height: 72px;
`;
const Time = styled.th`
  width: 50px;
  height: 50px;
`;
const Line = styled.tr``;
const RedLine = styled.div`
  position: relative;
  height: 2px;
  width: 690px;
  left: 1%;
  top: ${(props) => props.top}px;
  color: red;
  background-color: red;
`;
const MonthLength = (month) => {
  const monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let monthTemp = 0;
  if (month - 1 < 0) {
    monthTemp = 11;
  } else {
    monthTemp = month - 1;
  }
  return monthArray[monthTemp];
};
export default Daytimedev;
