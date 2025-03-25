export const Tableau = ({items,deleteItems,modifItems}) => {
    return <>
    <table className="table mt-3">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
         {items.map((item,index)=><tr key={index}>
            <td>{item.nom}</td>
            <td>{item.prenom}</td>
            <td>{item.email}</td>
            <td>{item.telephone}</td>
            <td className="d-flex justify-content-between align-items-center gap-1">
                <button type="button" className="btn btn-success"
                onClick={()=>modifItems(item.id)}
                >
                <i className="bi bi-pencil-square"></i>
                </button>
                <button type="button" className="btn btn-danger"
                onClick={()=>deleteItems(item.id)}
                >
                <i className="bi bi-trash"></i>
                </button>
            </td>

         </tr>)}
        </tbody>
    </table>
    
    </>;
}