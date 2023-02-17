



let getSum = () => sum(document.getElementById('x').value, document.getElementById('y').value);
let getSubtract = () => subtract(document.getElementById('x').value, document.getElementById('y').value);

let sum = (x, y) =>
{  
    let num1, num2;
    num1 = parseInt(x);
    num2 = parseInt(y);
    return num1 + num2; 
    
}

let subtract = (x, y) =>
{
    let num1, num2;
    num1 = parseInt(x);
    num2 = parseInt(y);
    return num1 - num2; 
}

