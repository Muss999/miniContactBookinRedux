import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../store/contactBookSlice";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const AddContact = () => {
    const [contactName, setContactName] = useState("");
    const [contactNumber, setContactNumber] = useState(0);
    const dispatch = useDispatch();

    function createContact() {
        if (!contactName.trim()) return alert("Inputs are empty");

        let newContact = {
            id: Date.now(),
            contactName: contactName,
            contactNumber: Number(contactNumber),
        };
        dispatch(addContact(newContact));
        setContactName("");
        setContactNumber(0);
        console.log(newContact);
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Create Contact</h1>
            <h2>Name:</h2>
            <input
                type="text"
                placeholder="Name"
                onChange={(e) => setContactName(e.target.value)}
                value={contactName}
            />
            <h2>Number:</h2>
            <input
                type="number"
                placeholder="Number"
                onChange={(e) => setContactNumber(e.target.value)}
                value={contactNumber}
            />
            <Link to="/">
                <Button
                    className="m-5"
                    variant="success"
                    onClick={createContact}
                >
                    Create
                </Button>
            </Link>
        </div>
    );
};

export default AddContact;
