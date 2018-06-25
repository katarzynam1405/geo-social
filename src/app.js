import { groupBy } from 'lodash/collection'

import API from './modules/API/API';
import alert from './modules/alert/alert';
import button from './modules/button/button';
import renderImage from './modules/image/image';
import imagesButton from './modules/images/images';
import getImgUrl from './modules/getImgUrl/getImgUrl';
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
function onClickHandler() {
    geolocation().then(onGeolocationSuccess).catch(onGeolocationError);
    document.querySelector('button.button.icon').style.display = "none";
}

let init=0;
let added=20;

const store = {}; 
function parseJson(data){  
   return store.data = data
}

console.log(store)


function onShowMoreClickHandler(data){
    console.log(init+=20);
    console.log(added+=20);
    let images = store.data.photos.photo.slice(init, added);
    images.map(getImgUrl).map(renderImage);
}

button(onClickHandler);

imagesButton(onShowMoreClickHandler);