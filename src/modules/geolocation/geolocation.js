const geolocation = (onSuccess, onError) => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }
};
export default geolocation;