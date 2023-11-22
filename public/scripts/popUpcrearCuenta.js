export function crearCuenta() {
    const popUpsArray = document.querySelectorAll(".list-element");

    const popUpCrearCuenta = popUpsArray[4];

    popUpCrearCuenta.addEventListener("click", (e) => {
        e.preventDefault();

        const img = new Image();
        img.src = "../../public/assets/img/paisaje-Buenos_Aires.png";
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
                    <a href="#" class="popUpCrearCuenta-content-a popUpCrearCuentaA1">Comenzar</a>
                </div>
            </div>
            <div class="popUpCrearCuenta-grilla-content">
                <div>
                    <h2>INVIA <span>ESTUDIANTES</span></h2>
                    <a href="#" class="popUpCrearCuenta-content-a popUpCrearCuentaA2">Comenzar</a>
                </div>
            </div>
        </div>
    </div>
    `;

        document.body.appendChild(popUpCrearCuentaSection);
        exitPopUp();
    });
}

// cambiar cuando completes el popUpCrearCuenta

export function exitPopUp() {
    const popUpsSection = document.querySelector(".popUpCrearCuenta");

    popUpsSection.addEventListener("click", (e) => {
        e.preventDefault();
        popUpsSection.remove();
    });
}