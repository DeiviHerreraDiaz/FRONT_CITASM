import { LitElement, html } from 'lit-element';

    

export class citasPac extends LitElement {

    aplazar(){
        alert="La cita se ha aplazado para las 17:00"
    }
    
    cancelar(){
        alert="La cita se ha cancelado"
    }

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
                        
                            <button @click="${this.aplazar}" type="submit"  class="btn btn-login" style="background-color: rgb(255, 255, 0)!important;">
                                <b>Aplazar cita</b>
                            </button>
                        
                        <button @click="${this.cancelar}" type="submit"  class="btn btn-login" style="background-color: rgb(255, 113, 113)!important;">
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
                        
                            <button  @click="${this.aplazar}" type="submit"  class="btn btn-login" style="background-color: rgb(255, 255, 0)!important;">
                                <b>Aplazar cita</b>
                            </button>
                        
                        <button @click="${this.cancelar}" type="submit"  class="btn btn-login" style="background-color: rgb(255, 113, 113)!important;">
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