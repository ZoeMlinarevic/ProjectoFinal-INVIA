import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/+esm';

export function validarFormularioNewsletter() {
    const nesletterform = document.querySelector('#nesletterform');
    const nesletterbutton = document.querySelector('#nesletterbutton');
    
    nesletterbutton.addEventListener('click', (e) => {
        e.preventDefault();

        const email = document.querySelector('#newsletter').value;
        const emailExpRegular = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
        const emailValidado = emailExpRegular.test(email);

        if (!emailValidado) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Colocaste el Email incorrectamente!',
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: '¡Se ha enviado tu email exitosamente!',
                text: '¡Buen trabajo!',
            });
            setTimeout(() => {
                console.log('enviando formulario');
                nesletterform.submit();
            }, 1000);
        }
    });
}