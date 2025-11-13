let h1 = document.querySelector("h1")
let inc = document.getElementById("plus")
let dec = document.getElementById("minus")
let reset = document.getElementById("set")

let a = 0

inc.addEventListener("click", function(){
    inc.style.backgroundColor = "blue"
    setTimeout(() => inc.style.backgroundColor = "", 300);
    a++
    h1.innerHTML = a
})

dec.addEventListener("click", function(){
    dec.style.backgroundColor = "red"
    setTimeout(() => dec.style.backgroundColor = "", 300);
    a--
    h1.innerHTML = a
})

reset.addEventListener("click", function(){
    reset.style.backgroundColor = "green"
    setTimeout(() => reset.style.backgroundColor = "", 300);
    a = 0
    h1.innerHTML = a
})