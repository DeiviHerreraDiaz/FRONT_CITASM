import { LitElement, html } from "lit-element";
import styleScc from '../../css/dashboard/dashboardStyle'

export class Hospital extends LitElement {

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
                    <img src="https://pectusup.com/wp-content/uploads/2019/02/IMG_20171129_113342889.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <div class="text-center">
                      <h5 class="card-title">HOSPITAL UNIVERSITARIO CLINICA SAN RAFAEL</h5>
                            <p class="card-text-"<h6>Ubicado en </h6> <h7>Cra. 8 17 Sur-45, Bogotá</h7></p>
                            <a href="../../../views/citasdisponibles.html"  class="btn btn-primary">Consulte citas disponibles</a>
                        </div>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="https://1.bp.blogspot.com/-Gk3btKlzu_8/XhO1pywNhgI/AAAAAAAAcWI/65VZxftuoEoAII-O8waoGgxbJkmUgFxjQCLcBGAsYHQ/s320/CLINICA-DEL-NORTE-c-clinicadelnorte.org.jpg%09%20%0A" class="card-img-top" alt="">
                    <div class="card-body">
                        <div class="text-center">
                        <h5 class="card-title">CLINICA DE EL NORTE</h5>
                       
                      <p class="card-text-"><h6>Ubicado en </h6> <h7>Av. 38 #59-50, Hermosa Provincia, Bello, Antioquia</h7></p>
                      <a href="../../../views/citasdisponibles.html"  class="btn btn-primary">Consulte citas diponibles </a>
                    </div>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="https://pectusup.com/wp-content/uploads/2019/02/Hospital-Militar-Central.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <div class="text-center">
                            <h5 class="card-title">HOSPITAL MILITAR</h5>

                            <p class="card-text-"><h6>Ubicado en </h6> <h7>Tv. 3C #49-02, Localidad de Chapinero, Bogotá, Cundinamarca</h7></p>
                            <a href="../../../views/citasdisponibles.html" class="btn btn-primary">Consulte citas diponibles </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                &nbsp.
            </div>
        </div>
    </div>
        `
    }
}

customElements.define('my-hospital', Hospital);