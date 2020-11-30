import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom';

import { AlertContext } from '../_Context/alert/alertContext'
import { ChatContext } from  '../_Context/createChatForm/chatContext'
//import {GithubContext} from '../context/github/githubContext'

export const ChatForm = () => {
  const [chatName, setChatName] = useState('')
  const [userName, setUserName] = useState('')
  const alert = useContext(AlertContext)
  //const github = useContext(GithubContext)
  const chatForm = useContext(ChatContext)


  //const onChangeChatName = (e) => {
  //    ChatForm.changeChatName(e.target.value);
      //console.log(e);
  //}

  const onSubmit = (event) => {
    //if (event.key !== 'Enter') {
    //  return
    //}

    chatForm.createNewChat(chatName, userName)

    /*if (value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show('Введите данные пользователя!')
    }*/

    //alert('Введите данные пользователя!');
  }

  return (
    <form>
    <div className="form-group">
        <label>Your nickname (use only latin)</label>
        <input value={userName} onChange={event => setUserName(event.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nickname"/>
        
    </div>
    <div className="form-group">
        <label>Chat name</label>
        <input value={chatName} onChange={event => setChatName(event.target.value)} type="text" className="form-control"  placeholder="Your chat name"/>
    </div>
    
        <button onClick={onSubmit} type="button" className="btn btn-primary">
        Create
        </button>
    
    </form>
  )

  //return (
  //  <div className="form-group">
  //    <input
  //      type="text"
  //      className="form-control"
  //      placeholder="Введите ник пользователя..."
  //      value={value}
  //      onChange={event => setValue(event.target.value)}
  //      onKeyPress={onSubmit}
  //    />
  //  </div>
  //)
}

