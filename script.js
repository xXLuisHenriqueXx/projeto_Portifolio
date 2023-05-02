let docTittle = document.title;

window.addEventListener("blur", ()=>{
    document.title = "Volte Aqui!";
})

window.addEventListener("focus", ()=>{
    document.title = docTittle ;
})

