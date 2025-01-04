import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){

    const [isEditing, setIsEditing ] = useState(false);

    const [playerName, setPlayerName] = useState(initialName);

    function HandleEditClick() {
        setIsEditing((editing) => !isEditing);
        
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className = "player-name" >{playerName}</span>;
    // let btnCaption = "Edit";

    if(isEditing){
        editablePlayerName  = <input type="text"  required Value={playerName} onChange={handleChange} />;
        // btnCaption = "Save";
    }

    return (
            <li className={isActive ? 'active' : undefined}>
                <span className="player">
                    {editablePlayerName}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={HandleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </li>                                     
    );
}