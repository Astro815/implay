let mp = "";

function setMovie(dt) {
    let params = new URLSearchParams(document.location.search);
    mp = params.get("m");

    // APPLY
    qs("#mv_title").innerText = dt.movies[mp].title;
    qs("#mv_title1").innerText = dt.movies[mp].title;
    qs("#mv_desc").innerText = dt.movies[mp].desc;
    //qs("#mv_channel").innerText = dt.movies[mp].channel;
    if (dt.movies[mp].cl == 0) {
        qs("#mv_classTxt").innerText = "Livre para todas as idades";
        qs("#mv_class > b").innerText = "L";
    } else {
        qs("#mv_classTxt").innerText = "+" + dt.movies[mp].cl + " anos ao minímo";
        qs("#mv_class > b").innerText = dt.movies[mp].cl;
    }
    qs("#mv_author").innerText = dt.movies[mp].author;
    qs("#mv_contato").href = dt.movies[mp].contato;
    qs("#mv_class").classList.add("cl_" + dt.movies[mp].cl);
    qs("#mv_img").style.backgroundImage = "url(" + dt.movies[mp].img + ")";
    qs("nav").style.backgroundImage = "url(" + dt.movies[mp].img + ")";
}

pag = "movie";
getMovies();

function playVideo() {
    window.open(dtMv.movies[mp].link, "_blank");
}

function goChannel() {
    window.open(dtMv.movies[mp].channel, "_blank");
}

function closePlayer() {
    qs("#picturePlay > iframe").src = "";
    qs("#picturePlay").classList.replace("playing", "stoped");
}

$("#reportBtn").addEventListener("click", () => { window.open("../report/index.html?m=" + mp, "_top") })