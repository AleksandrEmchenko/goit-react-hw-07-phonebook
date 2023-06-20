import { useDispatch } from 'react-redux';
import { FilterFild } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

function Filter() {
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <br />
      <FilterFild
        type="text"
        name="filter"
        onChange={e => {
          dispatch(setFilter(e.currentTarget.value));
        }}
      />
    </label>
  );
}
export default Filter;
