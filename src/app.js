import { groupBy } from 'lodash/collection'
import './style.scss';
import './modules/button/button.scss';
import button from './modules/button/button';
import geolocation from './modules/geolocation/geolocation';
import alert from './modules/alert/alert';


function show(message) {
    console.log(message)
}

function geo(Position) {
    console.log(Position);
}

function error(PositionError) {
    console.log(PositionError, PositionError.message);
    alert(PositionError.message)
}

function initGeolocation() {
    geolocation(geo, error);
};

button(initGeolocation);

function initAlert() {
    alert(show);
};