import rigoImageUrl from "../assets/img/rigo-baby.jpg";


export const ContactCard = () => {


    return (
        <div className="Card container-fluid d-flex">
            <div>
                <img src={rigoImageUrl} />
            </div>
            <div>
                <ul class="list-group border-0">
                    <li class="list-group-item border-0">Cras justo odio</li>
                    <li class="list-group-item border-0">Dapibus ac facilisis in</li>
                    <li class="list-group-item border-0">Vestibulum at eros</li>
                    <li class="list-group-item border-0">Vestibulum at eros</li>
                </ul>
            </div>
            
                <p>

                    <i className="bi bi-pencil"></i>
                    </p>
            
        </div>
    )
}