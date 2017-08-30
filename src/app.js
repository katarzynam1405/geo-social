import { groupBy } from 'lodash/collection'
import './style.scss';
import './modules/button/button.scss';
import button from './modules/button/button';
import geolocation from './modules/geolocation/geolocation';
import flashAlert from './modules/flashAlert/flashAlert';


function geo(Position) {
    console.log(Position);
}
function show(message, type){ 
    document.querySelector('.flash-message').innerHTML = `<div class="alert"><p type=${type} class="alert-message">${message} !!</p></div>`;
}

function error(PositionError) {
    console.log(PositionError, PositionError.message);
    show(PositionError.message, "warning")
} 

function initGeolocation() {
    geolocation(geo, error);
};

button(initGeolocation);
flashAlert(show);