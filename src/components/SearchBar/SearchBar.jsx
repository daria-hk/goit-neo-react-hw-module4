import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

const SearchBar = ({ initialValues, onSubmit }) => {
  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values }) => (
          <Form className={css.form}>
            <div>
              <Field
                className={css.field}
                type="text"
                name="search"
                placeholder="Search images and photos"
                value={values.search}
              />
            </div>
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
