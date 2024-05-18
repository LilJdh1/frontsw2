import PersonajeRow from "./PersonajesRow"
function PersonajesTable({personajes, onEdit, onDelete}){
    return(
        <table>
            <thead>
                <tr>
                    <th>NAMES</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>HEIGTH</th>
                    <th>ORIGIN</th>
                    <th>POWER</th>
                    <th>CLASSIFICATION</th>
                </tr>
            </thead>
            <tbody>
                {personajes.map((personaje) =>(
                    <PersonajeRow key = {personaje.id} personaje={personaje} onEdit = {onEdit} onDelete = {onDelete}/>
                ))}
            </tbody>
        </table>
    );
};
export default PersonajesTable;