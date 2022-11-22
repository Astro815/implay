function gntMovie(dt) {
    let e = "";
    for (let i = 0; i < dt.rm.length; i++) {
        e += "<li  onclick='gomovie(\"" + dt.rm[i] + "\")'><picture style='background-image: url(" + dt.movies[dt.rm[i]].img + ")'></picture><p class='txt_title0 txtSz4 txt_mg1'>" + dt.movies[dt.rm[i]].title + "</p></li>";
    }
    qs(".m").innerHTML = e;
}

function gomovie(m) {
    window.open("/p/mc/index.html?m=" + m, "_top");
}

pag = "home";
//getMovies();