import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { select } from "../../../../store/selectSchedule";
import { update } from "../../../../controller/ContollerDay";
import { updating } from "../../../../store/update";
import { idText } from "typescript";
const Schedule = styled.div`
  z-index: 2;
  position: absolute;
  width: 130px;
  border-radius: 5%;
  background-color: ${(props) => props.color || "#3499ff"};
  height: ${(props) => props.height || 0}px;
  left: ${(props) => props.left || 0}px;
  top: ${(props) => props.top || 0}px;
  overflow: hidden;
  border: 1px solid;
`;
const NewSchedule = ({ startS, start, end, y, today, data, setData }) => {
  // const [schedule, setSchedule] = useState({
  //   _id: -1,
  //   index: -1,
  //   select: false,
  //   tag: {
  //     title: "기본",
  //     color: "#3499ff",
  //   },
  //   day: {
  //     year: 0,
  //     month: 0,
  //     date: 0,
  //   },
  //   during: {
  //     start: {
  //       h: 0,
  //       m: 0,
  //     },
  //     end: {
  //       h: 0,
  //       m: 0,
  //     },
  //   },
  //   title: "",
  //   memo: "",
  // });
  const [index, setIndex] = useState(-123);
  const [active, setActive] = useState(false);
  const upda = useSelector((state) => state.update).update;
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
  let h = parseInt((ctop - 172) / 72);
  let m = parseInt((ctop - h * 72 - 172) / 1.2);
  let endh = parseInt((cend - 172) / 72);
  let endm = parseInt((cend - endh * 72 - 172) / 1.2);
  let left = 130 * parseInt(y / 132);

  useEffect(() => {
    const func = async () => {
      await update({
        sch: {
          day: {
            year: today.year,
            month: today.month,
            date: today.date + parseInt(y / 130) - 4,
          },
          tag: {
            title: "기본",
            color: "#3499ff",
          },
          during: {
            start: {
              h: h,
              m: m,
            },
            end: {
              h: endh,
              m: endm,
            },
          },
          title: "새로운 이벤트",
          memo: "",
        },
      });
      dispatch(updating(true));
    };
    if (startS === true) {
      setActive(true);
    }
    if (startS === false && active === true) {
      func();
    }
  }, [active, startS]);
  if (upda === true) {
    height = 0;
  }
  return (
    <div style={{ zIndex: 2, position: "absolute", backgroundColor: "#000" }}>
      <Schedule
        left={left - 210}
        top={top - 100}
        height={height}
        color={"#3499ff"}
      >
        {"새로운 이벤트"}
        <div>
          {h}시 {m}분
        </div>
      </Schedule>
    </div>
  );
};

export default NewSchedule;
