import { useState } from "react"

const Board = () => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState("X")
    const [history, setHistory] = useState([]) // lưu trữ lịch sử các lượt đánh
    const [canUndo, setCanUndo] = useState(false)
    const [winningSquares, setWinningSquares] = useState([])
    const handlePlay = (position) => {

        const newGame = game.map((g, index) => {
            if (position === index) {
                return player
            }
            return g
        })

        const newHistory = [...history, game]
        if (newHistory.length > 1) {
            newHistory.shift()
        }

        setGame(newGame)
        setPlayer(player === "X" ? "O" : "X")
        setHistory(newHistory)
        setCanUndo(true)
    }
    const handleUndo = () => {
        // không thể undo nếu không có lịch sử hoặc đã undo lượt đánh trước đó
        if (!canUndo || history.length === 0) {
            return
        }

        const lastHistory = history[history.length - 1]
        setGame(lastHistory)
        setPlayer(player === "X" ? "O" : "X")
        setHistory(history.slice(0, history.length - 1)) // loại bỏ lượt đánh cuối cùng khỏi lịch sử
        setCanUndo(false) // không thể undo sau khi undo lượt đánh trước đó
    }
    const listWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    const checkWinner = () => {
        for (let i = 0; i < listWin.length; i++) {
            const [p1, p2, p3] = listWin[i]
            if (game[p1] === game[p2] && game[p2] === game[p3]) {
                // set người chiến thắng
                return game[p1]
            }
        }
        return null
    }
    const handleResetGame = () => {
        setGame([null, null, null, null, null, null, null, null, null])
        setPlayer(true)

    }
    const Square = ({ value, handlePlay }) => {
        const squareHandlePlay = () => {
            if (!value) {
                handlePlay()
            }
        }

        return <button
            onClick={squareHandlePlay}
            className={`w-[60px] h-[60px] text-3xl bg-[#14bdac] text-white`}
        >
            {value}
        </button>
    }
    return <>
        <div>
            <h2 className="text-orange-400">Winner is: {checkWinner()}</h2>
            <button onClick={handleResetGame} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Reset game</button>
            <button onClick={handleUndo} className="mx-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">undo game</button>
        </div>
        <div className="grid grid-cols-3 gap-2 pr-10 pl-10">
            <Square value={game[0]} handlePlay={() => handlePlay(0)} />
            <Square value={game[1]} handlePlay={() => handlePlay(1)} />
            <Square value={game[2]} handlePlay={() => handlePlay(2)} />
            <Square value={game[3]} handlePlay={() => handlePlay(3)} />
            <Square value={game[4]} handlePlay={() => handlePlay(4)} />
            <Square value={game[5]} handlePlay={() => handlePlay(5)} />
            <Square value={game[6]} handlePlay={() => handlePlay(6)} />
            <Square value={game[7]} handlePlay={() => handlePlay(7)} />
            <Square value={game[8]} handlePlay={() => handlePlay(8)} />
        </div>
    </>
}

export default Board;