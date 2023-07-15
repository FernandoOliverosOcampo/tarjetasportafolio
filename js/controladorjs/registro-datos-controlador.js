import Vista from "../vistajs/index.js";
import Modelo from '../modelo/modelo_registro.js';

//Funcion volver

const Controlador ={
 
    async contenidoAgregar(nombreFormulario, apellidoFormulario, usuarioFormulario,contraseñaFormulario,paginaFormulario, paginaUrl,githubURL){
        try {
            const res = await Modelo.insertarDatos(nombreFormulario, apellidoFormulario, usuarioFormulario,contraseñaFormulario,paginaFormulario, paginaUrl,githubURL);
            let mensaje = "Los datos fueron insertados correctamente"
            Vista.mostrarAlertaSatisfactorio(mensaje);
        } catch (error) {
            console.log(error);
        }
    }
   

}

export default Controlador;


