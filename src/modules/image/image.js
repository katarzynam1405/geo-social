function renderImage(data, init, added){
    let images = data.photos.photo.slice(init, added);
    console.log(images)

    const imgContainer = document.querySelector('.img-container .box-img');
    const createImage = document.createDocumentFragment();

   images.map((photo)=>{
       const src = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
       const img = document.createElement('img');
       createImage.appendChild(img);
       img.src = src;
})
    imgContainer.appendChild(createImage); 
}
export default renderImage;
