import React from 'react';
import {Link} from 'react-router-dom';
import {ChatForm} from '../_Components/createChatForm'

export const StartChat = () => {


    return (
        <div>
            <h1>StartChat</h1>
            <p>This form allows you to create a new chat. Chat lifetime is limited to 20 minutes</p>
            <ChatForm/>
        </div>
    )
}

