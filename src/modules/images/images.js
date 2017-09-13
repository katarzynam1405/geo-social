export  default function renderImage(data){

    var initialVal = 0;
    var addedVal = 20;

    document.querySelector('button.button.more').addEventListener('click', addMore);

    function addMore(){
        console.log('hi!')
        console.log(initialVal+= 20, 'from add20');
        console.log(addedVal+= 20, 'from add20');
    }

    console.log(initialVal, addedVal);
    const imagesArrayPhotos = data.photos.photo.slice(initialVal, addedVal)
    console.log(imagesArrayPhotos)

    const src = imagesArrayPhotos.map((photo)=>{
       return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
    })

    const imgContainer = document.querySelector('.img-container .box-img');
    const createImage = document.createDocumentFragment();

    for(let i=0; i<imagesArrayPhotos.length; i++){
            const img = document.createElement('img');
            createImage.appendChild(img);
            img.src = src[i];
    }
    imgContainer.appendChild(createImage);  
}