import fetchJsonp from 'fetch-jsonp';
export default function API() {

    var accessToken = '5925631471.f6cf8b6.823d3d8eecb448fead1e72859de9208a';

    fetchJsonp('https://api.instagram.com/v1/users/5925631471/media/recent/?access_token=' + accessToken)
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            console.log(json.data.forEach((data) => console.log(data.images.standard_resolution.url)))
        })
        .catch(function(err) {
            console.log(err)
        })
}