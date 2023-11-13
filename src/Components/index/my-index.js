import { LitElement, html } from "lit-element";
import styleScc from '../../css/index/my-indexStyle'

export class MyIndex extends LitElement {

    static get styles(){
        return [styleScc];
    }

    render() {
        return html
        `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: rgb(56, 172, 205) !important;">
            <a class="navbar-brand perfil" href="#">CITAS MEDICAS S.A.S</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav menu-h" >
                <li class="nav-item active">
                <a class="nav-link" href="../../../views/dashboard.html">Iniciar Sesión</a>
                </li>
                <li class="nav-item active">
                <a class="nav-link" href="../views/formDoctor.html">Registrar Doctor</a>
                </li>
                <li class="nav-item active">
                <a class="nav-link" href="../views/formCliente.html">Registrar Cliente</a>
                </li>
                </ul>
            </div>
        </nav><br>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="about-img">
                        <img src="/src/img/img1.png" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <div class="about-text text-black"><br><br><br>
                        <h3 class="texto-index">Bienvenido a nuestra plataforma de citas médicas</h2>
                        <p class="texto-index">
                            ¡Gracias por elegir nuestra plataforma! Estamos aquí para hacer que la gestión de tus citas médicas sea más sencilla y conveniente.
                            Tu Salud, Tu Prioridad
                            En Citas Medicas S.A.S, entendemos que tu salud es lo más importante. Nuestra misión es facilitar el acceso a la atención médica que necesitas.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <div class="about-text text-black">
                        <h3 class="texto-index">Gestiona tus citas en un solo lugar</h3>
                        <p class="texto-index">Olvídate de las largas esperas al teléfono. Con nuestra plataforma, puedes gestionar tus citas médicas en un solo lugar, en cualquier momento
                        y desde cualquier dispositivo.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="about-img">
                        <img src="/src/img/img2.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div><br><br>

            <div class="row">
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="about-img">
                        <img src="/src/img/img3.png" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <div class="about-text text-black">
                        <h3 class="texto-index">Profesionales médicos de confianza</h3>
                        <p class="texto-index">Trabajamos con una red de profesionales médicos altamente calificados. Puedes estar seguro de recibir atención de calidad.</p>
                    </div>
                </div>
            </div><br><br>

            <div class="row">
                <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <div class="about-text text-black">
                        <h3 class="texto-index">Citas a tu alcance</h3>
                        <p class="texto-index">Desde exámenes de rutina hasta consultas de especialistas, te ayudamos a programar citas médicas de manera rápida y sencilla.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="about-img">
                        <img src="/src/img/img4.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div><br><br>

            <div class="row">
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="about-img">
                        <img src="/src/img/img5.png" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <div class="about-text text-black"><br><br><br>
                        <h3 class="texto-index">Seguridad y Privacidad</h2>
                        <p class="texto-index">
                            Tu información personal y médica está segura con nosotros. Nos tomamos muy en serio la protección de tus datos.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Odontología</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Cardiología</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Optometría</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Dermatología</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Oftamología</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Otorrinolaringología</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Ginecologia</a></li>
        
          </ul>
          <p class="text-center text-muted">&copy; 2023 Citas Médicas. Colombia, Bogotá D.C.</p>
        </footer>
      </div>

        `;
    }
}

customElements.define('my-index', MyIndex);