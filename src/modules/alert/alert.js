export default function alert(show) {
    document.querySelector(".alert p").innerHTML = `<p>${show}</p>`;
    document.querySelector(".alert").classList.remove("hidden");
    setTimeout(function hideAlert() {
        document.querySelector(".alert").style.display = "none"
    }, 5000);
}