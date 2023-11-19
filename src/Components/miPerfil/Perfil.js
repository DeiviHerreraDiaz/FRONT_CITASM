import { LitElement, html } from 'lit-element';
import styleScc from '../../css/miPerfil/perfilStyle'


    let persona = JSON.parse(localStorage.getItem(["login_success"]));
    console.log(persona);

    let datos = JSON.parse(localStorage.getItem("users"));
    console.log(datos);



export class Perfil extends LitElement {


    guardarDatos() {
        
        const nombre = this.shadowRoot.querySelector('#nombre').value;
        const apellido = this.shadowRoot.querySelector('#apellido').value;
        const tipoDocumento = this.shadowRoot.querySelector('#tipoDocumento').value;
        const genero = this.shadowRoot.querySelector('#genero').value;
        const ciudad = this.shadowRoot.querySelector('#ciudad').value;
        const fechaNacimiento = this.shadowRoot.querySelector('#fechaNacimiento').value;
        const numeroCelular = this.shadowRoot.querySelector('#numeroCelular').value;
        const correoElectronico = this.shadowRoot.querySelector('#correoElectronico').value;
        const contrasena = this.shadowRoot.querySelector('#contrasena').value;

        persona.nombres = nombre;
        persona.apellidos = apellido;
        persona.tipoDocumento = tipoDocumento;
        persona.genero = genero;
        persona.ciudad = ciudad;
        persona.fechaNacimiento = fechaNacimiento;
        persona.numeroCelular = numeroCelular;
        persona.correoElectronico = correoElectronico; 
        persona.contrasena = contrasena;

        const usuarioExistente = datos.find(user => user.numeroDocumento === persona.numeroDocumento);
        if (usuarioExistente) {
      
            Object.assign(usuarioExistente, persona);
        } else {
      
            datos.push(persona);
        }

        localStorage.setItem("users", JSON.stringify(datos));

        localStorage.setItem("login_success", JSON.stringify(persona));

        alert('Los datos se han guardado correctamente');
    }
    

    static get styles() {
        return [styleScc]
    }

    render() {
        return html`

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        <br>
        <br>

        <div class="row">
            <div class="col-sm-4 ">
                <img class="col1 img-thumbnail h-50 d-inline-block w-100 p-1" src="https://static.vecteezy.com/system/resources/previews/019/879/198/original/user-icon-on-transparent-background-free-png.png" alt="">
            </div>
            <div class="col-sm-4 col2">
                <form>

                <div class="form-group">
                <label>Número de documento </label>
                <input type="number" class="form-control" placeholder="Numero de documento" value="${persona.numeroDocumento}" disabled=»disabled»>
               
                </div><br>

                    <div class="form-group">
                    <input type="varchar" class="form-control" id="nombre" placeholder="Nombre" value="${persona.nombres}">
                    </div><br>
                    <div class="form-group">
                    <input type="varchar" class="form-control" id="apellido" placeholder="Apellido" value="${persona.apellidos}">
                    </div><br>
                    <div class="form-group">
                        <select class="form-control" id="tipoDocumento">
                            <option value="${persona.tipoDocumento}">${persona.tipoDocumento}</option>
                            <option value="T.I">T.I</option>
                            <option value="C.C">C.C</option>
                            <option value="C.E">C.E</option>

                        </select>

                        
                    </div><br>
                   
                    <div class="form-group">
                        <select class="form-control" id="genero">
                            <option value="${persona.genero}">${persona.genero}</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Otro">Otro</option>
                        </select>

                        
                    </div><br>
                    <div class="form-group">
                        <input type="varchar"  id="ciudad" class="form-control" placeholder="Ciudad" value=${persona.ciudad}>

                    </div><br>
                    <div class="form-group">
                        <label>Fecha de nacimiento</label>
                        <input type="date" class="form-control" id="fechaNacimiento" value=${persona.fechaNacimiento}>

                    </div><br>
                    <div class="form-group">
                        <input type="number" class="form-control" id="numeroCelular" placeholder="Numero de celular" value=${persona.numeroCelular}>

                    </div><br>
                    <div class="form-group">
                        <input type="email" class="form-control" id="correoElectronico" placeholder="Correo" value=${persona.correoElectronico}>

                    </div><br>
                    <div class="form-group">
                        <input type="password" class="form-control" id="contrasena" placeholder="Nueva contraseña" value=${persona.contrasena}>
                        
                    </div><br>

                    <button class="btn btn-primary" @click="${this.guardarDatos}">editar</button>
                </form>
            </div>
        </div>
               
        `;

    }
}

customElements.define('my-perfil', Perfil);