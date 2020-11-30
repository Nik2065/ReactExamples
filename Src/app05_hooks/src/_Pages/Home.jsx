import React, { useContext } from 'react';
import {AlertContext} from '../_Context/alert/alertContext'

export const Home = () => {

    const {show} = useContext(AlertContext)

    const onEnter = event => {
        if(event.key === 'Enter'){
            show('Htis is alert!')
        }
    }
    return (
        <div>
            <h1>Home</h1>
            <h1>some text</h1>
            <input onKeyPress={onEnter} />
            <button onClick={onEnter} className="btn btn-primary">click me</button>
        </div>
    )
}