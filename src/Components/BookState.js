import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from 'styles/BookDetails.module.css';
import { deleteBook } from 'redux/books/booksSlice';

const BookState = ({
  category, title, author, id,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <ul>
          <li>
            <button className={styles.line} type="button">Comments</button>
          </li>
          <li>
            <button className={styles.line} type="button" onClick={() => dispatch(deleteBook(id))}>
              Remove
            </button>
          </li>
          <li>
            <button className={styles.button} type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className={styles.progress}>
        <div className={styles.progressDiv}>
          <div className={styles.progressBar} />
          <div className={styles.clooner}>
            <h2>80 %</h2>
            <p>completed</p>
          </div>
        </div>
        <div className={styles.updateProgress}>
          <h3>CURRENT CHAPTER</h3>
          <h2>Chapter 17</h2>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
      {' '}
    </div>
  );
};

export default BookState;

BookState.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
