let qs = (e) => { return document.querySelector(e); };
let $ = (e) => { return document.querySelector(e); };
let pag = "";
let dtMv = "";

function getMovies() {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            dtbs = JSON.parse(xhttp.responseText);
            dtMv = JSON.parse(xhttp.responseText);
            if (pag == "home") {
                gntMovie(dtbs);
            } else if (pag == "movie") {
                setMovie(dtbs);
            } else if (pag == "player") {

            } else {
                console.error("A variavel 'pag' :: " + pag + " :: não encontrou o tipo e pagina.")
            }
        }
    };
    xhttp.open("GET", "/json/dtm.json", true);
    xhttp.send();
}
