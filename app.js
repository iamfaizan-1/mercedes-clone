
let navbar2 = document.querySelector(".nav2")

navbar2.addEventListener("mouseover",() =>{
    navbar2.style.color = "#9f9f9f"
    navbar2.style.transition = "color 0.3s ease"
})

navbar2.addEventListener("mouseleave",() =>{
    navbar2.style.color = "white"
    navbar2.style.transition = "color 0.5s ease"
})


let logo = document.querySelector("#logo")

logo.addEventListener("click",()=>{
  document.location = "./index.html"
})

