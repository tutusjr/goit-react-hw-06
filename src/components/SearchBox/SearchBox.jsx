
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../redux/filterSlice'

export default function SearchBox() {
    const dispatch = useDispatch()
    const filterName = useSelector(state => state.filter.search)

    const handleSearch =(e)=> {
        dispatch(changeFilter(e.target.value))
    }

  return (
    <div>
        <input onChange={handleSearch} type="search" placeholder='search' value={filterName} />
    </div>
  )
}
