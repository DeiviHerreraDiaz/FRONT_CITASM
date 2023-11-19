import { LitElement, html } from 'lit-element';

    

export class citasPac extends LitElement {

    
    render() {

        const aplazo = document.getElementById('apl1')

        aplazo.addEventListener('click', function(){
            alert("La cita se ha aplazado")
        });

        const aplazo2 = document.getElementById('apl2')

        aplazo.addEventListener('click', function(){
            alert("La cita se ha aplazado")
        })

        const eliminar = document.getElementById('eliminarCita1')

        aplazo.addEventListener('click', function(){
            alert("La cita se ha cancelado")
        })

        const eliminar2 = document.getElementById('eliminarCita2')

        aplazo.addEventListener('click', function(){
            alert("La cita se ha cancelado")
        })

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
                        
                        <button id="eliminarCita1" type="submit"  class="btn btn-login" style="background-color: rgb(255, 113, 113)!important;">
                          <b>Cancelar cita</b>
                      </button>
                    </div>
                </div>
                </div>
                
                <div class="col  flex-lg-nowrap gap-3 " id="cita2">
                <div class="card card-custom mb-2">
                    <div class="card-header  text-center"   style="background-color: rgb(56, 172, 205) !important;"> <h4> Cardiologia </h4>  </div>
                    <div class="card-body text-center">
                        <h5> 12 / 11 / 2023 </h5> <br>
                        <h5>17:00</h5> 
                    </div> 
                    <div class="card-footer">   <div class="text-center">
                        
                            <button  id="apl2" type="submit"  class="btn btn-login" style="background-color: rgb(255, 255, 0)!important;">
                                <b>Aplazar cita</b>
                            </button>
                        
                        <button id="eliminarCita2" type="submit"  class="btn btn-login" style="background-color: rgb(255, 113, 113)!important;">
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

customElements.define('my-utlcitas', citasPac);