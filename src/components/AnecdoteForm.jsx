import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { displayMessage, hide } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdote'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdoteInput.value
    event.target.anecdoteInput.value = ''
    await anecdoteService.createNew(content)
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