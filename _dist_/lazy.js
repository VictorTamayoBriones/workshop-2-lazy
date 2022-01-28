const isIntersecting = (entry) =>{
    return entry.isIntersecting
}

const loadImage = (entry) =>{
    const containerImage = entry.target;
    const img = containerImage.firstChild;
    const url = img.dataset.src;
    img.src = url;
    containerImage.removeAttribute('class');
    containerImage.setAttribute('class', 'imgContainer');
    //Dejar de observar
    observer.unobserve(containerImage);
}

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting)
        .forEach(loadImage);
});

export const registerImage = (img) =>{
    //Intersection observer
    observer.observe(img);
}