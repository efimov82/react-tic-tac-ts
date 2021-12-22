import React from "react";
import { Square } from "./Suare";

type BoardProps = {
  squares: Record<number, string>;
  winnerLine: number[];
  onClick: (i: number) => void;
};

type BoardState = {
  squares: Record<number, string>;
  xIsNext: boolean;
};

export class Board extends React.Component<BoardProps, BoardState> {
  renderSquare(i: number) {
    let isHighlight = false;
    this.props.winnerLine.forEach((value) => {
      if (i === value) {
        isHighlight = true;
      }
    });

    return (
      <Square
        value={this.props.squares[i]}
        highlight={isHighlight}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
