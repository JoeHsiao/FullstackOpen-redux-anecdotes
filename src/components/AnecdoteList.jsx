import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { voteToDB } from '../reducers/anecdoteReducer'
import { displayMessage, hide } from '../reducers/notificationReducer'
import { fetchFromDBAndSetStore } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const dispatch = useDispatch()

  const handleVote = (anecdote) => {
    dispatch(voteToDB(anecdote))

    dispatch(displayMessage(`you voted "${anecdote.content}"`))
    setTimeout(() => dispatch(hide()), 5000)
  }

  useEffect(() => {
    dispatch(fetchFromDBAndSetStore())
  }, [dispatch])

  const byVotes = (a, b) => b.votes - a.votes
  return (
    <div>
      {[...anecdotes]
        .filter(x => x.content.toLowerCase().includes(filter))
        .sort(byVotes)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
    </div>
  )
}

export default AnecdoteList