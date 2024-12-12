import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <header>
      <Formik>
        {({}) => (
          <Form className={css.form}>
            <Field
              className={css.field}
              type="text"
              name="search"
              placeholder="Search images and photos"
            />
            <button className={css.btn} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;

/**
 * const SearchBar = ({ value, onChange }) => {
  return (
    <header>
      <Formik initialValues={{ name: value }} onSubmit={() => {}}>
        {({ values, handleChange }) => (
          <Form className={css.form}>
            <Field
              className={css.field}
              type="text"
              name="name"
              value={values.name}
              placeholder="Search images and photos"
              onChange={(e) => {
                handleChange(e);
                onChange(e);
              }}
            />
            <button className={css.btn} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </header>
  );
};

 */
