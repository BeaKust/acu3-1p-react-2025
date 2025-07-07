import { NotaPersonal } from "./NotaPersonal";
import { useState, useRef } from "react"; //useState y useRef: Hooks de React para manejar el estado y referencias.
import { v4 as uuid } from "uuid";


// Agregar , Listar , Actulizar , Borrar
export function MisNotas() {
    const tituloRef = useRef();
    const descripcionRef = useRef();
    const importanteRef = useRef();
    const [mensaje, setMensaje] = useState(""); //useSatate = Valor Inicial

    function AgregarNota() {
        console.log('capturando boton'); //Captura de la funcion
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value; 
        const importante = importanteRef.current.checked; //Al ser un checked siempre devolvera solo TRUE o FALSE = (BOOLEANOS)

        if (descripcion === "") {

            setMensaje("El campo descripción es obligatorio");
            setTimeout(() => {
                setMensaje('');
            }, 2000);

        } else {
            const nota = {
                id: uuid(),
                titulo: titulo,
                descripcion: descripcion,
                importante: importante
            }
            const nuevaNota = [...notaPredeterminada, nota]; //Hace una copia de default
            cambiarNota(nuevaNota); //Y Se lo agrega a la lista Original
            alert('Se agrego la Nota'); //Mensaje de alerta de Se agrego cancion
        }

        tituloRef.current.value = '';
        descripcionRef.current.value = '';
        importanteRef.current.checked = false;
    }

    function EliminarNota(id) {
        console.log("Presionando boton de eliminar");
        const nuevaNota_2 = notaPredeterminada.filter(i => i.id !== id) //Estrictamente contrario
        cambiarNota(nuevaNota_2)
        alert("Se a eliminado la nota")
    }

    const [notaPredeterminada, cambiarNota] = useState([
        { id: uuid(), titulo: "Honda eg9" , descripcion: 'Cambio de aceite', importante: false },
        { id: uuid(), titulo: "Honda eg6" , descripcion: 'Cambio de motor', importante: true },
        { id: uuid(), titulo: "Honda ej1" , descripcion: 'Cambio de caja', importante: false },
        { id: uuid(), titulo: "subaru wrx" , descripcion: 'Cambio de focos', importante: false }
    ]);

    return (
        <div className='container'>
            <h1 className='title text-start mt-5'>Post It Simulator!</h1>
            <div className='d-flex align-items-center'>
                <input ref={tituloRef} type='text' className='form-control me-3 titulo' placeholder='Titulo'></input>
                <input ref={descripcionRef} type='text' className='form-control me-3 pdf' placeholder='Descripcion'></input>
                <div className='form-check'>
                    <input ref={importanteRef} className='form-check-input' type='checkbox' />
                    <label className='form-check-label white'> Importante! </label>
                </div>
                <button className='white gris' onClick={AgregarNota}>AGREGAR</button>
            </div>
            <span className="white centro"> {mensaje} </span>
            <div className="box">
                { // Abrimos llaves para iniciar logica de programacion
                    //esto es importante porque hace que las cosas se muestren en pantalla
                    notaPredeterminada.map(function (i) {
                        return <NotaPersonal key={i.id} nota={i} EliminarNota={EliminarNota}/>
                    })
                }
            </div>
        </div>
    );
}