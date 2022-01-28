let imgCargadas = 0;

const isIntersecting = (entry) =>{
    return entry.isIntersecting
}

const loadImage = async (entry) =>{
    const containerImage = entry.target;
    const img = containerImage.firstChild;
    const url = img.dataset.src;
    img.src = await url;
    
    //Dejar de observar
    imgCargadas++;
    console.log(`Imagenes cargadas ${imgCargadas} 👁`);
    observer.unobserve(containerImage);

    containerImage.removeAttribute('class');
    containerImage.setAttribute('class', 'imgContainer');
}

const observer = new IntersectionObserver((entries)=>{
    
    entries.filter(isIntersecting)
        .forEach(loadImage);
});

export const registerImage = (img) =>{
    //Intersection observer
    observer.observe(img);
}