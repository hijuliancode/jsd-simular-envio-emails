// variables
  const email = document.getElementById('email'),
        asunto = document.getElementById('asunto'),
        mensaje = document.getElementById('mensaje'),
        btnEnviar = document.getElementById('enviar');

// eventListeners
eventListeners()
function eventListeners() {
  // Inicio de App y deshabilitar botón de enviar
  document.addEventListener('DOMContentLoaded', inicioApp)
  // Campos del formulario
  email.addEventListener('blur', validarCampo)
  asunto.addEventListener('blur', validarCampo)
  mensaje.addEventListener('blur', validarCampo)
}
// functions
function inicioApp() {
  btnEnviar.disabled = true
}
// Validar que el campo tenga algo escrito
function validarCampo() {
  // Valida la longitud del texto y que no esté vacio
  validarLongitud(this)
  // validar únicamente email
  if (this.type === 'email') {
    validarEmail(this)
  }
  let errores = document.querySelectorAll('.error')
  if(email.value && asunto.value && mensaje.value) {
    if (!errores.length) {
      btnEnviar.disabled = false
    }
  }
}
function validarLongitud(campo) {
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = 'green'
    campo.classList.remove('error')
  } else {
    campo.style.borderBottomColor = 'red'
    campo.classList.add('error')
  }
}
function validarEmail(campo) {
  const mensaje = campo.value
  if (mensaje.indexOf('@') !== -1) {
    campo.style.borderBottomColor = 'green'
    campo.classList.remove('error')
  } else {
    campo.style.borderBottomColor = 'red'
    campo.classList.add('error')
  }
}