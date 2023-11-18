import { LitElement, html } from "lit-element";
import styleScc from '../../css/dashboard/dashboardStyle'

export class Disponibilidad extends LitElement {

    static get styles() {
        return [styleScc]
    }

    render() {
        return html `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="card">
                        <div class="card-header">
                            <h4>Formulario de Información</h4>
                        </div>
                        <div class="card-body">
                            <!-- Formulario -->
                            <form>
                                <div class="form-group">
                                    <label for="fecha">DIA DE DISPONIBILIDAD</label>
                                    <input type="date" class="form-control" id="fecha" name="fecha" required>
                                </div>
                                <div class="form-group">
                                    <label for="opciones">Opciones:</label>
                                    <select class="form-select" id="opciones" name="opciones" required>
                                      
                                            <option value="">Seleccione la hora de disponibilidad</option>
                                            <option value="7:00 AM">7:00 AM</option>
                                            <option value="8:00 AM">8:00 AM</option>
                                            <option value="9:00 AM">9:00 AM</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="11:00 AM">11:00 AM</option>
                                            <option value="12:00 PM">12:00 PM</option>
                                            <option value="1:00 PM">1:00 PM</option>
                                            <option value="2:00 PM">2:00 PM</option>
                                            <option value="3:00 PM">3:00 PM</option>
                                            <option value="4:00 PM">4:00 PM</option>
                                            <option value="5:00 PM">5:00 PM</option>
                                    </select>
                                </div>
                                <div class="text-center">
                                <button class="btn btn-primary" style="margin-top: 5% ; background-color: rgb(56, 172, 205) !important;">Enviar</button>
                                </div>
                            </form>
                            <!-- Fin del formulario -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('my-disponivilidad', Disponibilidad);