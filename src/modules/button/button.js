import geolocation from "../geolocation/geolocation"

export default function button(callback) {
    document.querySelector('button.button.icon').addEventListener('click', callback);
};