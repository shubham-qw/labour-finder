


function Card(props) {
    const item = props.item;
    return (
        <div>
          <div className=" d-flex justify-content-center align-items-center mt-0 pt-0" style={{ "flexDirection": "column" }}>
            <img className="card-img-top imgShadow mb-0 pb-0" style={{ "maxHeight": "260px", "borderRadius": "7px" , maxWidth : "200px"}} src={item.photo} alt="photo"></img>
            <div className=" d-flex justify-content-center align-items-center mt-0 pt-0" style={{ "flexDirection": "column" }}>
                <p className="fs-5 mb-0 mt-1">{item.name}</p>
                <p className="fs-5 mt-0">{item.location}</p>
                </div>
            </div>
        </div>
    )
}


export default Card;