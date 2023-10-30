import { LitElement, html } from 'lit-element';
// import styleScc  from '../../../css/my-element-style'

export class Login extends LitElement {

    // static get styles() {
    //     return [styleScc]
    // }

    render() {
        return html`

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">



  <div class="row">
    <div class="col-sm-4">  
    </div>
    <div class="col-sm-4">



      <div class="card">
        <div class="card-header header">
          <div class="text-center">
            <h3>
              PUMAS DC.
            </h3>
          </div>
        </div>

        <form class="login">

          <br>

          <div class="input-group mb-3">
            <input type="text" class="form-control"  placeholder="Usuario" >
          </div>

          <br>

          <div class="input-group mb-3">
            <input type="text" class="form-control"  placeholder="Password" >
          </div>

          <br>
          <br>

          <div class="text-center">
            <button type="submit" class="btn-login"><a href="src/Views/dashboard.html">Ingresar</a></button>
          </div>

          <br>

          <div class="d-grid gap-2 text-center">
            <a href="" class="pass">Recordar contraseña</a>
          </div>

          <br>
        </form>
      </div>

    </div>
    <div class="col-sm-4">

    </div>
  </div>

        `;

    }
}

customElements.define('my-login', Login);