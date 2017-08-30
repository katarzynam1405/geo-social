import { groupBy } from 'lodash/collection'
import './style.scss';
import './modules/button/button.scss';
import button from './modules/button/button';
import geolocation from './modules/geolocation/geolocation';
import flashAlert from './modules/flashAlert/flashAlert';


function geo(Position) {
    console.log(Position);
}
function show(message){
    console.log(message)
}

function error(PositionError) {
    console.log(PositionError, PositionError.message);
    show("User denied");
} 


function initGeolocation() {
    geolocation(geo, error);
};

button(initGeolocation);
flashAlert(show);