
import Board from "./components/board"

// Props: Là một đối tượng, để truyền dữ liệu từ cha xuống con, nhưng không có chiều ngược lại
// Props: Immutable >< mutable
// State: Trạng thái (bộ nhớ) của component - Cho phép component thay đổi khi tương tác
const App = () => {
    return <div className="flex justify-center items-center h-[100vh]">
        <Board>
        </Board>
    </div>
}

export default App