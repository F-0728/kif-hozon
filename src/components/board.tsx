import { useState } from "react";
import { pieceType, pieceName } from "./piece";

const Board = () => {
  const [clicked, setClicked] = useState<pieceType | null>(null);

  const [pieces, setPieces] = useState<pieceType[]>([
    { dan: 1, suji: 9, kind: 3, rotate: true },
    { dan: 1, suji: 8, kind: 5, rotate: true },
    { dan: 1, suji: 7, kind: 7, rotate: true },
    { dan: 1, suji: 6, kind: 9, rotate: true },
    { dan: 1, suji: 5, kind: 14, rotate: true },
    { dan: 1, suji: 4, kind: 9, rotate: true },
    { dan: 1, suji: 3, kind: 7, rotate: true },
    { dan: 1, suji: 2, kind: 5, rotate: true },
    { dan: 1, suji: 1, kind: 3, rotate: true },
    { dan: 2, suji: 9, kind: 0, rotate: true },
    { dan: 2, suji: 8, kind: 12, rotate: true },
    { dan: 2, suji: 7, kind: 0, rotate: true },
    { dan: 2, suji: 6, kind: 0, rotate: true },
    { dan: 2, suji: 5, kind: 0, rotate: true },
    { dan: 2, suji: 4, kind: 0, rotate: true },
    { dan: 2, suji: 3, kind: 0, rotate: true },
    { dan: 2, suji: 2, kind: 10, rotate: true },
    { dan: 2, suji: 1, kind: 0, rotate: true },
    { dan: 3, suji: 9, kind: 1, rotate: true },
    { dan: 3, suji: 8, kind: 1, rotate: true },
    { dan: 3, suji: 7, kind: 1, rotate: true },
    { dan: 3, suji: 6, kind: 1, rotate: true },
    { dan: 3, suji: 5, kind: 1, rotate: true },
    { dan: 3, suji: 4, kind: 1, rotate: true },
    { dan: 3, suji: 3, kind: 1, rotate: true },
    { dan: 3, suji: 2, kind: 1, rotate: true },
    { dan: 3, suji: 1, kind: 1, rotate: true },
    { dan: 4, suji: 9, kind: 0, rotate: true },
    { dan: 4, suji: 8, kind: 0, rotate: true },
    { dan: 4, suji: 7, kind: 0, rotate: true },
    { dan: 4, suji: 6, kind: 0, rotate: true },
    { dan: 4, suji: 5, kind: 0, rotate: true },
    { dan: 4, suji: 4, kind: 0, rotate: true },
    { dan: 4, suji: 3, kind: 0, rotate: true },
    { dan: 4, suji: 2, kind: 0, rotate: true },
    { dan: 4, suji: 1, kind: 0, rotate: true },
    { dan: 5, suji: 9, kind: 0, rotate: true },
    { dan: 5, suji: 8, kind: 0, rotate: true },
    { dan: 5, suji: 7, kind: 0, rotate: true },
    { dan: 5, suji: 6, kind: 0, rotate: true },
    { dan: 5, suji: 5, kind: 0, rotate: true },
    { dan: 5, suji: 4, kind: 0, rotate: true },
    { dan: 5, suji: 3, kind: 0, rotate: true },
    { dan: 5, suji: 2, kind: 0, rotate: true },
    { dan: 5, suji: 1, kind: 0, rotate: true },
    { dan: 6, suji: 9, kind: 0, rotate: true },
    { dan: 6, suji: 8, kind: 0, rotate: true },
    { dan: 6, suji: 7, kind: 0, rotate: true },
    { dan: 6, suji: 6, kind: 0, rotate: true },
    { dan: 6, suji: 5, kind: 0, rotate: true },
    { dan: 6, suji: 4, kind: 0, rotate: true },
    { dan: 6, suji: 3, kind: 0, rotate: true },
    { dan: 6, suji: 2, kind: 0, rotate: true },
    { dan: 6, suji: 1, kind: 0, rotate: true },
    { dan: 7, suji: 9, kind: 1, rotate: false },
    { dan: 7, suji: 8, kind: 1, rotate: false },
    { dan: 7, suji: 7, kind: 1, rotate: false },
    { dan: 7, suji: 6, kind: 1, rotate: false },
    { dan: 7, suji: 5, kind: 1, rotate: false },
    { dan: 7, suji: 4, kind: 1, rotate: false },
    { dan: 7, suji: 3, kind: 1, rotate: false },
    { dan: 7, suji: 2, kind: 1, rotate: false },
    { dan: 7, suji: 1, kind: 1, rotate: false },
    { dan: 8, suji: 9, kind: 0, rotate: false },
    { dan: 8, suji: 8, kind: 10, rotate: false },
    { dan: 8, suji: 7, kind: 0, rotate: false },
    { dan: 8, suji: 6, kind: 0, rotate: false },
    { dan: 8, suji: 5, kind: 0, rotate: false },
    { dan: 8, suji: 4, kind: 0, rotate: false },
    { dan: 8, suji: 3, kind: 0, rotate: false },
    { dan: 8, suji: 2, kind: 12, rotate: false },
    { dan: 8, suji: 1, kind: 0, rotate: false },
    { dan: 9, suji: 9, kind: 3, rotate: false },
    { dan: 9, suji: 8, kind: 5, rotate: false },
    { dan: 9, suji: 7, kind: 7, rotate: false },
    { dan: 9, suji: 6, kind: 9, rotate: false },
    { dan: 9, suji: 5, kind: 14, rotate: false },
    { dan: 9, suji: 4, kind: 9, rotate: false },
    { dan: 9, suji: 3, kind: 7, rotate: false },
    { dan: 9, suji: 2, kind: 5, rotate: false },
    { dan: 9, suji: 1, kind: 3, rotate: false },
  ]);
  const [smochigoma, setSMochigoma] = useState<pieceType[]>([]);
  const [gmochigoma, setGMochigoma] = useState<pieceType[]>([]);

  console.log(smochigoma);
  console.log(gmochigoma);

  return (
    <>
      <div className="komadai-gote">
        {gmochigoma?.map(koma => {
          return (
            <button
              key={gmochigoma.indexOf(koma)}
              style={{ transform: "rotateZ(180deg)" }}
              onClick={() => {
                setClicked(koma);
              }}>
              {pieceName[koma.kind]}
            </button>)
        })}
      </div >
      <div className="board">
        {pieces.map((piece) => {
          return (
            <button
              key={piece.suji * 10 + piece.dan}
              //disabled={piece.kind === 0 ? true : false}
              className="piece"
              style={{ transform: piece.rotate ? "rotateZ(180deg)" : "rotateZ(0deg)" }}
              onClick={() => {
                if (clicked) {
                  // pieceが空白である場合
                  if (piece.kind === 0) {
                    if (clicked.dan > 9 && clicked.suji > 9) { // 打つ
                      setPieces(pieces.map((p) => {
                        if (p.dan === piece.dan && p.suji === piece.suji) {
                          setClicked({ dan: piece.dan, suji: piece.suji, kind: clicked.kind, rotate: clicked.rotate });
                          return clicked;
                        } else {
                          return p;
                        }
                      }));
                      if (clicked.rotate) {
                        setGMochigoma(gmochigoma.filter((p) => p.kind !== clicked.kind));
                      } else {
                        setSMochigoma(smochigoma.filter((p) => p.kind !== clicked.kind));
                      }
                    } else { // 指す
                      setPieces(pieces.map((p) => {
                        if (p.dan === clicked.dan && p.suji === clicked.suji) {
                          return piece;
                        } else if (p.dan === piece.dan && p.suji === piece.suji) {
                          return clicked;
                        } else {
                          return p;
                        }
                      }));
                    }
                  }
                  // 自分の駒をクリックした場合
                  else if (piece.rotate === clicked.rotate) {
                    setPieces(pieces);
                  }
                  // 相手の駒をクリックした場合
                  else {
                    setPieces(pieces.map((p) => {
                      if (p.dan === clicked.dan && p.suji === clicked.suji) {
                        return { dan: piece.dan, suji: piece.suji, kind: 0, rotate: false };
                      } else if (p.dan === piece.dan && p.suji === piece.suji) {
                        if (piece.rotate === true) {
                          setSMochigoma([...smochigoma, { dan: 10, suji: 10, kind: piece.kind, rotate: false }]);
                        } else {
                          setGMochigoma([...gmochigoma, { dan: 20, suji: 20, kind: piece.kind, rotate: true }]);
                        }
                        return clicked;
                      }
                      else {
                        return p;
                      }
                    }));
                  }
                  setClicked(null);
                } else {
                  setClicked(piece);
                }
              }}>
              {pieceName[piece.kind]}
            </button >
          );
        })}
      </div>
      <div className="komadai-sente">
        {smochigoma?.map(koma => {
          return (
            <button
              key={smochigoma.indexOf(koma)}
              onClick={() => {
                setClicked(koma);
              }}>
              {pieceName[koma.kind]}
            </button>)
        })}
      </div >
    </>
  );
};
export default Board;

