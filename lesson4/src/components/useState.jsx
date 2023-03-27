import { useState } from "react";
const Dem = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1)
        console.log(count);
    }
    return <div>
        <div>count: {count}</div>
        <button
            onClick={increaseCount}
        >+1 count</button>
    </div>
}
export default Dem