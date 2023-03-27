
const Square = ({value, handlePlay}) => {
    const squareHandlePlay = () => {
        if (!value) {
            handlePlay()
        }
    }

    return <button
        onClick={squareHandlePlay}
        className="w-[60px] h-[60px] bg-[#14bdac] text-3xl text-white">
        {value}
    </button>
}

export default Square