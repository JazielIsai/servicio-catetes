document.addEventListener('DOMContentLoaded', () => {
    iniciarApp();
})


const iniciarApp = () => {
    createGallery();
}

const createGallery = () => {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 8; i++) {
        const picture = document.createElement('picture');
        picture.innerHTML = `
            <source srcset="./build/img/img-galeria/${i}.webp" type="image/webp">
            <img loading="lazy" width = "100" height="100" src="./build/img/img-galeria/${i}.jpg" alt="imagenes de cateteres">
        `;

        picture.onclick = function() {
            wachImage(i);
        }

        galeria.appendChild(picture);
    }
}

const wachImage = (idImg) => {
    const picture = document.createElement('picture');
    picture.innerHTML = `
        <source srcset = "./build/img/img-galeria/${idImg}.webp" type="image/webp">
        <img loading="lazy" width="500" height="550" src="./build/img/img-galeria/${idImg}.jpg" alt = "imagen de cateters">   
    `;

    //crear el overley con la img
    const overlay = document.createElement('div');
    overlay.appendChild(picture);
    overlay.classList.add('overlay');
    overlay.onclick = () => {
        const body = document.querySelector('body');
        body.classList.remove('figar-body');

        overlay.remove();
    }

    //Button for closed the window/modal
    const closeModal = document.createElement('p');
    closeModal.textContent = 'X';
    closeModal.classList.add('btn-close');
    closeModal.onclick = () => {
        const body = document.querySelector('body');
        body.classList.remove('figar-body');
        overlay.remove();
    }
    overlay.appendChild(closeModal);

    //agregarlo al html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('figar-body');
    

}