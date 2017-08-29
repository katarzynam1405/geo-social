import { groupBy } from 'lodash/collection'
import './style.scss';
import './modules/button/button.scss';
import button from './modules/button/button';
import geolocation from './modules/geolocation/geolocation';


function geo(Position) {
    return Position;
}

function error(PositionError) {
    return PositionError;
}
geolocation(geo, error);

button(geolocation);