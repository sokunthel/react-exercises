import { useState } from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calcContainer">
      <Display value={input} />
      <ButtonPanel onClickButton={handleButtonClick} />
    </div>
  );
}
