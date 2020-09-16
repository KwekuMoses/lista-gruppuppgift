document.addEventListener("DOMContentLoaded", function (e) {

    let button = document.getElementById("btnSend");
    button.addEventListener("click", function () {
        let message = document.getElementById("message");
        let new_message = document.createElement("p");
        new_message.innerHTML = message.value;

        let div = document.getElementById("root");
        div.appendChild(new_message);

    })

})