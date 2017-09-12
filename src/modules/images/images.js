export  default function renderImage(data){
    const imagesArrayPhotos = data.photos.photo;
    console.log(imagesArrayPhotos)

    const imgContainer = document.querySelector('.img-container .box-img');
        const createImage = document.createDocumentFragment();
       
       for(let i=0; i<imagesArrayPhotos.length; i++){
           if (i === 20) { break; }
            const img = document.createElement('img');
            img.src='https://farm' + imagesArrayPhotos[i].farm + '.staticflickr.com/' + imagesArrayPhotos[i].server + '/' + imagesArrayPhotos[i].id + '_' + imagesArrayPhotos[i].secret + '.jpg';
            createImage.appendChild(img);
            
       }
    imgContainer.appendChild(createImage);
}