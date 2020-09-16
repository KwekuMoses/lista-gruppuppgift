document.addEventListener("DOMContentLoaded", function () {

    let elements = document.getElementsByTagName("li")
    for (element of elements) {
        element.addEventListener("click", function () {
            this.remove();
        })
    }
})