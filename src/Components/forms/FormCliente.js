import { LitElement, html } from 'lit-element';
import styleScc from '../../css/forms/formStyle'

export class FormCliente extends LitElement {

    static get styles() {
        return [styleScc]
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
                    <center><h2 class="text" style="color:white;">Registro Cliente</h2></center>
                    </div>
                    
                        <div class="registro active">
                            <form action="procesar_cliente.php" method="POST">
                                <br>
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Nombres:</span>
                                </div>
                                <div class="input-group mb-3">
                                  <input type="text" class="form-control" placeholder="Digite sus nombres">
                                </div>
                                <br>
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Apellidos:</span>
                                </div>
                                <div class="input-group mb-3">
                                  <input type="text" class="form-control" placeholder="Digite sus apellidos">
                                </div>
                                <br>
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Tipo de documento:</span>
                                </div>
                                <div class="input-group mb-3">
                                  <select class="form-control">
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
                                  <input type="text" class="form-control" placeholder="Digite su numero de documento">
                                </div>
                                <br>
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Correo electronico:</span>
                                </div>
                                <div class="input-group mb-3">
                                  <input type="text" class="form-control" placeholder="Digite su correo electronico">
                                </div>
                                <br>
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Contraseña:</span>
                                </div>
                                <div class="input-group mb-3">
                                  <input type="password" class="form-control" placeholder="Digite su contraseña">
                                </div>
                                <br>
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Genero:</span>
                                </div>
                                <div class="input-group mb-3">
                                  <select class="form-control">
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
                                  <input type="text" class="form-control" placeholder="Digite su número de celular">
                                </div>
                                <br>
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Ciudad:</span>
                                </div>
                                <div class="input-group mb-3">
                                  <input type="text" class="form-control" placeholder="Digite su ciudad">
                                </div>
                                <br>
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Fecha de nacimiento</span>
                                </div>
                                <div class="input-group mb-3">
                                  <input type="date" class="form-control">
                                </div>
                                <br>
                                <div class="text-center">
                                  <button type="submit" class="btn-login">Registrarse</button>
                                </div>
                                <br>
                                <br>
                            </form>
                        </div>
                </div>
            </div>
        </div>
        
        `;

    }
}

customElements.define('my-formcliente', FormCliente);
