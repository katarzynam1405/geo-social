const button = () => {
    const getButton = document.querySelector('button.button.icon');
    getButton.addEventListener('click', (e) => {
        console.log("hi! I just met you and this is crazy, but you just clicked me, so give me some style maybe :)");
    })
};
export default button