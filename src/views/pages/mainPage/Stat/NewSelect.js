import React, { useMemo, useState, useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { getTextColorByBackgroundColor } from "../../../../util";
const NewSelect = ({ color, setColor, data }) => {
  const schedule = useSelector((state) => state.schedule);
  const [options, setOptions] = useState([
    {
      value: "NOW",
      label: "NOW",
      color: data[schedule.index].tag.color,
    },
    { value: "Brown", label: "Brown", color: "#A52A2A" },
    { value: "Salmon", label: "Salmon", color: "#FA8072" },
    { value: "GreenYellow", label: "GreenYellow", color: "#ADFF2F" },
    { value: "DarkGreen", label: "DarkGreen", color: "#006400" },
    { value: "Turquoise", label: "Turquoise", color: "#40E0D0" },
    { value: "DarkSlateGray", label: "DarkSlateGray", color: "#2F4F4F" },
    { value: "Azure", label: "Azure", color: "#F0FFFF" },
  ]);
  useEffect(() => {
    setOptions((x) => {
      x[0].color = data[schedule.index].tag.color;
      return x;
    });
  }, [data, schedule]);
  console.log(options[0].color);
  const customStyles = useMemo(
    () => ({
      option: (provided, state) => ({
        ...provided,
        border: "1px solid black",
        color:
          getTextColorByBackgroundColor(state.data.color) < 127.5
            ? "white"
            : "black",
        background: state.data.color,
        opacity: 20,
        padding: 0,
        width: 200,
        height: 40,
      }),
      control: (provided) => ({
        ...provided,
        width: 200,
        background: "#6c7a89",
      }),
      singleValue: (provided, state) => ({
        ...provided,
        background: state.data.color,
        color:
          getTextColorByBackgroundColor(state.data.color) < 127.5
            ? "white"
            : "black",
        transition: "opacity 300ms",
        float: "left",
        width: 200,
      }),
      menu: (provided) => ({
        ...provided,
        width: 200,
        height: 20,
      }),
    }),
    []
  );

  return (
    <Select
      options={options}
      defaultValue={options[0]}
      styles={customStyles}
      onChange={(e) => setColor(e.color)}
    />
  );
};

export default NewSelect;
