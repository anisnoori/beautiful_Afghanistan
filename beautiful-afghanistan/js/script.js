/* SEARCH */

const search = document.getElementById("search");

if(search){

search.addEventListener("keyup",()=>{

const value = search.value.toLowerCase();
const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

const city = card.innerText.toLowerCase();

card.style.display =
city.includes(value) ? "block" : "none";

});

});
}


/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(el=>{

const top = el.getBoundingClientRect().top;
const visible = window.innerHeight - 100;

if(top < visible){
el.classList.add("active");
}

});

});
/* HERO SEQUENCE ANIMATION */

const heroItems = document.querySelectorAll(".hero-item");

heroItems.forEach((item,index)=>{
setTimeout(()=>{
item.classList.add("show");
},1000 + index*600);
});