export default function alert(message, type, timeout) {
    document.querySelector(".alert").innerHTML = `<p class="alert-message" type="${type}">${message}</p>`;
    document.querySelector(".alert").classList.remove("hidden");
    setTimeout(function hideAlert() {
        document.querySelector(".alert").classList.add("hidden");
    }, timeout);
}