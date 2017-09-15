export default function renderImage(src){
const imgContainer = document.querySelector('.img-container .box-img');
const createImage = document.createDocumentFragment();
  
    const img = document.createElement('img');
    createImage.appendChild(img);
    img.src = src;
    imgContainer.appendChild(createImage);
}


