let ajouter=document.querySelector(".ajouter");
let form=document.querySelector(".form");
let fermer=document.querySelector(".uil")


ajouter.addEventListener("click", () =>
{
 form.classList.add("show");
})
 
fermer.addEventListener("click",()=>{
    form.classList.remove("show")
})


