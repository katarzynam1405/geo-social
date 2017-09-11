const AUTHENTICATION_TOKEN = '72157686306802023-7d71594e353976d7';

const API_KEY = "2013b82e85e24a21d394ae641cd9d903";
const API_SIG = '6af9bc90ea313d61d88250337476e867';

export default function API(latitude, longitude) {

    return new Promise((resolve, reject) => {
        resolve(
            fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&lat=${latitude}&lon=${longitude}&format=json&nojsoncallback=1`)
            .then(function(response) {
                return response.json();
            }))
    })
}