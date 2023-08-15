import Reactk, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { saveChanges } from "../store/contactBookSlice";
import { Link } from "react-router-dom";

const EditContact = () => {
    const oneContact = useSelector((state) => state.contacts.oneContact);
    const [contactName, setContactName] = useState(oneContact);
    const [contactNumber, setContactNumber] = useState(oneContact);
    const [contact, setContact] = useState(oneContact);

    const dispatch = useDispatch();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>Edit Contact</h1>
            <p>Name:</p>
            <input
                type="text"
                onChange={(e) =>
                    setContact({
                        ...contact,
                        contactName: e.target.value,
                    })
                }
                value={contact.contactName}
            />
            <p>Number:</p>
            <input
                type="number"
                onChange={(e) =>
                    setContact({
                        ...contact,
                        contactNumber: e.target.value,
                    })
                }
                value={contact.contactNumber}
            />
            <Link to="/">
                <Button
                    className="m-5"
                    onClick={() => dispatch(saveChanges(contact))}
                    variant="success"
                >
                    Save
                </Button>
            </Link>
        </div>
    );
};

export default EditContact;
