import React, { useReducer } from 'react'
import axios from 'axios'
import { ChatContext } from './chatContext'
import { ChatReducer } from './chatReducer'
import { GET_CHATS,  
    GET_CHATS_LOADING, 
    CREATE_CHAT, CHANGE_CHAT_NAME} from '../types'



export const ChatState = ({children}) => {
    const initialState = {
      //user: {},
      //users: [],
      loading: false,
      //repos: []
      chats: []
    }

    const [state, dispatch] = useReducer(ChatReducer, initialState)


    const getChats = async name => {
        setLoading()
    
        const response = await axios.get(
          `http://localhost:60722/Chat/GetChatsList`
        )
    
        dispatch({
          type: GET_CHATS,
          payload: response.data
        })
    }

    //TODO: получить данные чата 
    const getChat = async (chatid) => {


    }

    const createNewChat = async (chatName, userName) => {
        
        //console.log({name});
        
        //setLoading()

        let data = {
            chatName: chatName,
            userName: userName
        }

        const response = await axios.post('http://localhost:60722/Chat/CreateChat', data);

        console.log({response});

        if(response.err === false){

            localStorage.setItem('chatId', response.chatId);
            this.props.history.push(`/chat/${response.chatId}`);
        }

        

        //dispatch({
        //    type: CREATE_CHAT,
        //    payload: response.data
        //})

    }

    const setLoading = () => dispatch({type: GET_CHATS_LOADING})
    
    
    //const changeChatName = (name) => {
        //dispatch({type: CHANGE_CHAT_NAME, payload: name})
        //console.log('name',name);
    //}


    const {chats, loading} = state


    return (
        <ChatContext.Provider value={{
          setLoading, getChats, createNewChat, getChat,
          loading, chats
        }}>
          {children}
        </ChatContext.Provider>
      )

}
