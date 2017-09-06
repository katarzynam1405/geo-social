import fetchJsonp from 'fetch-jsonp';
const ACCESS_TOKEN = '5925631471.f6cf8b6.823d3d8eecb448fead1e72859de9208a';

export default function API() {

return new Promise ((resolve, reject)=> {
    resolve(
        fetchJsonp('https://api.instagram.com/v1/users/5925631471/media/recent/?access_token=' + ACCESS_TOKEN).then(function (response){
         return response.json()
    }))
    reject(new Error("error"))
})
}