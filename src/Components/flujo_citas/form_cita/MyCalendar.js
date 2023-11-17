import { LitElement, html } from 'lit-element'
import '@fullcalendar/web-component/global'
import img from "../img/"
class MyCalendar extends LitElement {

  firstUpdated() {
   
  }
  render() {
    return html`

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
   

    <div class="container"> 
    <div class="card text-center  col-5">
        <div class="card-header bg-primary">
       AGENTA TU CITA 
        </div>
        <div class="card-body absolute">   
         <div class="row">
        <div class="col center">
            <form action="">    
          <label for="birthdate">FECHA</label>
          <input id="birthdate" type="date" class="form-control"> 
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            AGENDAR </button>
        </form>
        </div>
      </div>
         
        </div>
        <div class="card-footer text-body-secondary">
        </div>
      </div>

      
  <!-- Button trigger modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Horas</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <select name="" id="">
            <option>7:00 AM</option>
            <option>8:00 AM</option>
            <option>9:00 AM</option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
          </select>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary"  data-bs-dismiss="modal">Reservar</button>
        </div>
      </div>
    </div>
  </div>

    `
  }
  /* } */  
}customElements.define('my-calendar', MyCalendar);
/* render(){
return html`
<div id="calendar"></div>
`
}

customElements.define('my-calendar',MyCalendar) */