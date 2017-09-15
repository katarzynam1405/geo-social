import { groupBy } from 'lodash/collection'

import API from './modules/API/API';
import alert from './modules/alert/alert';
import button from './modules/button/button';
import renderImage from './modules/image/image';
import geolocation from './modules/geolocation/geolocation';

import './style.scss';
import './modules/button/button.scss';

function onGeolocationSuccess(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    API(position.coords.latitude, position.coords.longitude).then(parseJson).catch(e => alert(e, "warning", 100000));
}

function onGeolocationError(positionError) {
    console.log(positionError, positionError.message);
    alert(positionError.message, "warning", 5000);
}

let init=0;
let added=20;

function onClickHandler() {
    geolocation().then(onGeolocationSuccess).catch(onGeolocationError);
     console.log(init+=20);
    console.log(added+=20);
}
function parseJson(data){
    let images = data.photos.photo.slice(init, added);

    const imgContainer = document.querySelector('.img-container .box-img');
    const createImage = document.createDocumentFragment();
    images.map(function getURL(photo){
        const src = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
       return src
}).map(renderImage)
}
button(onClickHandler);

