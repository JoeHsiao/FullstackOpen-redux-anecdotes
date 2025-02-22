import { useSelector, useDispatch } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    const filter = state.filter
    return state.anecdotes.filter(ane => ane.content.toLowerCase().includes(filter))
  })

  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAction(id))
  }

  const byVotes = (a, b) => b.votes - a.votes
  return (
    <div>
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
    </div>
  )
}

export default AnecdoteList