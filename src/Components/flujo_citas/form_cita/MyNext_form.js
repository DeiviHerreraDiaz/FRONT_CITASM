import { LitElement, html } from 'lit-element'
import '@fullcalendar/web-component/global'

class MyNext_form extends LitElement {

 
  render() {
    return html`

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    
    <style>
    
    .card-custom {
        width: 200px; 
        height: 250px; 
   }
  
   img {
    width: 50%;
    height: 50%; 
    margin-bottom: 1%;
   } 
  
   h4{
    font-size: 100%; 
    margin-bottom: 0%;
   }
  
   button{ 
   background-color:rgb(56, 172, 205)
   }
  </style>
  
   <div class="container mt-5">
    <div class="row">
        <!-- Primera Fila -->
        <div class="col-md-4 mb-4">
            <div class="card card-custom mb-4">
                <div class="card-header  text-center"> HORA 6:00 </div>
                <div class="card-body text-center"> <img src="../img/hospital.svg">  <br>
                <H4> Hospital Las Mercedes</H4> 
                </div>
                
                  <div class="card-footer"><div class="text-center">  <button type="button" class=" btn bg-primary text-center">AGENDAR</button> </div>  </div>
               
            </div>
        </div>
  
        <div class="col-md-4 mb-4">
            <div class="card card-custom mb-4">
                <div class="card-header  text-center">HORA 7:00</div>
                <div class="card-body text-center"> <img src="..img/hospital.svg"> <br> 
              <h4>   Hospital General Santander </h4>   </div>
              
                <div class="card-footer"><div class="text-center">  <button type="button" class=" btn bg-primary text-center">AGENDAR</button> </div>  </div>
              
            </div>
        </div>
  
        <div class="col-md-4 mb-4">
            <div class="card card-custom mb-4">
                <div class="card-header  text-center">HORA 9:30</div>
                <div class="card-body text-center"><img src="..img/hospital.svg">
                  <h4> Hospital La Marichuela </h4>
                 </div>
                 
                 <div class="card-footer"><div class="text-center">  <button type="button" class=" btn bg-primary text-center">AGENDAR</button> </div>  </div>
            </div>
        </div>
    </div>
  
    <!-- Segunda Fila -->
    <div class="row">
        <div class="col-md-4 mb-4">
            <div class="card card-custom mb-4">
                <div class="card-header  text-center  text-center">HORA 11:00</div>
                <div class="card-body text-center"><img src="..img/hospital.svg"> 
                <br> 
                <h4>Hospital Manuela Beltran </h4>
              </div>
              <div class="card-footer"><div class="text-center">  <button type="button" class=" btn bg-primary text-center">AGENDAR</button> </div>  </div>
            </div>
        </div>
  
        <div class="col-md-4 mb-4">
            <div class="card card-custom mb-4">
                <div class="card-header  text-center">HORA 12:00</div>
                <div class="card-body text-center"><img src="..img/hospital.svg">
                <br>
               <h4>Hospital Vista Hermosa </h4>
              </div>
              <div class="card-footer"><div class="text-center">  <button type="button" class=" btn bg-primary text-center">AGENDAR</button> </div>  </div>
            </div>
        </div>
  
        <div class="col-md-4 mb-4">
            <div class="card card-custom mb-4">
                <div class="card-header  text-center">HORA 14:00</div>
                <div class="card-body text-center"><img src="..img/hospital.svg">
                <br>
                  <h4>Hospital Sumapaz</h4>
              </div>
              <div class="card-footer"><div class="text-center">  <button type="button" class=" btn bg-primary ">AGENDAR</button> </div>  </div>
            </div>
        </div>
    </div>
  </div>   

  
    `
  }
  /* } */  
}customElements.define('my-nextform', MyNext_form);