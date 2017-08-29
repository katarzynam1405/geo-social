import { groupBy } from 'lodash/collection'
import './style.scss';
import './modules/button/button.scss';
import button from './modules/button/button';
import geolocation from './modules/geolocation/geolocation';


function geo(Position) {
    console.log(Position);
}

function error(PositionError) {
    console.log(PositionError, PositionError.message);
}

function initGeolocation() {
    geolocation(geo, error);
};

button(initGeolocation);