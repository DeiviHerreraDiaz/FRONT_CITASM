const loginform = document.querySelector('#loginform')

loginform.addEventListener('submit', (e)=>{

    e.preventDefault()
    const nombres = document.querySelector('#nombres').value;
    const contrasena = document.querySelector('#contrasena').value;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const doctor = users.find(user => user.nombres == nombres && user.contrasena == contrasena && user.rol == 1);
    const paciente = users.find(user => user.nombres == nombres && user.contrasena == contrasena && user.rol == 2);

    if(!doctor && !paciente){
        alert("Usuario incorrecto")
        window.location.href = '../../../views/login.html';
    } else if (doctor){
        alert(`Bienvenido Doctor ${doctor.nombres}`);
        window.location.href = '../../../views/dashboardDoctor.html';
        localStorage.setItem('login_success', JSON.stringify(doctor))

    } else if (paciente) {
        alert(`Bienvenido Paciente ${paciente.nombres}`);
        window.location.href = '../../../views/dashboard.html';

        localStorage.setItem('login_success', JSON.stringify(paciente))
    } 




})

