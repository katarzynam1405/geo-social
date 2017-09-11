import { groupBy } from 'lodash/collection'

import API from './modules/API/API';
import alert from './modules/alert/alert';
import button from './modules/button/button';
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
    images();
};

function parseJson(data){
   data.photos.photo.forEach((photo)=> console.log(photo.farm, photo.id, photo.secret, photo.server, photo.title, 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'))
   data.photos.photo.forEach((photo) =>{
      let img = document.createElement('img');
      img.src='https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
      img.width = 200;
      img.height = 200; 
      document.querySelector('.img-container').appendChild(img);
   })
}

button(onClickHandler);



