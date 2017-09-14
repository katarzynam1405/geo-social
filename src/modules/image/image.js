let initVal=0;
let addedVal=20;

export  default function renderImage(data){

    document.querySelector('button.button.more').addEventListener('click', addMore) 
    console.log(initVal, addedVal, '1')
    function addMore(){
        console.log(initVal+=20);
        console.log(addedVal+=20); 
    };

    console.log(initVal, addedVal, '2');
    const imagesArrayPhotos = data.photos.photo.slice(initVal, addedVal)
    console.log(imagesArrayPhotos)

    const imgContainer = document.querySelector('.img-container .box-img');
    const createImage = document.createDocumentFragment();

    imagesArrayPhotos.map((photo)=>{
       const src = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
       const img = document.createElement('img');
       createImage.appendChild(img);
       img.src = src;
})
    imgContainer.appendChild(createImage);  

}