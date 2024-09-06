let a = 15;
const b = 10;

/*
 primitvos: number, string, boolean, null, undefined, symbol
 objetos: array, funcions, objects - Propiedades y metodos
+ - / * % 
=== ES PARA CASOS DE COMPARACION DE OBEJETOS 
*/

let name = "JS";
let isReady = true;

if(isReady)
{
    console.log(name);
}else{
    console.log("Not ready yet");
}


let items = [1,2,3,4,5];
let vals = [1,"JS",2,"CSS", true];
let response = [];

response.push(123);
console.log(response);
response.shift();
console.log(response[10]);

document.addEventListener("DOMContentLoaded",()=>{
    console.log("DOM loaded");

    setTimeout(() => {
        console.log("5 seconds")
    }, 5000);

    let timer = 0;
    let interval = setInterval(() => {
        let item = document.querySelector("#box");
        console.log(item.getAttribute("style"));
        item.classList.add("blue");
        console.log(item.classList);
        console.log(item.innerHTML)
        item.innerHTML="35";

    }, 1000);

    /*if(timer==5){
        clearInterval(interval);
    } else {
        timer++;
    }*/

});