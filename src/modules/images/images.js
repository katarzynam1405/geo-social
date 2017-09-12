export  default function renderImage(data){
     const imgContainer = document.querySelector('.img-container .box-img');
        const createImage = document.createDocumentFragment();
            data.photos.photo.forEach((photo) =>{
            const img = document.createElement('img');
            img.src='https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
            createImage.appendChild(img);
        })
    imgContainer.appendChild(createImage);
}