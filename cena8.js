function azurirajCenu() {

    let kolicinaUnos = document.getElementById("kolicinaUnos");
    let cenaElement = document.getElementById("cena");
    

    let kolicina = parseInt(kolicinaUnos.value);
    if (isNaN(kolicina) || kolicina < 0) {
      kolicinaUnos.value = 0; 
      kolicina = 0; 
    }
    

    let pocetnaCena = 27999;
    let cena = kolicina * pocetnaCena/1000;
    
    cenaElement.textContent = cena + "RSD";
    cenaElement.textContent = ukupnaCena.toLocaleString("sr-RS") + " RSD";
  }

/*popup prozor*/
function prikaziProzor1() {
    const kolicinaUnos = document.getElementById('kolicinaUnos');
    const kolicina = parseInt(kolicinaUnos.value);
  
    if (kolicina === 0) {
      prikaziPorukuGreske('Niste odabrali količinu.');
    } else {
      prikaziUspesnuPoruku('Uspešno ste poručili proizvod.');
    }
  }

  function prikaziPorukuGreske(message) {
    const prozorPreklapanje = document.getElementById('prozorPreklapanje');
    const prozorSadrzaj = document.getElementById('prozorSadrzaj');
  
    prozorSadrzaj.textContent = message;
    prozorPreklapanje.style.display = 'flex';
  }

  function prikaziUspesnuPoruku(message) {
    const prozorPreklapanje = document.getElementById('prozorPreklapanje');
    const prozorSadrzaj = document.getElementById('prozorSadrzaj');
  
    prozorSadrzaj.textContent = message;
    prozorPreklapanje.style.display = 'flex';
  }

  function sakrijProzor() {
    const prozorPreklapanje = document.getElementById('prozorPreklapanje');
    prozorPreklapanje.style.display = 'none';
  }