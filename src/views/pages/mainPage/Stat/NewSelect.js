import React, { useMemo, useState, useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../../../../store/selectSchedule";
const NewSelect = ({ color, setColor }) => {
  const schedule = useSelector((state) => state.schedule);
  const dispatch = useDispatch();
  const [options, setOptions] = useState([
    { value: "NOW", label: "NOW", color: schedule.tag.color },
    { value: "ocean", label: "ocean", color: "ocean" },
    { value: "blue", label: "blue", color: "blue" },
    { value: "yellow", label: "yellow", color: "yellow" },
    { value: "red", label: "red", color: "red" },
    { value: "orange", label: "orange", color: "orange" },
    { value: "black", label: "black", color: "black" },
    { value: "white", label: "white", color: "white" },
  ]);
  useEffect(() => {
    setOptions((data) => {
      data[0].color = schedule.tag.color;
      return data;
    });
  }, [schedule]);
  console.log(options[0].color);
  const customStyles = useMemo(
    () => ({
      option: (provided, state) => ({
        ...provided,
        border: "1px dotted black",
        color: "white",
        background: state.data.color,
        opacity: 1,
        padding: 20,
        width: 100,
      }),
      control: (provided) => ({
        ...provided,
        width: 100,
        background: "#e5e5e5",
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
        transition: "opacity 300ms",
      }),
      menu: (provided) => ({
        ...provided,
        width: 100,
        height: 50,
      }),
    }),
    []
  );

  return (
    <div>
      <Select
        options={options}
        defaultValue={options[0]}
        styles={customStyles}
        onChange={(e) => {
          dispatch(changeColor(e.color));
        }}
      />
    </div>
  );
};

export default NewSelect;
