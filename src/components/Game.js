import React from 'react';
import { Board } from './Board';
import { calculateWinner } from '../helpers/calculate-winner';


export const Game = props => {

    const handleClick = (squareIndex, rowIndex, columnIndex) => {
        const historyCopy = moves.slice(0, gameStep + 1);
        const current = historyCopy[historyCopy.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[squareIndex]) {
            return;
        }

        squares[squareIndex] = xIsNext ? 'X' : 'O';
        const historyWithNewStep = historyCopy.concat([{ squares, lastMove: `(${rowIndex} X ${columnIndex})` }]);

        setGameStep(historyCopy.length);
        setMoves(historyWithNewStep);
        setXIsNext(!xIsNext);
    };

    const jumpTo = step => {
        setGameStep(step);
        setXIsNext((step % 2) === 0);
    };

    const [moves, setMoves] = React.useState([{ squares: Array(9).fill(null), lastMove: ''}]);
    const [gameStep, setGameStep] = React.useState(0);
    const [xIsNext, setXIsNext] = React.useState(true);

    const current = moves[gameStep];
    const winner = calculateWinner(current.squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;


    const renderMoves = () => {
        return (
            <ol>
                {moves.map((move, index) => (
                    <li key={index}>
                        <button type="button" className={index === gameStep ? 'selected' : ''} onClick={() => jumpTo(index)}>
                            {index ? `Go to move #${index} - ${move.lastMove}` : 'Go to game start'}
                        </button>
                    </li>
                ))}
            </ol>
        );
    };

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current.squares} onClick={(index, row, column) => handleClick(index, row, column)} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                {renderMoves()}
            </div>
        </div>
    );

};