import { useState, useEffect } from "react";
import Contacts from "../components/Contacts";
import "./Home.scss";

const Home = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		const fetchContacts = async () => {
			const response = await fetch("http://localhost:3001/api/contacts");
			const json = await response.json();

			// console.log(json);
			setContacts(json);
		};

		fetchContacts();
	}, []);

	return <div className="contact-list">{contacts && contacts.map((contact) => <Contacts contact={contact} key={contact._id} />)}</div>;
};
export default Home;
