import { LitElement, html } from "lit-element";
import styleScc from '../../css/dashboard/dashboardStyle'

export class CardsDashboard extends LitElement {

    static get styles() {
        return [styleScc]
    }

    render() {
        return html `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

        <div class="container-fluid">
        <div class="row">
            <div class="col"></div>
            <div class="col d-flex flex-lg-nowrap gap-5">
                <div class="card" style="width: 18rem;">
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSILS9B32Z5e8Q1vygvV8D-cXz584VybcjI0txqXDZEGdcBm0ha" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">Agendar cita</h5>
                      <p class="card-text">Le brindamos el apoyo en cuanto a las necesidades de salud y enfermedad etc.</p>
                      <a href="#" class="btn btn-primary">Ir a agendar cita</a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="https://www.atenciondellamadas.net/wp-content/uploads/2019/10/gestion-citas-medicas.svg" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">Administrar cita</h5>
                      <p class="card-text">Consulte que citas tiene pendientes o si quiere cancelarla por algún motivo en especial</p>
                      <a href="#" class="btn btn-primary">Ir a administrar cita</a>
                    </div>
                </div>
            </div>
            <div class="col">
            <img src="/src/img/Doctora.png" alt="imagen doctora" class="img-doc" style="width:500px; margin-right:80px">
            </div>
        </div>
    </div>
        `
    }
}

customElements.define('my-cards', CardsDashboard);