type SquareProps = {
  value: string;
  highlight: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function Square(props: SquareProps) {
  const className = props.highlight ? "highlight" : "square";

  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
