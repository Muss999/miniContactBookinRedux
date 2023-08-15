import React from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { deleteContact, getOneContact } from "../store/contactBookSlice";
import { Link } from "react-router-dom";

const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();
    return (
        <Card
            className="m-5 text-center"
            bg="dark"
            data-bs-theme="dark"
            border="primary"
            style={{ width: "18rem" }}
        >
            <Card.Header>Contact</Card.Header>
            <Card.Body>
                <Card.Title>Name: {contact.contactName}</Card.Title>
                <Card.Text>Number: {contact.contactNumber}</Card.Text>
                <Link to="/edit">
                    <Button
                        className="w-50 m-2"
                        variant="success"
                        onClick={() => dispatch(getOneContact(contact.id))}
                    >
                        Edit
                    </Button>
                </Link>
                <Button
                    className="w-50 m-2"
                    variant="danger"
                    onClick={() => dispatch(deleteContact(contact.id))}
                >
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ContactItem;
