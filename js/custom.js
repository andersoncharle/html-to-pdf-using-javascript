"use strict";
// alert("andersoi");
// document.querySelector("body").style.display="none";
const element = document.querySelector(".print");

const btn= document.querySelector("button");
btn.addEventListener('click',elementToPrint);

const elementToPrint = ()=>{
    alert("alert");
    html2pdf().from(element).save();

document.querySelector("body").style.display="none";
}