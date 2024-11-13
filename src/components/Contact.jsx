import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import btn from "./button.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.contact}>
      <div className={css.contactInfo}>
        <p className={css.contactName}>
          <span className={css.contactIcon}>
            <IoPerson />
          </span>
          {name}
        </p>
        <p className={css.contactNumber}>
          <span className={css.contactIcon}>
            <FaPhone />
          </span>
          {number}
        </p>
      </div>
      <button className={btn.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
