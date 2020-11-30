import {CREATE_CHAT, GET_CHATS, GET_CHATS_LOADING} from '../types'

const handlers = {
  [CREATE_CHAT]: (state) => state,
  [GET_CHATS]: (state, {payload}) => ({...state, chats: payload, loading: false}),
  //[GET_REPOS]: (state, {payload}) => ({...state, repos: payload, loading: false}),
  [GET_CHATS_LOADING]: state => ({...state, loading: true}),
  DEFAULT: state => state
}

export const ChatReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
