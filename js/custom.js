"use strict";

const element = document.querySelector(".print");

const btn= document.querySelector("button");
 btn.addEventListener('click',elementToPrint);

 let print =   html2pdf().from(element).save();
function elementToPrint(){
    
  document.querySelector("body").innerHTML=window.print;


}
