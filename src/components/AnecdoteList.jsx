import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { voteToDB } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { fetchFromDBAndSetStore } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const dispatch = useDispatch()

  const handleVote = (anecdote) => {
    dispatch(voteToDB(anecdote))

    dispatch(setNotification(`you voted "${anecdote.content}"`, 5))
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