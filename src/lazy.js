const isIntersecting = (entry) =>{
    return entry.isIntersecting
}

const action = (entry) =>{
    const nodo = entry.target;
    console.log('Zorro visible');

    //Dejar de observar
    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting)
        .forEach(action);
});

export const registerImage = (img) =>{
    //Intersection observer
    observer.observe(img);
}