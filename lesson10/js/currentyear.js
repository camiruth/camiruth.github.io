let m = new Date();
let month = m.getMonth() + 1;
let day = m.getDate();
let year = m.getFullYear();
let dateString = month + "/" + day + "/" + year + " ";
document.getElementById("currentyear").textContent = dateString;

let d = new Date();
let dayOfWeek = d.getDay();
let bannerElement = document.getElementById("banner");
if (dayOfWeek==5){
    bannerElement.classList.add("showme");
}
    else {
        bannerElement.classList.add("hideme");
    }

