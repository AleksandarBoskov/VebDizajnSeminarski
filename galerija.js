let slajdBrojac = 1;
prikaziSlajd(slajdBrojac);
function plusSlajdovi(n) {
    prikaziSlajd(slajdBrojac += n);
}
function prikaziSlajd(n) {
    let i;
    let slajdovi = document.getElementsByClassName("slajdovi");
    if (n > slajdovi.length) {slajdBrojac = 1}
    if (n < 1) {slajdBrojac = slajdovi.length}
    for (i = 0; i < slajdovi.length; i++) {
      slajdovi[i].style.display = "none";
    }
    slajdovi[slajdBrojac-1].style.display = "block";
}