import { LitElement, html } from 'lit-element';
import styleScc from '../../css/login/loginStyle'

export class Content extends LitElement {

    static get styles() {
        return [styleScc]
    }

    render() {
        return html`

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      
          <div class="row">
            <div class="col-sm-2">
        
            </div>
            <div class="col-sm-6">
        
              <div class="card">
                <div class="card-header header">
                  <div class="text-center">
                    <h3>
                      INICIAR SESIÓN
                    </h3>
                  </div>
                </div>
        
                <div class="login" id="loginform">
        
                  <span class="input-group-text"> <i class="bi bi-person-circle date"> DATOS DE USUARIO</i></span>
                  
                  <br>
        
                  <div class="row g-2">
                    <div class="col-md">
                      <div class="form-floating">
                        <input type="text" class="form-control" id="nombres" placeholder="Nombre de usuario">
                        <label for="floatingInputGrid">Usuario</label>
                      </div>
                    </div>
                  </div>
        
                  <br>
        
                  <div class="form-floating">
                    <input type="password" class="form-control" id="contrasena"  placeholder="Contraseña">
                    <label for="floatingInputGrid">Contraseña</label>
                  </div>
        
                  <br>
                  <br>
                  
                <div class="text-center">
                <button id="registrarButton" class="btn-login" href="dashboard">Registrar</button>
                </div>
        
                  <br>
        
                  <div class="d-grid gap-2 text-center">
                    <a href="../views/formCliente.html" class="pass">¿No estas registrado?</a>
                  </div>
        
                  <br>
                </div>
              </div>
        
            </div>
            <div class="col-sm-4 image-container">
                <img src="/src/img/Doctora.png" alt="Doctora">
            </div>
        
          </div>
        
        `;

    }
}

customElements.define('my-content', Content);