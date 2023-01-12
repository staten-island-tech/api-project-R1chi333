import "../style/style.css";
const startscreenDoMS = {
    loadingin: document.getElementById("loadingin"),
    carrotcastle: document.getElementById("carrotcastle"),
    heading: document.getElementById("heading"),
    grass: document.getElementById("grass"),
    grass2: document.getElementById("grass2"),
    bun1: document.getElementById("bun1"),
    bun3: document.getElementById("bun3"),
    skipbtncon: document.getElementById("skipbtncon"),
    bunflag: document.getElementById("bunflag")
}
startscreenDoMS.carrotcastle.addEventListener("click", function(){
    setTimeout(() => {
        startscreenDoMS.carrotcastle.classList.add("down")
        startscreenDoMS.carrotcastle.classList.remove("up")
        startscreenDoMS.grass.classList.add("grassup")
        startscreenDoMS.grass.classList.remove("grassdown")
        startscreenDoMS.grass2.classList.add("grass2up")
        startscreenDoMS.grass2.classList.remove("grass2down")
        setTimeout(() => {
            startscreenDoMS.loadingin.remove();
            document.body.style.backgroundColor = "#dde3a4";
          }, 1550)
      }, 1000)
    startscreenDoMS.skipbtncon.classList.add("hide")
    startscreenDoMS.bun1.classList.add("bungoup")
    startscreenDoMS.bun1.classList.remove("bunbefore")
    startscreenDoMS.bun3.classList.add("bungoup")
    startscreenDoMS.bun3.classList.remove("bunbefore")
    startscreenDoMS.bunflag.classList.add("flagraised")
    startscreenDoMS.bunflag.classList.remove("flagbefore")
    startscreenDoMS.heading.classList.add("hide")
})