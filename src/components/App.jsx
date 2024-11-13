import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./ContactList";
import { nanoid } from "nanoid";
import SearchBox from "./SearchBox";
import ContactForm from "./ContactForm";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = window.localStorage.getItem("contacts");
    if (storedContacts) setContacts(JSON.parse(storedContacts));
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      window.localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  //wyświetlanie kontaktów na podstawie filtra:
  const filteredContacts = contacts
    .filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      const lastWordA = a.name.split(" ").pop();
      const lastWordB = b.name.split(" ").pop();
      return lastWordA.localeCompare(lastWordB);
    });

  //usuwanie kontaktu:
  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  //dodawanie kontaktu:
  const handleAddContact = (name, number) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: nanoid(), name, number },
    ]);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onFilter={setFilter} />

      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </>
  );
};

export default App;
