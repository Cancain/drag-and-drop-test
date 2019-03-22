import React from 'react';
import Square from '../../Components/Square/Square';
import Knight from '../../Components/Knight/Knight';
import square from '../../Components/Square/Square';
import { wrap } from 'module';

function renderSquare(i, [knightX, knightY]) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    const black = (x + y) % 2 === 1;
    const isKnightHere = knightX === x && knightY === y;
    const piece = isKnightHere ? <Knight /> : null;

    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <Square
                black={black}
            >
                {piece}
            </Square>
        </div>
    )
}

const board = ({ knightPosition }) => {

    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition));
    }

    return (
        <div
            style={{
                width: '90vw',
                height: '90vh',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {squares}
        </div>
    )
}

export default board;
