// Higher Order Functions and passing function as argument

function add(num1,num2){
    return num1+num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function calculator(num1,num2,operation){
    return operation(num1,num2);
}