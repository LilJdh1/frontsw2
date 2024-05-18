const PersonajesRow = ({personaje, onEdit, onDelete}) => {
    const handleEdit = () =>{
        onEdit(personaje);
    };
    const handleDelete = () =>{
        onDelete(personaje.id);
    };
    return (
        <tr>//table row
            <td>{personaje.nombre}</td>
            <td>{personaje.age}</td>
            <td>{personaje.gender}</td>
            <td>{personaje.heigth}</td>
            <td>{personaje.origin}</td>
            <td>{personaje.power}</td>
            <td>{personaje.classification}</td>
            <td>
                <button onClick={handleEdit}>Edit ✏</button>
                <button onClick={handleDelete}>Delete 🗑</button>
            </td>
        </tr>
    ); 
};
export default PersonajesRow;