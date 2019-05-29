// FONCTIONS DYNAMIQUE ( Compteur ) ------------------------------>


let plus= document.getElementById("plus");
let less= document.getElementById("less");
let compte = 0;

plus.addEventListener('click', function(){
    compte = compte+1;
    clic.innerHTML = compte;
})

less.addEventListener('click', function(){
    compte = compte-1;
    clic.innerHTML = compte;
})
