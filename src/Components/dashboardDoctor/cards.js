import { LitElement, html } from "lit-element";
import styleScc from '../../css/dashboard/dashboardStyle'

let persona = JSON.parse(localStorage.getItem(["login_success"]));
    console.log(persona);

let datos = JSON.parse(localStorage.getItem("users"));
    console.log(datos);

export class CardsDashboardDoc extends LitElement {

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
                      <h5 class="card-title">Crear citas disponibles</h5>
                      <p class="card-text">Crea espacios para tus citas, escoge tu horario para atender clientes.</p>
                      <a href="../../../views/creardisponibilidad.html" class="btn btn-primary">Ir a agendar cita</a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;"    >
                    <img src="https://www.atenciondellamadas.net/wp-content/uploads/2019/10/gestion-citas-medicas.svg" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">Administra tus citas</h5>
                      <p class="card-text">Consulte que citas tiene pendientes y adminstrelas</p>
                      <a href="../../../views/verCitas.html" class="btn btn-primary">Ir a administrar cita</a>
                    </div>
                </div>
            </div>
            <div class="col">
            </div>
        </div>
    </div>
        `
    }
}

customElements.define('my-cards-doc', CardsDashboardDoc);