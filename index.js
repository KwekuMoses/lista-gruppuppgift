document.addEventListener("DOMContentLoaded", function(e) {
    let btnSend = document.getElementById("btnSend")
    btnSend.addEventListener("click", function(e) {
        let message = document.getElementById("message");
        let new_message = document.createElement("p");
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        
        let btnRemove = document.createElement("button");
        btnRemove.innerHTML = "Remove";

         new_message.innerHTML = message.value;
         new_message.addEventListener("click", function(e) {          
            this.style.textDecoration="line-through";
         })
        let div = document.getElementById("root");
        div.appendChild(new_message);
        new_message.appendChild(input);
        new_message.appendChild(btnRemove);
        message.value ="";
    

    });
})


/* Istället för att ta bort en uppgift, markera den på något annat sätt, t ex med genomstruken text
. Ni kan göra det genom att manipulera stylingen för elementet men det är snyggare om ni hittar ett 
sätt att lägga till / ta bort klasser. DONE!

Lägg till en checkruta för varje uppgift och låt den avgöra om uppgiften ska markeras som klar eller inte. DONE!

Lägg till en extra knapp eller liknande som låter er ta bort (eller markera) uppgiften. Ni kan nog ha 
nytta av egenskapen parentNode.*/