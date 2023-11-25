import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/+esm';

function validacionLetra(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function validarLogin() {

    const formCrearCuenta = document.querySelector("#crearCuentaEstudiante-container-form");

    formCrearCuenta.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        const namevalidacionLetra = validacionLetra(name);

        const apellido = document.querySelector("#apellido").value;
        const apellidovalidacionLetra = validacionLetra(apellido);

        const email = document.querySelector("#email").value;
        const emailExpRegular = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
        const emailValidado = emailExpRegular.test(email);
        
        const password = document.querySelector("#password").value;
        const passwordExpRegular = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,20}$/gm;
        const passwordValidado = passwordExpRegular.test(password);

        if (!emailValidado || namevalidacionLetra === "" || apellidovalidacionLetra === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Colocaste los datos incorrectamente!',
            });
        } else if (!passwordValidado) {
            Swal.fire({
                icon: 'error',
                html: 'Colocaste la contraseña incorrectamente! <br> La contraseña debe contener 1 número (0-9) <br> La contraseña debe contener 1 letra mayúscula <br> La contraseña debe contener 1 letra minúscula <br> La contraseña debe contener 1 número no alfanumérico <br> La contraseña es de 8 a 20 caracteres sin espacio',
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: '¡Se ha creado exitosamente tu cuenta!',
                text: '¡Buen trabajo!',
            });
            setTimeout(() => {
                formCrearCuenta.submit();
            }, 1500);
        }
    });
}

validarLogin();