const CompeRow= ({compe, onEdit, onDelete}) => {
    const handleEdit = () =>{
        onEdit(compe)
    };

    const handleDelete = () => {
        onDelete(compe.id)
    };

    return(
        <tr>
            <td>{compe.id}</td>
            <td>{compe.name}</td>
            <td>{compe.premio}</td>
            <td>
                <button onClick={handleEdit}>Edit ✏️</button>
                <button onClick={handleDelete}>Delete 🗑️</button>
            </td>
        </tr>
    );
};
export default CompeRow;