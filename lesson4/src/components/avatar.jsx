const Avatar = (props) => {
    let {name, user, showInfo} = props
    name = "Vu Anh Tu"
    return <div className="flex items-center">
        <h2>{name}</h2>
        <img className="border-2 border-red-600 rounded-[50%]" src="https://picsum.photos/id/237/50/50" alt="" />
        <p>Project manager</p>
        <button onClick={showInfo} className="bg-pink-500">show info</button>
    </div>
}

export default Avatar