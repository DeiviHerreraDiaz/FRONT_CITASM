import { LitElement, html } from 'lit-element';



const declinarCita = document.getElementById("declinarCita")
        const declinar = document.getElementById("dcl")
        const aceptar = document.getElementById("apl1")
        

        aplazar.addEventListener('click', function(){
            if (aceptar){
                alert("Ha aceptado la cita doctor")
            }else{
                console.log('La cita no se ha aceptado.');
            }
        })

        declinar.addEventListener('click', function()
        {
            if (declinar){
                alert("Ha denegado esta cita doctor")
            } else{
                console.log('No puede rechazar esta cita');
            }
});

export class citasDoc extends LitElement {

    
    
    render() {
        return html`
        <div class="container">
        <div class="row mb-2 align-items-center">
            <div class="col"></div>
            
            <div class="col"></div>
        </div>
      
        <div class="row mb-3 align-items-center">
            <div class="col"></div>
            <div class="col  flex-lg-nowrap gap-3 " id="cita1">
                <div class="card card-custom mb-2">
                    <div class="card-header  text-center"   style="background-color: rgb(56, 172, 205) !important;"> <h4> Dermatologia </h4>  </div>
                    <div class="card-body text-center">
                        <h5> 12 / 11 / 2023 </h5> <br>
                        <h5>13:00</h5> 
                    </div> 
                    <div class="card-footer">   <div class="text-center">
                        
                            <button id="apl1" type="submit"  class="btn btn-login" style="background-color: rgb(255, 255, 0)!important;">
                                <b>Aplazar cita</b>
                            </button>
                        
                        <button id="dcl" type="submit"  class="btn btn-login" style="background-color: rgb(255, 113, 113)!important;">
                          <b>Cancelar cita</b>
                      </button>
                    </div>
                </div>
                </div>
                
                <div class="col  flex-lg-nowrap gap-3 " id="cita2">
                <div class="card card-custom mb-2">
                    <div class="card-header  text-center"   style="background-color: rgb(56, 172, 205) !important;"> <h4> Dermatologia </h4>  </div>
                    <div class="card-body text-center">
                        <h5> 12 / 11 / 2023 </h5> <br>
                        <h5>13:00</h5> 
                    </div> 
                    <div class="card-footer">   <div class="text-center">
                        
                            <button id="apl1" type="submit"  class="btn btn-login" style="background-color: rgb(255, 255, 0)!important;">
                                <b>Aplazar cita</b>
                            </button>
                        
                        <button id="eliminarCita" type="submit"  class="btn btn-login" style="background-color: rgb(255, 113, 113)!important;">
                          <b>Cancelar cita</b>
                      </button>
                    </div>
                </div>
                </div>

            </div>
            
            <div class="col"></div>
       </div>
        `;

    }
}

customElements.define('my-citasdoc', citasDoc);