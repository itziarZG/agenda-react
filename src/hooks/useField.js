import { useState } from "react";

export default function useField(inputProps) {
  const [value, setValue] = useState("");
  const onChange = ({ target }) => {
    setValue(target.value);
  };
  return {
    ...inputProps,
    value,
    onChange,
  };
}
