import fetchJsonp from 'fetch-jsonp';
const AUTHENTICATION_TOKEN = '72157686306802023-7d71594e353976d7';
const API_SIG='6af9bc90ea313d61d88250337476e867';
export default function API(latitude, longitude) {

let lat = latitude;
console.log("z api:" + lat);
let lng = longitude;
console.log("z api:" + lng);

return new Promise ((resolve, reject)=> {
    resolve(
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0dd79882f3b6d6674ca13f405852bdf7&lat=51.085890799999994&lon=17.012251799999998&format=json&nojsoncallback=1&auth_token=72157684961328252-99b3eca3ad98ee93&api_sig=25ec6b97a50bc83965b334b2e82905ee')
        .then(function (response){
         return response.json();  
         throw "something went wrong";
    }))
})
}