import "../style/style.css";
const startscreenDoMS = {
    carrotcastle: document.getElementById("carrotcastle")
}
startscreenDoMS.carrotcastle.addEventListener("click", function(){
    startscreenDoMS.carrotcastle.classList.add("down")
    startscreenDoMS.carrotcastle.classList.remove("up")
})