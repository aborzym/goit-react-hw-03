import css from "./ContactForm.module.css";
import btn from "./button.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
const nameFieldId = nanoid();
const numberFieldId = nanoid();

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values.name, values.number);
    actions.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };

  //schemat walidacji
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Field required"),
    number: Yup.string()
      .min(3, "Number is too short!")
      .max(50, "Number is too long!")
      .required("Field required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.container}>
        <div className={css.group}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            name="name"
            component="div"
            className={css.errorMessage}
          />
        </div>
        <div className={css.group}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={css.errorMessage}
          />
        </div>
        <button className={`${btn.btn} ${css.btn}`} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
