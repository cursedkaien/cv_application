export default function CustomInput({
  labelText,
  forLabel,
  inputType = "text",
  placeHolder,
  value,
  onChange,
  disabled = false,
}) {
  return (
    <div className="input-group">
      <label htmlFor={forLabel}>{labelText}</label>
      <input
        type={inputType}
        id={forLabel}
        name={forLabel}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
