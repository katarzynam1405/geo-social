const geolocation = (onSuccess) => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(onSuccess)
    }
};
export default geolocation;