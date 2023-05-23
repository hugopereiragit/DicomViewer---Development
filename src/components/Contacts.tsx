import React from "react";
import { Link, useLocation   } from "react-router-dom";

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

const ContactsPage: React.FC = () => {
  const contacts: ContactInfo[] = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "(123) 456-7890",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "(555) 555-5555",
    },
    {
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: "(999) 999-9999",
    },
  ];

  return (
    <div className="ContactsPage">
      <div className="navBar">
      <Link to="/" className={location.pathname === "/" ? "activeNavButton navButton" : "navButton"}>
          Home
        </Link>
        <Link to="/LoadingImages" className={location.pathname === "/LoadingImages" ? "activeNavButton navButton" : "navButton"}>
          Load Dicom Images
        </Link>
        <Link to="/viewpage" className={location.pathname === "/viewpage" ? "activeNavButton navButton" : "navButton"}>
          Viewmodes
        </Link>
        <Link to="/Help" className={location.pathname === "/Help" ? "activeNavButton navButton" : "navButton"}>
          Help
        </Link>
        <Link to="/Contacts" className={location.pathname === "/Contacts" ? "activeNavButton navButton" : "navButton"}>
          Contact Info
        </Link>
      </div>
      <div className="mainContent">
      <h1 style={{ marginTop: "20px", display: "inline-block" }}>Contact Information</h1>
        <div className="contactCards">
          {contacts.map((contact) => (
            <div className="contactCard" key={contact.email}>
              <h2>{contact.name}</h2>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
