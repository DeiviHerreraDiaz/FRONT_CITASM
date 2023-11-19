import { LitElement, html } from 'lit-element';

class CitasMedicoDoctor extends LitElement {

    render() {
        return html `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

        <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                      <div class="card-body text-center text-primary border border-primary">
                        <h5 class="card-title">
                          <p class="card-text">CITAS DISPONIBLES</p>
                          03-01-2023
                        </h5>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">7:00am</li>
                          <li class="list-group-item">8:00am</li>
                          <li class="list-group-item">9:00am</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <div class="card-body text-center text-primary border border-primary">
                        <h5 class="card-title">
                          <p class="card-text">CITAS DISPONIBLES</p>
                          03-01-2023
                        </h5>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">7:00am</li>
                          <li class="list-group-item">8:00am</li>
                          <li class="list-group-item">9:00am</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <div class="card-body text-center text-primary border border-primary">
                        <h5 class="card-title">
                          <p class="card-text">CITAS DISPONIBLES</p>
                          03-01-2023
                        </h5>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">7:00am</li>
                          <li class="list-group-item">8:00am</li>
                          <li class="list-group-item">9:00am</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card">
                      <div class="card-body text-center text-primary border border-primary">
                        <h5 class="card-title">
                          <p class="card-text">CITAS DISPONIBLES</p>
                          03-01-2023
                        </h5>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">7:00am</li>
                          <li class="list-group-item">8:00am</li>
                          <li class="list-group-item">9:00am</li>
                        </ul>
                      </div>
                    </div>
                  </div>   
                  <div class="col">
                    <div class="card">
                      <div class="card-body text-center text-primary border border-primary">
                        <h5 class="card-title">
                          <p class="card-text">CITAS DISPONIBLES</p>
                          03-01-2023
                        </h5>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">7:00am</li>
                          <li class="list-group-item">8:00am</li>
                          <li class="list-group-item">9:00am</li>
                        </ul>
                      </div>
                    </div>
                  </div>   
                  <div class="col">
                    <div class="card">
                      <div class="card-body text-center text-primary border border-primary">
                        <h5 class="card-title">
                          <p class="card-text">CITAS DISPONIBLES</p>
                          03-01-2023
                        </h5>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">7:00am</li>
                          <li class="list-group-item">8:00am</li>
                          <li class="list-group-item">9:00am</li>
                        </ul>
                      </div>
                    </div>
                  </div>    
        </div>
          </div>
        </div>
      </div>
        `
}
}

customElements.define('citas-doc', CitasMedicoDoctor);