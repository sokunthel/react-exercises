export default function ButtonPanel({ onClickButton }) {
  const buttons = [
    "7",
    "8",
    "9",
    "%",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];
  return (
    <div className="buttonPanel">
      {buttons.map((btn) => (
        <button key={btn} onClick={() => onClickButton(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
}
