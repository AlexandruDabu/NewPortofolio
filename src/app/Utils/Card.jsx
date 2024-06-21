function Card({item}) {
    return (
        <div className="card">
            <div className="iconDoing">
                {item.image}
            </div>
            <div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
        </div>
    )
}

export default Card;