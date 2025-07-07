export function NotaPersonal({ nota, EliminarNota }) {
    /** Destructuring */
    const {id, titulo, descripcion, importante} = nota;

    function deleteNote(){
        EliminarNota(id);
    }

    if (importante === true) {
        return (
            <div className="card importante">
                <div className="card-body">
                    <div className="d-flex patata">
                        <h5 className="card-title">{titulo}</h5>
                        <button className="btn" onClick={deleteNote}><i className="bi bi-x"></i></button>
                    </div>
                    <p className="card-text">{descripcion}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card no-importante">
                <div className="card-body">
                    <div className="d-flex patata">
                        <h5 className="card-title">{titulo}</h5> 
                        <button className="btn" onClick={deleteNote}><i className="bi bi-x"></i></button>
                    </div>
                    <p className="card-text">{descripcion}</p>
                </div>
            </div>
        )
    }
}