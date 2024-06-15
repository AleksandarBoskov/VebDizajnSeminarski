function prikaziProzor() {
    let prozorPreklapanje = document.getElementById("prozorPreklapanje");
    let prozorSadrzaj = document.getElementById("prozorSadrzaj");
    let emailUnos = document.getElementById("emailUnos").value;
      
      if (!emailUnos) {
        prozorPreklapanje.style.display = "flex";
      prozorSadrzaj.textContent = "Niste uneli email!";
        return;
      }
    
      
      prozorPreklapanje.style.display = "flex";
      prozorSadrzaj.textContent = "Uspešno ste se prijavili na novosti!";
    }
  function sakrijProzor() {
    let prozorPreklapanje = document.getElementById("prozorPreklapanje");
    prozorPreklapanje.style.display = "none";
  }