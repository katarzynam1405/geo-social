export default function geolocation(onSuccess, onError) {
    if ("geolocation" in navigator) {
        new Promise(function geolocation (){
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        });
    }
    geolocation()
        .then((onSuccess)=>{
            onSuccess()
        })
        .catch((onError)=>{
            onError()
        })
};