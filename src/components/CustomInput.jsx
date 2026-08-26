import { useState } from "react";

export default function CustomInput({
  inputType,
  labelText,
  placeHolder,
  forLabel,
}) {
  const [value, setValue] = useState("");

  return (
    <>
      <label htmlFor={forLabel}>{labelText}</label>
      <input
        type={inputType}
        id={forLabel}
        value={value}
        placeholder={placeHolder}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
}
