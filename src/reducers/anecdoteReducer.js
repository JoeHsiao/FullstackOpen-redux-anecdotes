import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdote'

const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    // vote(state, action) {
    //   const id = action.payload
    //   const foundAnecdote = state.find(x => x.id === id)
    //   foundAnecdote.votes += 1
    //   return state
    // },
    create(state, action) {
      const content = action.payload
      const anecdote = asObject(content)
      state.push(anecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    setAnecdote(state, action) {
      const obj = action.payload
      return state.map(x => x.id === obj.id ? obj : x)
    }
  }
})

export const fetchFromDBAndSetStore = () => {
  return (dispatch => {
    anecdoteService.getAll()
      .then(anecdotes => {
        dispatch(setAnecdotes(anecdotes))
      })
  })
}

export const saveToDBAndDispatch = content => {
  return (dispatch => {
    anecdoteService.createNew(content)
      .then(() => {
        dispatch(create(content))
      })
  })
}

export const voteToDB = anecdote => {
  return dispatch => {
    const votedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    anecdoteService.update(anecdote.id, votedAnecdote)
      .then((updatedObj) => {
        dispatch(setAnecdote(updatedObj))
      })
  }
}
export const { vote, create, setAnecdotes, setAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer