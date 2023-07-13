import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Contact = () => {
	const [individualContact, setIndividualContact] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const fetchContact = async () => {
			const response = await fetch(`http://localhost:3001/api/contact/${id}`);
			const json = await response.json();

			setIndividualContact(json);
		};

		fetchContact();
	}, []);

	return (
		<div className="contact-information">
			<Link to="/">Back</Link>
			<h2>{individualContact.title}</h2>
			<p>{individualContact.description}</p>
			<p>{individualContact.phone}</p>
			<p>{individualContact.email}</p>
			<p>{individualContact.address}</p>
		</div>
	);
};
export default Contact;
