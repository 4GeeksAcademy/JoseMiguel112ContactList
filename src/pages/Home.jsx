import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

//Components
import { ContactCard } from "../components/ContactCard"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="container">
			<h2 className="ms-2">Agenda</h2>
			<div className="d-flex justify-content-end ">

			<Link to="/addcontact">
				<button className="btn btn-success my-3">Add Contact</button>
			</Link>
			</div>
		<div className="">

			<ContactCard />
			<ContactCard />
		</div>
		</div>
	);
}; 