import rigoImageUrl from "../assets/img/rigo-baby.jpg";


export const ContactCard = () => {


    return (
        <div className="Card container-fluid d-flex w-75 me-3 border">
            <div>
                <img className="rounded-circle" src={rigoImageUrl} />
            </div>
            <div>
                <ul className="list-group border-0">
                    <li className="list-group-item border-0">Cras justo odio</li>
                    <li className="list-group-item border-0">Dapibus ac facilisis in</li>
                    <li className="list-group-item border-0">Vestibulum at eros</li>
                    <li className="list-group-item border-0">Vestibulum at eros</li>
                </ul>
            </div>
            <div className="d-flex justify-content-end w-100 ">

                <i className="fa-solid fa-pen"></i>
            </div>
            
        </div>
    )
}