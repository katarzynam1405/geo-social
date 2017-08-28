import { groupBy } from 'lodash/collection'
import './style.scss';
import './modules/button/button.scss';
import button from './modules/button/button';
import geolocation from './modules/geolocation/geolocation';
import geoError from './modules/geolocation/geoError';


console.log(button());

function geo(Position) {
    console.log("GEO", Position);
}
geolocation(geo);

function geoErrorHandler(PositionError) {
    console.log(PositionError)
}
geoError(geoErrorHandler);