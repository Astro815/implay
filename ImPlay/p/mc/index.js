let mp = "";

function setMovie(dt) {
    let params = new URLSearchParams(document.location.search);
    mp = params.get("m");

    // APPLY
    qs("#mv_title").innerText = dt.movies[mp].title;
    qs("#mv_title1").innerText = dt.movies[mp].title;
    qs("#mv_desc").innerText = dt.movies[mp].desc;
    qs("#mv_class > b").innerText = dt.movies[mp].cl;
    qs("#mv_classTxt").innerText = "+" + dt.movies[mp].cl + " ao minímo";
    qs("#mv_author").innerText = dt.movies[mp].author;
    qs("#mv_contato").href = dt.movies[mp].contato;
    qs("#mv_class").classList.add("cl_" + dt.movies[mp].cl);
    qs("#mv_img").style.backgroundImage = "url(" + dt.movies[mp].img + ")";
    qs("nav").style.backgroundImage = "url(" + dt.movies[mp].img + ")";
    if (dt.movies[mp].type == "serie") {
        let elemtEps = "";
        for (let i = 0; i < dt.movies[mp].ep.length; i++) {
            elemtEps += "<p class='txt_title0 txtSz3 txt_mg0'>Temporada " + (i + 1) + "</p>";
            for (let j = 0; j < dt.movies[mp].ep[i].length; j++) {
                elemtEps += "<button id='btnEp' class='btnEp' onclick='playVideo(\"serie\",\"" + j + "\",\"" + i + "\")'><p id='mv_desc' class='txt_text0 txtSz5 txt_mg0'>" + (j + 1) + " | " + dt.movies[mp].ep[i][j].name + "</p></button>";
            }
        }
        qs("#mv_player").innerHTML = elemtEps;
    } else if (dt.movies[mp].type == "movie") {
        let elemtMov = "";
        elemtMov += "<button id='btnEp' class='btnEp' onclick='playVideo(\"movie\")'><p id='mv_desc' class='txt_text0 txtSz5 txt_mg0'>Assistir agora</p></button>";
        qs("#mv_player").innerHTML = elemtMov;
    }
}

pag = "movie";
getMovies();

function playVideo(type, ep, temp) {
    //window.open("../head/index.html?mp=" + mp + "&ep=" + e, "_top");
    if (type == "serie") {
        qs("#picturePlay > p").innerText = dtMv.movies[mp].ep[temp][ep].name;
        qs("#picturePlay > iframe").src = dtMv.movies[mp].ep[temp][ep].link;
    } else if (type == "movie") {
        qs("#picturePlay > p").innerText = dtMv.movies[mp].title;
        qs("#picturePlay > iframe").src = dtMv.movies[mp].link;
    }

    qs("#picturePlay").classList.replace("stoped", "playing");
}

function closePlayer() {
    qs("#picturePlay > iframe").src = "";
    qs("#picturePlay").classList.replace("playing", "stoped");
}