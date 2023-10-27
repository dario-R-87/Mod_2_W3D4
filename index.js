const h1Change = function(){
 const h1 = document.querySelector("h1");
 h1.style = "text-align: center; color: red";
}

const bgcChange = function(){
 const body = document.querySelector("body");
 body.style = "background-color: #dee0e7";
}

const footerAddressChange = function(){
 const indirizzo = document.querySelector("#indirizzo");
 indirizzo.innerText = "via del tutto eccezionale 99 - vattelapesca (KH)";
}

const addClassAmazonLink = function(){
 const links = document.querySelectorAll("table a");
 for(let i=0; i<links.length; i++){
  links[i].classList.add("amazonLink"); 
 }
}

const modClassTableImg = function(){
 const imgs = document.querySelectorAll("table img");
 for(let i=0; i<imgs.length; i++){
  imgs[i].classList.toggle("img_toggle"); 
 }
}

const changePriceColor = function(r,g,b){
 const prices = document.querySelectorAll("td:nth-child(4)");

 for(let i=0; i<prices.length; i++){
   prices[i].style.color = `rgb(${r},${g},${b})`; 
  }
}

setTimeout(() => {
  h1Change();
  bgcChange();
  footerAddressChange();
  addClassAmazonLink();
  modClassTableImg();
  changePriceColor(Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255));
}, "2000");