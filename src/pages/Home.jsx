import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

//Components
import { ContactCard } from "../components/ContactCard"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center m-5 p-3">
			<div className="d-flex justify-content-end">

			<Link to="/demo">
				<button className="btn btn-success">Add Contact</button>
			</Link>
			</div>
		
			<ContactCard />
		</div>
	);
}; 