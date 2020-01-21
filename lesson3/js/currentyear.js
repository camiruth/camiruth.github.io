
let m = new Date();
let month = m.getMonth() + 1;
let day = m.getDate();
let year = m.getFullYear();
let dateString = month + "/" + day + "/" + year + " ";
document.getElementById("currentyear").textContent = dateString;
