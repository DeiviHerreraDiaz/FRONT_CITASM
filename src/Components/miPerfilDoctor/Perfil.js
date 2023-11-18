import { LitElement, html } from 'lit-element';
import styleScc from '../../css/miPerfil/perfilStyle'


    let persona = JSON.parse(localStorage.getItem(["login_success"]));
    console.log(persona);

export class Perfil extends LitElement {
    

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
                    <input type="varchar" class="form-control" placeholder="Nombre" value="${persona.nombres}">
                    <button class="btn btn-primary">editar</button>
                    </div><br>
                    <div class="form-group">
                    <input type="varchar" class="form-control" placeholder="Apellido" value="${persona.apellidos}">
                    <button class="btn btn-primary">editar</button>
                    </div><br>
                    <div class="form-group">
                        <select class="form-control">
                            <option value="">${persona.tipoDocumento}</option>
                            <option value="">T.I</option>
                            <option value="">C.C</option>
                            <option value="">C.E</option>
                            <option value="">Pasaporte</option>
                        </select>
                        <button class="btn btn-primary">editar</button>
                    </div><br>
                    <div class="form-group">
                        <input type="number" class="form-control" placeholder="Numero de documento" value=${persona.numeroDocumento}>
                        <button class="btn btn-primary">editar</button>
                    </div><br>
                    <div class="form-group">
                        <select class="form-control">
                            <option value="">${persona.genero}</option>
                            <option value="">Femenino</option>
                            <option value="">Masculino</option>
                            <option value="">Otro</option>
                        </select>
                        <button class="btn btn-primary">editar</button>
                    </div><br>
                    <div class="form-group">
                        <input type="varchar" class="form-control" placeholder="Ciudad" value=${persona.ciudad}>
                        <button class="btn btn-primary">editar</button>
                    </div><br>
                    <div class="form-group">
                        <label>Fecha de nacimiento</label>
                        <input type="date" class="form-control" value=${persona.fechaNacimiento}>
                        <button class="btn btn-primary">editar</button>
                    </div><br>
                    <div class="form-group">
                        <input type="number" class="form-control" placeholder="Numero de celular" value=${persona.numeroCelular}>
                        <button class="btn btn-primary">editar</button>
                    </div><br>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Correo" value=${persona.correoElectronico}>
                        <button class="btn btn-primary">editar</button>
                    </div><br>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Nueva contraseña">
                        <button class="btn btn-primary">editar</button>
                    </div><br>
                </form>
            </div>
        </div>
               
        `;

    }
}

customElements.define('my-perfil', Perfil);