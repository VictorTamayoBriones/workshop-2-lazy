import axios from 'axios';
import { registerImage } from './lazy';

const btnAdd = document.querySelector('#add');
const container = document.querySelector('#images');

const randomNumber = () => Math.floor(Math.random() * 123 ) * 1;

const noImagesText = () => {
    const message = document.createElement('h3');
    message.textContent = 'No hay imagenes cargadas';
    message.setAttribute('class', 'message');
    document.body.appendChild(message);
}

const createImage = (image) => {
    const divImage = document.createElement('div');
    divImage.setAttribute('class', 'imgLoader');
    container.appendChild(divImage);
    
    
    const newImage = document.createElement('img');
    newImage.setAttribute('data-src', image);
    divImage.appendChild(newImage);

    registerImage(divImage);
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