
let totalImg = 0;

const imgContainer = document.querySelector('.container-imagenes');
const form = document.querySelector('form');
const button = document.querySelector('button');
const span = document.querySelector('span');
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);
    console.log(data);

    const imgUrl = data.imgUrl; 

    const imgNode = document.createElement('img');
    imgNode.src = imgUrl;
    imgNode.className = 'imagenDesign';
    imgNode.alt = `Imagen desde ${imgUrl}`;
    imgContainer.appendChild(imgNode);

    imgNode.addEventListener('click', () => {
        modalImg.src = imgUrl;
        modal.style.display = 'flex';
    });

    // imgNode.addEventListener('click',()=>{
    //     imgNode.remove();
    //     totalImg--;
    //     span.textContent = totalImg;
    // })

    totalImg++;
    span.textContent = totalImg;
    e.target.reset();
})


button.addEventListener('click',()=>{
    imgContainer.innerHTML = '';
    totalImg = 0;
    span.textContent = totalImg;
})

modal.addEventListener('click', (e) => {
    if (e.target !== modalImg) {
        modal.style.display = 'none';
    }
});










