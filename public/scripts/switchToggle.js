export function switchToggle() {
    const buttonToggle = document.querySelector("#switch")
    buttonToggle.addEventListener("click", () => {
        document.body.classList.toggle("lightMode");
    });
}