import React, {useContext, useState} from 'react'


export const Chat = ({match}) => {

// если этот id есть в локальном хранилище
// то показываем данные локального хранилища и загружаем переписку чата
//

    return(
        <div>
            chatid:{match.params.chatid}
        </div>
    )
}