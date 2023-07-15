import config from '../supabase/config.js';

const Modelo ={

    async insertarDatos(nombreFormulario, apellidoFormulario, usuarioFormulario,contraseñaFormulario, paginaFormulario, paginaUrl,githubURL){
        const datos_insertar = {
            titulo: nombreFormulario,
            lenguajes:apellidoFormulario,
            descripcion:usuarioFormulario,
            imagenes: contraseñaFormulario,
            pagina: paginaFormulario,
            url: paginaUrl,
            github: githubURL,
        }
        const res = await axios({
            method:'POST',
            url:"https://hqlzuquiyrarqwyeslkl.supabase.co/rest/v1/Datosproyecto",
            data: datos_insertar,
            headers: config.headers
        });

        return res;
    
    }
  

}
export default Modelo;