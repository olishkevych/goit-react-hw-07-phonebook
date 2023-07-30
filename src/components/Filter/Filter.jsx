import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice.js';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterInput = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.filter}
        placeholder="Search name..."
        onChange={onFilterInput}
        name="filter"
        value={filter}
      ></input>
    </div>
  );
};
