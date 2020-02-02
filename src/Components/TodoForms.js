import React, { useState } from 'react';

export default function TodoForms({ handleTodoCreation }){
    const [description,setDescription] = useState("");

    function handleDescriptionChange(e){
        setDescription(e.target.value);
    }

    function handleFormsSubmit(e){
        e.preventDefault();
        handleTodoCreation(description);
        setDescription("");

    }
    return(
        <form onSubmit={handleFormsSubmit}>
            <input 
                type="text" 
                placeholder="description" 
                name="description" 
                value={description} 
                onChange={e => handleDescriptionChange(e)}
            />
            <button type="submit">Ajouter</button>
        </form>
    );
}