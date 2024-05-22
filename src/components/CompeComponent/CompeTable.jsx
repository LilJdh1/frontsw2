import CompeRow from "./CompeRow"

function CompeTable({compe, onEdit, onDelete}){


    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAMES</th>
                    <th>PREMIO</th>
                </tr>
            </thead>
            <tbody>
                {compe.map((compe) => (
                    <CompeRow
                        key={compe.id} 
                        compe={compe}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default CompeTable;