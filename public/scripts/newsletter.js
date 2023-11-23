export function validarFormularioNewsletter() {
    const nesletterform = document.querySelector('#nesletterform');
    const nesletterbutton = document.querySelector('#nesletterbutton');
    
    nesletterbutton.addEventListener('click', (e) => {
        e.preventDefault();

        const email = document.querySelector('#newsletter').value;

        if (email == "") {
            console.log('coloque email');
        } else {
            console.log(`${email} click`);
            nesletterform.submit();
        }
    });
}