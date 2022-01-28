import axios from '../_snowpack/pkg/axios.js';
import { registerImage } from './lazy.js';

const btnAdd = document.querySelector('#add');
const container = document.querySelector('#images');
const btnClear = document.querySelector('#clear');

export let imgCalled = 0;

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

    imgCalled ++;
    console.log(`Imagenes llamadas ${imgCalled} 📲`);
    registerImage(divImage);
}

const getImage = async () =>{
    const res = await axios.get(`https://randomfox.ca/images/${randomNumber()}.jpg`)
    const image = (res.request.responseURL);
    createImage(image);
    verifyImages();
}

export const verifyImages = ()=>{
    const images = document.querySelectorAll('img');
    const message = document.querySelector('.message');

    images.length === 0 ? noImagesText() : message ? document.body.removeChild(message) : null;
    images.length != 0 ? btnClear.setAttribute('class', 'clarActive') : images.length === 0 ? btnClear.removeAttribute('class') : null;
}

btnAdd.addEventListener('click', getImage);

verifyImages();