import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { displayMessage, hide } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteInput.value
    event.target.anecdoteInput.value = ''
    dispatch(create(content))

    dispatch(displayMessage(`you created "${content}"`))
    setTimeout(() => dispatch(hide()), 5000)
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