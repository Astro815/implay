let mp = "";

function setMovie(dt) {
    let params = new URLSearchParams(document.location.search);
    mp = params.get("m");

}

pag = "movie";
getMovies();