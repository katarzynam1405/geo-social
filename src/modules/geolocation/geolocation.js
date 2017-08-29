export default function geolocation(onSuccess, onError) {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }
};