import { groupBy } from 'lodash/collection'

import alert from './modules/alert/alert';
import button from './modules/button/button';
import geolocation from './modules/geolocation/geolocation';

import './style.scss';
import './modules/button/button.scss';

function onGeolocationSuccess(position){
    console.log(position);
}

function onGeolocationError(positionError){
    console.log(positionError, positionError.message);
    alert(positionError.message, "warning", 5000);
}

function onClickHandler(){
    geolocation().then(onGeolocationSuccess).catch(onGeolocationError);
};

button(onClickHandler);

