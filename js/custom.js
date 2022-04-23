"use strict";
// alert("andersoi");
// document.querySelector("body").style.display="none";
const element = document.querySelector(".print");

const btn= document.querySelector("button");
btn.addEventListener('click',elementToPrint);

const elementToPrint = ()=>{
html2pdf().from(element).save();
alert("alert");
document.querySelector("body").style.display="none";
}