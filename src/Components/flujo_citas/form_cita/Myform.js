import { LitElement, html } from 'lit-element'
import '@fullcalendar/web-component/global'

class MyForm extends LitElement {

  firstUpdated() {
   
  }
  render() {
    return html`

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
    
    <div class="container">
    <div class="row">
        <div class="col-12 col-md-6 mx-auto mt-5">
            <div class="card mt-md-5">
                <div class="card-header     text-center"  style=" background-color:rgb(56, 172, 205);">
                    <h5>AGENDA TU CITA</h5>
                </div>
                <div class="card-body ">
                    <form >
                        <div class="mb-3">
                           <label for="documento" class="form-label">DOCUMENTO</label>
                           <input type="text" class="form-control">
                            <label for="fecha" class="form-label">Fecha:</label>
                            <input type="date" id="fecha" name="fecha" class="form-control">
                        </div>
                        <div class="text-center" >
                        <a hrfe="../../../../views/next_form.html">
                        <button class="btn text-center" style=" background-color:rgb(56, 172, 205);">Enviar</button>
                       </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


    

    `
  }
  /* } */  
}customElements.define('my-form', MyForm);