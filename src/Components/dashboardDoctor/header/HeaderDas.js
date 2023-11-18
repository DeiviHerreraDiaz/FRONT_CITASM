import { LitElement, html } from 'lit-element';
import styleScc from '../../../css/forms/formStyle'

export class Headerdas extends LitElement {

    static get styles() {
        return [styleScc]
    }

    logout(){
        const user = JSON.parse(localStorage.getItem('login_success')) || false

    if (!user){

        window.location.href = 'login.html'

    }

    alert("Hasta pronto")
    localStorage.removeItem('login_success')

    window.location.href = 'login.html '

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
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" >Cuenta<span class="sr-only"></span></a>
                    <ul class="menu-v dropdown-menu" style="background-color: rgb(56, 172, 205) !important;" aria-labelledby="navbarDropdownMenuLink">
                        <li><button class="dropdown-item" @click="${(e) => this.logout()}">Cerrar Sesión</button></li>
                        <li><a class="dropdown-item" href="../../../views/perfilDoctor.html">Ver Perfil</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
        
        `;

    }
}

customElements.define('my-headerd', Headerdas);