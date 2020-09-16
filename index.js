document.addEventListener("DOMContentLoaded", function(e) {
    let btnSendn = document.getElementById("btnSend")
    btnSend.addEventListener("click", function(e) {
        let message = document.getElementById("message");
        let new_message = document.createElement("p");
         new_message.innerHTML = message.value;
         new_message.addEventListener("click", function(e) {
            this.remove();
         })
        let div = document.getElementById("root");
        div.appendChild(new_message);
        message.value ="";
    });
})