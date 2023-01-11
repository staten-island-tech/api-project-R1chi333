import "../style/style.css";
const startscreenDoMS = {
    carrotcastle: document.getElementById("carrotcastle"),
    heading: document.getElementById("heading"),
    grass: document.getElementById("grass")
}
startscreenDoMS.carrotcastle.addEventListener("click", function(){
    startscreenDoMS.carrotcastle.classList.add("down")
    startscreenDoMS.carrotcastle.classList.remove("up")
    startscreenDoMS.heading.remove();
})