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
}
// functions
function inicioApp() {
  btnEnviar.disabled = true
}