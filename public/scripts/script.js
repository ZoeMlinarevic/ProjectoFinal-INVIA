// Espera a que el contenido HTML del documento esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el modal y su contenido del DOM
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');

    // Selecciona todos los elementos con la clase 'modal-link'
    const modalLinks = document.querySelectorAll('.modal-link');

    // Itera sobre cada enlace modal encontrado
    modalLinks.forEach(link => {
        // Agrega un evento de clic a cada enlace modal
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Obtiene la URL del video del atributo 'href' del enlace modal clicado
            const videoUrl = this.getAttribute('href');

            // Actualiza el contenido del modal con el video y un botón de cierre
            modalContent.innerHTML = `<span class="close">&times;</span><iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;

            // Muestra el modal al cambiar el estilo de visualización a 'block'
            modal.style.display = 'block';
        });
    });

    // Selecciona el botón de cierre del modal
    const closeBtn = document.querySelector('.close');
    // Agrega un evento de clic al botón de cierre del modal
    closeBtn.addEventListener('click', function() {
        // Oculta el modal al cambiar el estilo de visualización a 'none'
        modal.style.display = 'none';
        // Limpia el contenido del modal
        modalContent.innerHTML = '';
    });

    // Agrega un evento de clic a la ventana
    window.addEventListener('click', function(event) {
        // Cierra el modal si el usuario hace clic fuera del contenido del modal
        if (event.target === modal) {
            // Oculta el modal al cambiar el estilo de visualización a 'none'
            modal.style.display = 'none';
            // Limpia el contenido del modal
            modalContent.innerHTML = '';
        }
    });
});

