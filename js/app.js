// variables
  const email = document.getElementById('email'),
        asunto = document.getElementById('asunto'),
        mensaje = document.getElementById('mensaje'),
        btnEnviar = document.getElementById('enviar'),
        btnReset = document.getElementById('resetBtn'),
        formularioEnviar = document.getElementById('enviar-mail');

// eventListeners
eventListeners()
function eventListeners() {
  // Inicio de App y deshabilitar botón de enviar
  document.addEventListener('DOMContentLoaded', inicioApp)
  // Campos del formulario
  email.addEventListener('blur', validarCampo)
  asunto.addEventListener('blur', validarCampo)
  mensaje.addEventListener('blur', validarCampo)

  // Validar envío del formulario
  formularioEnviar.addEventListener('submit', enviarEmail)

  // limpiar formulario
  btnReset.addEventListener('click', resetFormulario)
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
function resetFormulario(e) {
  formularioEnviar.reset()
  inicioApp()
  e.preventDefault()
}

function enviarEmail(e) {
  // Spinner al presionar enviar
  const spinnerGif = document.querySelector('#spinner')
  spinnerGif.style.display = 'block'

  // Gif de enviar email
  const emailGif = document.createElement('img')
  emailGif.src = 'img/mail.gif'
  emailGif.style.display = 'block'

  // Ocultar spinner y mostrar gif email
  setTimeout(() => {
    spinnerGif.style.display = 'none'
    document.querySelector('#loaders').appendChild(emailGif)
    setTimeout(() => {
      emailGif.style.display = 'none'
      formularioEnviar.reset()
    }, 2500);
  }, 2000);

  e.preventDefault();
}

// Verifica la longitud del texto en los campos
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