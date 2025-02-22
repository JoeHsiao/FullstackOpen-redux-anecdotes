import { useDispatch } from 'react-redux'
import { changeFilterAction } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(changeFilterAction(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input name='filterInput' onChange={handleChange} />
    </div>
  )
}

export default Filter