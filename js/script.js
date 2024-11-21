let contador = localStorage.getItem("contador")//obterner contador
if(!contador){//poner contador a 0
    contador = 0;
}
contador = parseInt(contador)+1 //incremento
localStorage.setItem("contador", contador) //guardar valor 
document.getElementById("contadorVisitas").textContent = contador //mostrar contador en html

//boton de reinicio
document.getElementById("btnReestablecer").addEventListener("click", () =>{
    localStorage.setItem("contador", 0)
    location.reload();
})