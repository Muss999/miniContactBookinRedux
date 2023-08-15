import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const ContactList = () => {
    const contacts = useSelector((state) => state.contacts.contacts);

    return (
        <div className="d-flex justify-content-center w-100 mt-5">
            <ul className="d-flex flex-wrap w-90 justify-content-center">
                {contacts.map((contact) => (
                    <ContactItem key={contact.id} contact={contact} />
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
