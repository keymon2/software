import React, { useMemo } from "react";
import Select from "react-select";

const NewSelect = () => {
  const options = useMemo(
    () => [
      { value: "ocean", label: "ocean", color: "ocean" },
      { value: "blue", label: "blue", color: "blue" },
      { value: "yellow", label: "yellow", color: "yellow" },
      { value: "red", label: "red", color: "red" },
      { value: "orange", label: "orange", color: "orange" },
      { value: "black", label: "black", color: "black" },
      { value: "white", label: "white", color: "white" },
    ],
    []
  );
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
        defaultValue={options[1]}
        styles={customStyles}
      />
    </div>
  );
};

export default NewSelect;
