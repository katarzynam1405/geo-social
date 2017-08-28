import { groupBy } from 'lodash/collection'
import './style.scss';
import './modules/button/button.scss';
import button from './modules/button/button';
import geolocation from './modules/geolocation/geolocation';


function geo(Position) {
    console.log("GEO", Position);
}

function error(PositionError) {
    console.log("err", PositionError, PositionError.message);
}
geolocation(geo, error);

button(geolocation);