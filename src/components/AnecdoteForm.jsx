import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteInput.value
    event.target.anecdoteInput.value = ''
    dispatch(create(content))
  }

  return (
    <div>
      <h2> create new</h2 >
      <form onSubmit={createAnecdote}>
        <div><input name='anecdoteInput' /></div>
        <button>create</button>
      </form>
    </div >
  )
}

export default AnecdoteForm