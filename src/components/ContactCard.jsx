import rigoImageUrl from "../assets/img/rigo-baby.jpg";


export const ContactCard = () => {


    return (
        <div className="Card container-fluid d-flex mx-3 px-3 border">
            <div className="w-25">
                <img className="img-fluid rounded-circle min-vw-25" src={rigoImageUrl} />
            </div>
            <div className="w-75 text-start">
                <ul className="list-group border-0">
                    <li className="list-group-item border-0">Cras justo odio</li>
                    <li className="list-group-item border-0">Dapibus ac facilisis in</li>
                    <li className="list-group-item border-0">Vestibulum at eros</li>
                    <li className="list-group-item border-0">Vestibulum at eros</li>
                </ul>
            </div>
            <div className="d-flex justify-content-end w-auto px-2">

                <i className="fa-solid fa-pen mx-2 pt-2"></i>
                <i class="fa-solid fa-trash mx-2 pt-2"></i>
            </div>

        </div>
    )
}