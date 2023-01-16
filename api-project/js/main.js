import "../style/style.css";
const homepage = {
    container: document.getElementById("con"),
    ccc: document.getElementById("ccc"),
    ccc2: document.getElementById("createyourcharacterbtn2")
}
function cccp(){
    homepage.container.innerHTML = ""
}
homepage.ccc.addEventListener("click", function(){
    cccp();
})
homepage.ccc2.addEventListener("click", function(){
    cccp();
})