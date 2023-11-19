import { LitElement, html } from 'lit-element';

export class citasPac extends LitElement {



    render() {
        return html`

               
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        
        <div class="container-fluid">
        <div class="row">
            <div class="col"></div>
            <div class="col d-flex flex-lg-nowrap gap-5">
                <div class="card" style="width: 18rem;">
                    <img src="/src/img/esperar.png" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">Aplazar cita</h5>
                      <p class="card-text">Cambia la hora de tu cita para que puedas asistir el mismo día pero a distinta hora.</p>
                      <a href="../../../views/utlCitas.html" class="btn btn-primary">Ir a aplazar cita</a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;"    >
                    <img src="/src/img/cancel.png" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">Cancelar cita</h5>
                      <p class="card-text">Elige esta opción si no puedes asistir el día previsto y necesitas que te atendamos en otro día.</p>
                      <a href="../../../views/utlCitas.html" class="btn btn-primary">Ir a cancelar cita</a>
                    </div>
                </div>
            </div>
            <div class="col">
                
            </div>
        </div>
    </div>
        `;

    }
}

customElements.define('my-citaspac', citasPac);