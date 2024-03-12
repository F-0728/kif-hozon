export interface pieceType {
  // 駒の位置
  suji: number;
  dan: number;

  // 駒の種類
  kind: number;

  // 駒が反転しているか(上向き: false, 下向き: true)
  rotate: boolean;
}

export const pieceName = ["", "歩", "と", "香", "杏", "桂", "圭", "銀", "全", "金", "角", "馬", "飛", "竜", "玉"];
