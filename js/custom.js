"use strict";

const element = document.querySelector(".print");

const btn= document.querySelector("button");
 btn.addEventListener('click',elementToPrint);

function elementToPrint(){
    html2pdf().from(element).save();


}
