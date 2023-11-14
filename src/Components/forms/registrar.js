// REGISTRAR

const signupForm = document.querySelector("#signupForm")

signupForm.addEventListener('submit', (e) => {

    e.preventDefault()

    // Obtén los valores de los campos utilizando los ids
    const nombres = document.querySelector('#nombres').value
    const apellidos = document.querySelector('#apellidos').value
    const tipoDocumento = document.querySelector('#tipoDocumento').value
    const numeroDocumento = document.querySelector('#numeroDocumento').value
    const correoElectronico = document.querySelector('#correoElectronico').value
    const contrasena = document.querySelector('#contrasena').value
    const genero = document.querySelector('#genero').value
    const numeroCelular = document.querySelector('#numeroCelular').value
    const ciudad = document.querySelector('#ciudad').value
    const certificadoProfesional = document.querySelector('#certificadoProfesional').value
    const fechaNacimiento = document.querySelector('#fechaNacimiento').value
    const rol = document.querySelector('#rol').value

    // Obtén la lista de usuarios del localStorage
    const users = JSON.parse(localStorage.getItem("users")) || []

    // Agrega el nuevo usuario a la lista
    users.push({
        nombres: nombres,
        apellidos: apellidos,
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
        correoElectronico: correoElectronico,
        contrasena: contrasena,
        genero: genero,
        numeroCelular: numeroCelular,
        ciudad: ciudad,
        certificadoProfesional: certificadoProfesional,
        fechaNacimiento: fechaNacimiento,
        rol: rol
    })

    // Guarda la lista actualizada de usuarios en el localStorage
    localStorage.setItem("users", JSON.stringify(users))

    // Muestra una alerta indicando que el registro fue exitoso
    alert("Registro exitoso")
    window.location.href = '../index.html'

    // Imprime la lista de usuarios en la consola
    console.log(users)
})
