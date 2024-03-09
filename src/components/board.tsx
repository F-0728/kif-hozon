const Board = () => {
    const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="board">
            {rows.map((row) => {
                return (
                    <div key={row} className="row">
                        {cols.map((col) => {
                            return (
                                // ここをcellではなくマス目(gridコンポーネント)に変えます
                                // <Grid />
                                <div key={col} className="cell"></div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Board;
