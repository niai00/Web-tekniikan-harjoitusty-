//When button is clicked on lomake-site, it calls a function addNote()
document.querySelector("button").addEventListener("click", addNote);
let article = document.querySelector("article");
//Variables for textarea and checkbox
let message = document.getElementById("viesti");
let checkbox = document.getElementById("important");


function addNote() {
    //Variable for username
    let name = document.getElementById("name");
    //Variables needed for date and time
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    //Elements that are created after buttonclick
    let h3 = document.createElement("h3");
    let p = document.createElement("p");

    //Text content and style
    p.textContent = "(" + date + "." + (month + 1) + "." + year + " klo: " + hours + ":" + minutes + ")" + " " + name.value + " : " + message.value;
    p.style.padding = "5px";
    p.style.fontSize = "1.5em";

    //Important-message turns red (css)
    if (checkbox.checked) {
        h3.classList.add("important");
        p.classList.add("important");
    }
    //Text appears to article
    article.append(h3, p, document.createElement("hr"));
}
