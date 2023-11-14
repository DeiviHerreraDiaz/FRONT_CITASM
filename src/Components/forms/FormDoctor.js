import { LitElement, html } from 'lit-element';
import styleScc from '../../css/forms/formStyle'

export class formDoctor extends LitElement {

    static get styles() {
        return [styleScc]
    }
    
    registrarUsuario() {

      const nombres = this.shadowRoot.querySelector('#nombres').value;
      const apellidos = this.shadowRoot.querySelector('#apellidos').value;
      const tipoDocumento = this.shadowRoot.querySelector('#tipoDocumento').value;
      const numeroDocumento = this.shadowRoot.querySelector('#numeroDocumento').value;
      const correoElectronico = this.shadowRoot.querySelector('#correoElectronico').value;
      const contrasena = this.shadowRoot.querySelector('#contrasena').value;
      const genero = this.shadowRoot.querySelector('#genero').value;
      const numeroCelular = this.shadowRoot.querySelector('#numeroCelular').value;
      const ciudad = this.shadowRoot.querySelector('#ciudad').value;
      const certificadoProfesional = this.shadowRoot.querySelector('#certificadoProfesional').value;
      const fechaNacimiento = this.shadowRoot.querySelector('#fechaNacimiento').value;
      const rol = this.shadowRoot.querySelector('#rol').value;
      console.log(rol);
  
      if (!nombres || !apellidos || !tipoDocumento || !numeroDocumento || !correoElectronico || !contrasena || !genero || !numeroCelular || !ciudad || !fechaNacimiento || !rol) {
          alert("Por favor, complete todos los campos.");
          return;
      }
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      
      const nuevoUsuario = {
          nombres,
          apellidos,
          tipoDocumento,
          numeroDocumento,
          correoElectronico,
          contrasena,
          genero,
          numeroCelular,
          ciudad,
          certificadoProfesional,
          fechaNacimiento,
          rol,
      };
  
      users.push(nuevoUsuario);
  
      localStorage.setItem("users", JSON.stringify(users));
  
      alert("Registro exitoso");
      window.location.href = '../index.html';
  
      console.log(users);
  }

    render() {
        return html`

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
   
    <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
        <div class="card">
            <div class="card-header header">
            <center><h2 class="text" style="color:white;">Registro Doctor</h2></center>
            </div>

            <div class="registro active">
            <div id="signupForm">
                <br>
                <div class="input-group-prepend">
                    <span class="input-group-text">Nombres:</span>
                </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="nombres" placeholder="Digite sus nombres">
                </div>
                <br>
                <div class="input-group-prepend">
                    <span class="input-group-text">Apellidos:</span>
                </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="apellidos" placeholder="Digite sus apellidos">
                </div>
                <br>
                <div class="input-group-prepend">
                    <span class="input-group-text">Tipo de documento:</span>
                </div>
                <div class="input-group mb-3">
                  <select class="form-control" id="tipoDocumento">
                    <option value="">Seleccione su tipo de documento</option>
                    <option value="Cedula">Cedula</option>
                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                    <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                  </select>
                </div>
                <br>
                <div class="input-group-prepend">
                    <span class="input-group-text">Número de documento:</span>
                </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="numeroDocumento" placeholder="Digite su numero de documento">
                </div>
                <br>
                <div class="input-group-prepend">
                    <span class="input-group-text">Correo electronico:</span>
                </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="correoElectronico" placeholder="Digite su correo electronico">
                </div>
                <br>
                <div class="input-group-prepend">
                    <span class="input-group-text">Contraseña:</span>
                </div>
                <div class="input-group mb-3">
                  <input type="password" class="form-control"  id="contrasena" placeholder="Digite su contraseña">
                </div>
                <br>
                <div class="input-group-prepend">
                    <span class="input-group-text">Genero:</span>
                </div>
                <div class="input-group mb-3">
                  <select class="form-control" id="genero">
                    <option value="">Seleccione su genero</option>
                    <option value="Cedula">Hombre</option>
                    <option value="Tarjeta de identidad">Mujer</option>
                    <option value="Cedula de extranjeria">Otro</option>
                  </select>
                </div>
                <br>
                <div class="input-group-prepend">
                    <span class="input-group-text">Número de celular:</span>
                </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="numeroCelular" placeholder="Digite su número de celular">
                </div>
                <br>
                <div class="input-group-prepend">
                    <span class="input-group-text">Ciudad:</span>
                </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="ciudad" placeholder="Digite su ciudad">
                </div>
                <br>
                <div class="input-group-prepend">
                    <span class="input-group-text">Certificado profesional:</span>
                </div>
                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="certificadoProfesional">
                </div>
                <br>
                <div class="input-group-prepend">
                    <span class="input-group-text">Fecha de nacimiento</span>
                </div>
                <div class="input-group mb-3">
                  <input type="date" class="form-control" id="fechaNacimiento">
                </div>
                <br>
                <div class="text-center">
                  <input type="text" class="btn-login" id="rol" value="1" hidden>
                </div>

                <div class="text-center">
                <button id="registrarButton" class="btn-login" @click="${(e)=>this.registrarUsuario()}">Registrar</button>
                </div>

                
                <br>
                <br>
            </div>
        </div>
        </div>
    </div>
</div>
        

        <script src="/registrar.js"></script>

        `;

    }
}

customElements.define('my-formdoctor', formDoctor);
