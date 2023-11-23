export function validarFormularioNewsletter() {
    const nesletterform = document.querySelector('#nesletterform');
    const nesletterbutton = document.querySelector('#nesletterbutton');
    
    nesletterbutton.addEventListener('click', (e) => {
        e.preventDefault();

        const email = document.querySelector('#newsletter').value;
        const emailExpRegular = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
        const emailValidado = emailExpRegular.test(email);

        if (!emailValidado) {
            console.log(`correo invalido ${email}`);
        } else {
            nesletterform.submit();
        }
    });
}