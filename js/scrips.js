let boton = document.getElementById("mic");
let reprod = document.getElementById("spoty");
let contador = 0;

boton.addEventListener("click", function(e){
    e.preventDefault();
    if(contador==0){
        reprod.className = ("reprod mostrar")
        contador=1;
    }else{
        spoty.classList.remove("mostrar")
        spoty.className = ("reprod nomostrar")
        contador=0;
    }
})