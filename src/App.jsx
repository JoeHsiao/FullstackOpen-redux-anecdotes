import { useSelector, useDispatch } from 'react-redux'
import { voteAction, createAction } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAction(id))
  }
  const createAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteInput.value
    event.target.anecdoteInput.value = ''
    dispatch(createAction(content))
  }

  const byVotes = (a, b) => b.votes - a.votes

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort(byVotes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div><input name='anecdoteInput' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App