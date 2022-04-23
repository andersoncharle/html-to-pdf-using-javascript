"use strict";
const element = document.querySelector("#element-to-print");
const btn= document.querySelector(".btn");
btn.addEventListener('click',elementToPrint());

const elementToPrint = ()=>{
html2pdf().from(element).save();
}