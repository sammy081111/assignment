console.log('hello world');


let x = 1

function number(x) {
    console.log(x);
}  
 

let timer = setInterval(() => number(x++), 5000);



setTimeout(() => clearInterval(timer), 50000);