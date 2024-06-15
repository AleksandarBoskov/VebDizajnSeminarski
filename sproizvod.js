let GlavnaSlika = document.getElementById("glavna-slika");
let malaSlika = document.getElementsByClassName("mala-slika");
malaSlika[0].onclick = function(){
        GlavnaSlika.src = malaSlika[0].src;
      }
      malaSlika[1].onclick = function(){
        GlavnaSlika.src = malaSlika[1].src;
      }
      malaSlika[2].onclick = function(){
        GlavnaSlika.src = malaSlika[2].src;
      }
      malaSlika[3].onclick = function(){
        GlavnaSlika.src = malaSlika[3].src;
      }