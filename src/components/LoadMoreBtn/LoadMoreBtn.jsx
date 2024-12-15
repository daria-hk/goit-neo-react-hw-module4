import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => (
  <button onClick={handleLoadMore} className={css.button}>
    Load more
  </button>
);

export default LoadMoreBtn;
