import { pieceType } from "./piece";
import Piece from "./piece";

interface BoardProps {
    pieces: pieceType[];
}

const Board = (props: BoardProps) => {
    return (
        <div className="board">
            {props.pieces.map(piece => {
                return (
                    <Piece
                        kind={piece.kind}
                        rotate={piece.rotate}
                    />
                );
            })}
        </div>
    );
}

export default Board;
