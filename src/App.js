import React from "react";
import { useSelector } from "react-redux";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import EditContact from "./components/EditContact";

const App = () => {
    const oneContact = useSelector((state) => state.contacts.oneContact);
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ContactList />} />
                <Route path="/add" element={<AddContact />} />
                <Route path="/edit" element={oneContact && <EditContact />} />
            </Routes>
        </>
    );
};

export default App;
