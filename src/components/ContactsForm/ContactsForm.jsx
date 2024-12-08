import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactSlice";

export default function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed")
      .required("Name is required"),
    number: Yup.number()
      .transform((value, originalValue) =>
        originalValue.trim() === "" ? null : value
      )
      .nullable()
      .required("Number is required")
      .positive("Number must be positive")
      .integer("Number must be an integer"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.trim().toLowerCase() ===
          values.name.trim().toLowerCase() && contact.number === values.number
    );

    if (isDuplicate) {
      alert("This contact already exists!");
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, handleChange }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="number">Number</label>
              <input
                type="text"
                id="number"
                name="number"
                value={values.number}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
