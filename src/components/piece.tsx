export interface pieceType {
    // 駒の種類
    kind: number;

    // 駒が反転しているか(上向き: false, 下向き: true)
    rotate: boolean;
}

const pieceName = ["", "歩", "香", "桂", "銀", "金", "角", "飛", "玉", "と", "杏", "圭", "全", "馬", "竜"];

const Piece = (props: pieceType) => {
    return <button
        disabled={props.kind === 0 ? true : false}
        className="piece"
        style={{ transform: props.rotate ? "rotateZ(180deg)" : "rotateZ(0deg)" }}>
        {pieceName[props.kind]}
    </button>
}

export default Piece;
