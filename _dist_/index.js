import axios from '../_snowpack/pkg/axios.js';

const btnAdd = document.querySelector('#add');
const container = document.querySelector('#images');

const randomNumber = () => Math.floor(Math.random() * 124 );

const noImagesText = () => {
    const message = document.createElement('h3');
    message.textContent = 'No hay imagenes cargadas';
    message.setAttribute('class', 'message');
    document.body.appendChild(message);
}

const createImage = (image) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    container.appendChild(newImage);
}

const getImage = async () =>{
    const res = await axios.get(`https://randomfox.ca/images/${randomNumber()}.jpg`)
    const image = (res.request.responseURL);
    createImage(image);
    verifyImages();
}

const verifyImages = ()=>{
    const images = document.querySelectorAll('img');
    const message = document.querySelector('.message');

    images.length === 0 ? noImagesText() : message ? document.body.removeChild(message) : null;
}

btnAdd.addEventListener('click', getImage);

verifyImages();