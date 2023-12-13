export function crearCuenta() {
    const popUpsArray = document.querySelectorAll(".list-element-btn");

    const popUpCrearCuenta = popUpsArray[0];

    popUpCrearCuenta.addEventListener("click", (e) => {
        e.preventDefault();

        const img = new Image();
        img.src = "../../public/assets/img/paisaje-Buenos_Aires.png" && "../assets/img/paisaje-Buenos_Aires.png"; // NO PUEDE COLOCAR IMG EN LOCAL Y REMOTO AL MISMO TIEMPO 
        img.alt = "paisaje-Buenos_Aires";

        const popUpCrearCuentaSection = document.createElement("section");
        popUpCrearCuentaSection.className = "popUpCrearCuenta";

        popUpCrearCuentaSection.innerHTML = `<div class="popUpCrearCuenta-container">
        <div class="popUpCrearCuenta-container-grilla">
            <picture>
                <img src=${img.src} alt=${img.alt}>
            </picture>
            <div class="popUpCrearCuenta-grilla-content">
                <div>
                    <h2>INVIA <span>EMPRESAS</span></h2>
                    <a href="/Crear-Cuenta-Empresa" class="popUpCrearCuenta-content-a popUpCrearCuentaA1">Comenzar</a>
                </div>
            </div>
            <div class="popUpCrearCuenta-grilla-content">
                <div>
                    <h2>INVIA <span>ESTUDIANTES</span></h2>
                    <a href="/Crear-Cuenta-Estudiante" class="popUpCrearCuenta-content-a popUpCrearCuentaA2">Comenzar</a>
                </div>
            </div>
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
        popUpsSection.addEventListener("click", (e) => {
            const clickedElement = e.target;

            if (!clickedElement.closest(".popUpCrearCuenta-container-grilla")) {
                e.preventDefault();
                popUpsSection.remove();
            }
        });
    }
}
