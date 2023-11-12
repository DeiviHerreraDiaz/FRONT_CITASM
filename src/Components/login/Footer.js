<<<<<<< HEAD
import { LitElement, html } from 'lit-element';
import styleScc from '../../css/login/loginStyle'

export class Footer extends LitElement {

    static get styles() {
        return [styleScc]
    }

    render() {
        return html`
      
        <br>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        
        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Odontología</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Cardiología</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Optometría</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Dermatología</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Oftamología</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Otorrinolaringología</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Ginecologia</a></li>
          
            </ul>
            <p class="text-center text-muted">&copy; 2023 Citas Médicas. Colombia, Bogotá D.C.</p>
          </footer>
        </div>
 
        `;

    }
}

=======
import { LitElement, html } from 'lit-element';
import styleScc from '../../css/login/loginStyle'

export class Footer extends LitElement {

    static get styles() {
        return [styleScc]
    }

    render() {
        return html`
      
        <br>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        
        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Odontología</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Cardiología</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Optometría</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Dermatología</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Oftamología</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Otorrinolaringología</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Ginecologia</a></li>
          
            </ul>
            <p class="text-center text-muted">&copy; 2023 Citas Médicas. Colombia, Bogotá D.C.</p>
          </footer>
        </div>
 
        `;

    }
}

>>>>>>> 1cc4a29d5a6867a29b5a127f06e7646b0c522036
customElements.define('my-footer', Footer);