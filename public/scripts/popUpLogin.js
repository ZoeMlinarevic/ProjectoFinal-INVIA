export function login() {
    const popUpsArray = document.querySelectorAll(".list-element-btn");

    const popUpCrearCuenta = popUpsArray[1];

    popUpCrearCuenta.addEventListener("click", (e) => {
        e.preventDefault(); 
        const popUpCrearCuentaSection = document.createElement("section");
        popUpCrearCuentaSection.className = "popUpCrearCuenta";

        popUpCrearCuentaSection.innerHTML = `<div class="popUpCrearCuenta-container">
        <div class="login-container">
            <div>
                <div class="login-container-titulo">
                    <h2 class="login-h2">Iniciar Sesión Estudiante</h2>
                    <box-icon name='x'color="white" id="login-cerrar"></box-icon>
                </div>
                <hr class="login-linea">
            </div>
            <div class="login-container-redes">
                <div class="crearCuentaEstudiante-container-div-redes login-redes">
                    <picture class="crearCuentaEstudiante-img-logoRedes">
                        <img src="../../assets/img/social/google.png" alt="google">
                    </picture>
                    <picture class="crearCuentaEstudiante-img-logoRedes">
                        <img src="../../assets/img/social/github.png" alt="github">
                    </picture>
                    <picture class="crearCuentaEstudiante-img-logoRedes">
                        <img src="../../assets/img/social/apple.png" alt="apple">
                    </picture>
                    <picture class="crearCuentaEstudiante-img-logoRedes">
                        <img src="../../assets/img/social/linkedin.png" alt="linkedin">
                    </picture>
                </div>
            </div>
            <h3 class="login-h3">O registrate <a href="/Crear-Cuenta-Estudiante"><span class="login-h3-span">Crea Cuenta</span></a></h3>
            <form action="/login" method="post" class="login-form">
                <input type="text" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Contraseña" required>
                <input type="submit" value="Iniciar Sesión">
            </form>
        </div>
    </div>
    `;

        document.body.appendChild(popUpCrearCuentaSection);
        exitPopUp();
    });
}

export function exitPopUp() {
    const popUpsSection = document.querySelector(".popUpCrearCuenta");

    if (popUpsSection) {
        const cerrar = document.querySelector("#login-cerrar");

        if (cerrar) {
            cerrar.addEventListener("click", (e) => {
                e.preventDefault();
                popUpsSection.remove();
            });
        }

        popUpsSection.addEventListener("click", () => {
            if (!e.target.closest("#login-cerrar")) {
                popUpsSection.remove();
            }
        });
    }
}
