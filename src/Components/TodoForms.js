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
        <form onSubmit={handleFormsSubmit} class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
                <input 
                    id='email'
                    className='form-control'
                    type="text" 
                    placeholder="Tâche"
                    name="description" 
                    value={description} 
                    onChange={e => handleDescriptionChange(e)}
                />
            </div>
            <button type="submit" class="btn btn-primary mb-2">Ajouter Tâche</button>
        </form>
    );
}