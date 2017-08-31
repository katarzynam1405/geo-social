import { groupBy } from 'lodash/collection'
import './style.scss';
import './modules/button/button.scss';
import button from './modules/button/button';
import geolocation from './modules/geolocation/geolocation';
import alert from './modules/alert/alert';


function geo(position) {
    console.log(position);
}

function error(positionError) {
    console.log(positionError, positionError.message);
    alert(positionError.message, "warning", 2000)
}

function initGeolocation() {
    geolocation(geo, error);
};

button(initGeolocation);