export default function flashAlert(){
    setTimeout( function hideMessage(){
        document.querySelector('.flash-message').style.display="none";
    }
    , 5000)
}