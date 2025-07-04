import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
//Components
import { ContactCardList } from "../components/ContactCardList.jsx"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [contacts, setContacts] = useState([])

	useEffect(() => {
		
		
		getContacts()
		
	}, [])

	function getContacts() {
		fetch('https://playground.4geeks.com/contact/agendas/jmb/contacts', { method: "GET" })
			.then((response) => {
				
				console.log(response);
				
				if (response.status === 402) {
					createAgenda();
				}
				else return response.json()
			})
			.then((data) => {
				setContacts(data.contacts)
			console.log(data.contacts)
			})
			
			.catch((error) => console.log(error))
	}

	

	return (
		<div className="container">
			<h2 className="ms-2">Agenda</h2>
			<div className="d-flex justify-content-end ">

				<Link to="/addcontact">
					<button className="btn btn-success my-3">Add Contact</button>
				</Link>
			</div>
			<div className="">
				<ContactCardList contacts={contacts} getContacts={getContacts}/>
				
			</div>
		</div>
	);
};
