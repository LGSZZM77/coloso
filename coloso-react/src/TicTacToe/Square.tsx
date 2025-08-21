export type SquareValue = "O" | "X" | "-";
interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps) => {
  let className = "outline";
  switch (value) {
    case "O":
      className = "";
      break;
    case "X":
      className = "secondary";
      break;
  }
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
