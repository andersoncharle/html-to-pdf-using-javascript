<div align="center">
<h1><b>html to pdf using javascript</b></<h1>
</div>
  
  
  >html2pdf.js converts any webpage or element into a printable PDF entirely client-side using html2canvas and jsPDF.
  >Basically, we use HTML to pdf convert method to create documents on our website or web application.
  
  
  I develop lots of business purpose web applications so HTML to pdf conversion is one of the must thing.
  So,we are going to convert a div to PDF using JavaScript.
  
  ## include CDN.
  The simplest way to use html2pdf.js is to include it as a script in your HTML by using cdnjs:


```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
  
  ## Usage

Once include **CDN**, html2pdf.js is ready to use.so you must capture the **DOM** element and prompt the user to save the result:

```js
"use strict";

const element = document.querySelector(".print");

const btn= document.querySelector("button");
 btn.addEventListener('click',elementToPrint);

  ```
  
  ## Methods:
  There are three methods used to print your document which are html2pdf(),from() and save()
  
  ## methods usage:
  ```js
  function elementToPrint(){
    
    html2pdf().from(element).save();


}
  // from this demo this method can be used due to invoking of elementToPrint method
  ```
