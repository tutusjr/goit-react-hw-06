import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filterName = useSelector((state) => state.filter.search);
  
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      {filteredContacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </div>
  );
}
