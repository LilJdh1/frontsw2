import { useState } from "react";
function CompeForm ({onSubmit}){

    const [id, setId] = useState('')
    const [name , setName] = useState('')
    const [premio, setPremio] = useState('')
    

    const handleIdChange = (event) => {
        setId(event.target.value)
    };

    const handleNameChange = (event) => {
        setName(event.target.value)
    };

    const handlePremioChange = (event) => {
        setPremio(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({id, name, premio})
        setId('')
        setName('')
        setPremio('')
       
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Id" value={id} onChange={handleIdChange} required />
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange} required />
            <input type="text" placeholder="Premio" value={premio} onChange={handlePremioChange} required />
            <button type="submit">Save</button>
        </form>
    );

}
export default CompeForm;
