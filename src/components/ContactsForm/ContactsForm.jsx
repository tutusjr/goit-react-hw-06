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
              <Field
                type="text"
                placeholder="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field
                type="text"
                placeholder="number"
                name="number"
                value={values.number}
                onChange={handleChange}
              />
              <ErrorMessage name="number" component="div" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
