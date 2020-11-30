import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import {Navbar} from './_Components/Navbar'
import {Home} from './_Pages/Home'
import {About} from './_Pages/About'
import {StartChat} from './_Pages/StartChat'
import {Chat} from './_Pages/Chat'
import {Alert} from './_Components/Alert'
import { AlertState } from './_Context/alert/AlertState';
//import { ChatForm } from './_Components/createChatForm';
import { ChatState } from './_Context/createChatForm/chatState';


function App() {
  return (
    <ChatState>
    <AlertState>
      <BrowserRouter>
        <Navbar/>
        <div className="container pt-4">
        <Alert alert={{text: 'test me'}} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/startchat" component={StartChat} />
          <Route path="/about" component={About} />
          <Route path="/chat/:chatid" component={Chat} />
        </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
    </ChatState>
  );
}

export default App;
