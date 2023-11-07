import {FilterInput, FilterLable} from './SearchFilter.styled'
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/reducer';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)
    const handleFilterInputChange = e => {
        const value = e.target.value;
        dispatch(setFilter(value))
      };
    return <FilterLable>Find contacts by name<FilterInput type="text" value={filter} onChange={handleFilterInputChange }/><FaSearch/></FilterLable>
}