import css from "./ContactList.module.css";
import Contact from "./Contact";
import { number } from "yup";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css.container}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ContactList;
