//importaciones
import Controlador from "../controladorjs/registro-datos-controlador.js";

//fin importaciones
const inputField = document.querySelector('.input-field');
const inputLabel = document.querySelector('.input-label');

//dom
const btnenviar = document.getElementById('btn_enviar');

btnenviar.addEventListener('click', () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: '¿Estás seguro?',
    text: 'Deseas ingresar los datos a la BD',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      const nombreFormulario = document.getElementById('titulo').value;
      const apellidoFormulario = document.getElementById('lenguajes').value;
      const usuarioFormulario = document.getElementById('descripcion').value;
      const contraseñaFormulario = document.getElementById('imagenes').value;
      let paginaFormulario = document.getElementById('pagina').checked;
      const  paginaUrl = document.getElementById('url').value;
      const githubURL = document.getElementById('urlgit').value;
      
      // Verificar campos vacíos
      if (nombreFormulario === '' || apellidoFormulario === '' || usuarioFormulario === '' || contraseñaFormulario === ''||githubURL==='' ) {
        Swal.fire({
          icon: 'error',
          title: 'Campos vacíos',
          text: 'Por favor, completa todos los campos.',
        });
        return;
      }
      if (paginaFormulario == true){
         paginaFormulario = 'si'
      }else{
        paginaFormulario= 'no'
      }
      if (paginaUrl == ''){
        paginaUrl ='sin url';
      }
     Controlador.contenidoAgregar(nombreFormulario, apellidoFormulario, usuarioFormulario, contraseñaFormulario, paginaFormulario, paginaUrl,githubURL);

      // Limpiar los valores de los inputs
      document.getElementById('titulo').value = '';
      document.getElementById('lenguajes').value = '';
      document.getElementById('descripcion').value = '';
      document.getElementById('imagenes').value = '';
      document.getElementById('url').value = '';
      document.getElementById('urlgit').value = '';

   
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'No se ha ingresado nada',
        'error'
      );
    }
  });
});

const Vista = {

  mostrarMensajeError(mensaje) {
    Swal.fire({
      icon: 'error',
      title: 'Algo salió mal',
      text: mensaje,
    })
  },

  mostrarAlertaSatisfactorio(mensaje) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
  },

}
export default Vista;

//fin dom
//placeholder
inputField.addEventListener('input', function () {
  if (inputField.value !== '') {
    inputLabel.style.top = '-10px';
    inputLabel.style.transform = 'translateY(0%)';
    inputLabel.style.fontSize = '12px';
    inputLabel.style.color = '#333';
    inputLabel.style.backgroundColor = 'white';
    inputLabel.style.opacity = '0.85';
  } else {
    inputLabel.style.top = '50%';
    inputLabel.style.transform = 'translateY(-50%)';
    inputLabel.style.fontSize = '16px';
    inputLabel.style.color = '#999';
    inputLabel.style.backgroundColor = '';
  }
});