<<<<<<< HEAD
import { LitElement, html } from 'lit-element';
import styleScc from '../../css/login/loginStyle'

export class Header extends LitElement {

    static get styles() {
        return [styleScc]
    }

    render() {
        return html`

               
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        
          <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: rgb(56, 172, 205) !important;">
            <a class="navbar-brand perfil" href="#">CITAS MEDICAS S.A.S</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav menu-h" >
                    <li class="nav-item active">
                        <a class="nav-link" href="../../index.html">Volver<span class="sr-only"></span></a>
                    </li>
                </ul>
            </div>
                </nav>
        
        `;

    }
}

=======
import { LitElement, html } from 'lit-element';
import styleScc from '../../css/login/loginStyle'

export class Header extends LitElement {

    static get styles() {
        return [styleScc]
    }

    render() {
        return html`

               
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        
          <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: rgb(56, 172, 205) !important;">
            <a class="navbar-brand perfil" href="#">CITAS MEDICAS S.A.S</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav menu-h" >
                    <li class="nav-item active">
                        <a class="nav-link" href="menu.html">Volver<span class="sr-only"></span></a>
                    </li>
                </ul>
            </div>
                </nav>
        
        `;

    }
}

>>>>>>> 1cc4a29d5a6867a29b5a127f06e7646b0c522036
customElements.define('my-header', Header);