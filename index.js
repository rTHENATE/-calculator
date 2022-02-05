let numberInput = document.getElementById('input-number');
let runButton = document.getElementById('run-button');
let output = document.getElementById('output');


function printMTP() {
     let number = Number(numberInput.value);
     let outputHtml = '';

     for (let i = 1; i <= 12; i++) {
          outputHtml += '<p>';
          outputHtml += number + 'x' + i + '=' + (number * i)
          outputHtml += '</p>'
     }

     output.innerHTML = outputHtml
}

runButton.addEventListener('click', printMTP)

function show_image(src, width, height, alt) {
     var img = document.createElement("img");
     img.src = src;
     img.width = width;
     img.height = height;
     img.alt = alt;
     document.body.appendChild(img);
}

function myJsFunc() {
     alert("ด๊อกเตอดล สมิธกองดอง Contact : @https://www.facebook.com/  ");
 }