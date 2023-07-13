import { Link } from "react-router-dom";
import "./Contacts.scss";

const Contacts = ({ contact }) => {
	return (
		<div className="contact-card">
			<h3>{contact.title}</h3>
			<p>{contact.description.substring(0, 100)}...</p>
			<Link className="view-full" to={`/contact/${contact._id}`}>
				View
			</Link>
		</div>
	);
};
export default Contacts;
