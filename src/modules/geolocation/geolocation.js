  
const geolocation = (onSuccess, onError)=>{
    new Promise((resolve, reject)=> {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        
        setTimeout(function(){
            resolve(onSuccess); 
        }, 250);
        setTimeout(function(){
            reject(onError); 
        }, 250);

    }
 });
}
export default geolocation;

