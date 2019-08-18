import React from 'react';
import { Square } from './Square';


export const Board = props => {
    const renderSquare = ({index, row, column}) => <Square key={index} value={props.squares[index]} onClick={() => props.onClick(index, row, column)} />;

    return (
        <div>
            <div className="status">{status}</div>

            {[0, 3, 6].map((rowFactor, rIndex) => (
                <div key={rowFactor} className="board-row">
                    {[0, 1, 2].map((columnFactor, cIndex) => renderSquare({ index: rowFactor + columnFactor, row: rIndex, column: cIndex }))}
                </div>
            ))}

        </div>
    );
};