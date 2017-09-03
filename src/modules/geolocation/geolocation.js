let geolocation = new Promise(function(resolved, rejected) {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(resolved, rejected)
    }
});

export default geolocation;