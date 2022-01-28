import { verifyImages } from './index.js';
const btnClear = document.querySelector('#clear');


btnClear.addEventListener('click', ()=>{
    const imagesContainer = document.querySelector('#images');
    const images = imagesContainer.childNodes;
    const imagesAsArr = [...images];
    imagesAsArr.map((img)=>{
        img.remove();
    })
    verifyImages();
});