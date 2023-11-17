// Importa el componente FormCliente
import { FormCliente } from '../forms/FormCliente.js';
import { FormCliente } from '../forms/FormCliente.js';

// Asegúrate de que el DOM está cargado
document.addEventListener('DOMContentLoaded', () => {

  // Agrega un event listener al botón de registro
  const registrarButton = document.querySelector('#registrarButton');
  registrarButton.addEventListener('click', () => {
    // Llama al método de instancia registrarUsuario en lugar del método estático
    const formCliente = new FormCliente();
    formCliente.registrarUsuario();
  });

});
