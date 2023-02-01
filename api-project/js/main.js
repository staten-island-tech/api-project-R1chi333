import "../style/style.css";
const url = "https://api.open5e.com/races/";
const homepage = {
    container: document.getElementById("con"),
    ccc: document.getElementById("ccc"),
    ccc2: document.getElementById("createyourcharacterbtn2"),
    userinput: document.getElementById("userinput"),
    submit: document.getElementById("submit"),
    form: document.getElementById("form"),
    racesShowPlace: document.getElementById("racesShowPlace"),
    racelist: document.getElementById("racelist"),
    raceinfo: document.getElementById("raceinfo")
}
async function getData(url){
    try  {
        const response = await fetch(url);
        const data = await response.json();
        data.results.forEach((races) => {
            homepage.racelist.insertAdjacentHTML("beforeend", `<h2 class="races">${races.name}</h2>`)
        });
        homepage.form.addEventListener("submit", function (e){
            e.preventDefault();
            let searchedRace = userinput.value;
            data.results.forEach((race) => {
                if(race.name === `${searchedRace}`){
                    homepage.raceinfo.innerHTML = ""
                    console.log(race.speed)
                    homepage.raceinfo.insertAdjacentHTML("beforeend", `<h3 class="info">${race.name}</h3>
                    <p>${race.desc.substring(3)}<br/><br/>${race.alignment.substring(17)}<br/><br/>${race.languages.substring(17)}<br/><br/>${race.vision}<br/><br/>${race.traits}<br/><br/>${race.age.substring(11)}<br/><br/>${race.asi_desc.substring(30)}</p>`)
                    homepage.userinput.value = ""
                }
            })
        })
    } catch (error) {
        console.log(error)
    }
}
getData(url);
// function cccp(){
//     homepage.container.innerHTML = ""
// }
// homepage.ccc.addEventListener("click", function(){
//     cccp();
// })
// homepage.ccc2.addEventListener("click", function(){
//     cccp();
// })