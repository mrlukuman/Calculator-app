// Changing themes
const body = document.getElementById("body");

const theme1 = document.querySelector('#choice1');
const theme2 = document.querySelector('#choice2');
const theme3 = document.querySelector('#choice3');

theme1.addEventListener("click", function(){
    body.classList="";
    body.classList.add('theme1');
});

theme2.addEventListener("click", function(){
    body.classList="";
    body.classList.add('theme2');
});

theme3.addEventListener("click", function(){
    body.classList="";
    body.classList.add('theme3');
});


const input = document.querySelectorAll(".operand");
const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand")
const equal = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const del = document.querySelector(".del");
const operator = document.querySelectorAll(".operator");
const result = document.querySelector(".result");
let state = 'inactive';


//let previousResult = result.innerHTML;
let currentValue;

let previousResult;
if (result.innerHTML == ""){
    previousResult = currentOperand.innerHTML;
}

const add = function(){
    console.log(operation);
    if (operation.length !=0) {
        operation.pop();
        currentValue = currentArray.join("");
        console.log(previousResult, currentValue)
        currentResult = parseFloat(previousResult) + parseFloat(currentValue);
        result.innerHTML = currentResult;
        previousResult = result.innerHTML;
        
    }else{
        currentValue = currentArray.join("");
        console.log(previousResult, currentValue)
        currentResult = parseFloat(currentValue);
        result.innerHTML = currentResult;
        previousResult = result.innerHTML;
        operation.push(add)
    }
}

const subtract = function(){
    console.log(operation);
    if (operation.length !=0) {
        operation.pop();
        currentValue = currentArray.join("");
        console.log(previousResult, currentValue)
        currentResult = parseFloat(previousResult) - parseFloat(currentValue);
        result.innerHTML = currentResult;
        previousResult = result.innerHTML;
    }else{
        currentValue = currentArray.join("");
        console.log(previousResult, currentValue)
        currentResult = parseFloat(currentValue);
        result.innerHTML = currentResult;
        previousResult = result.innerHTML;
        operation.push(subtract)
    }
}

const multiply = function(){
    console.log(operation);
    if (operation.length !=0) {
        operation.pop();
        currentValue = currentArray.join("");
        console.log(previousResult, currentValue)
        currentResult = parseFloat(previousResult) * parseFloat(currentValue);
        result.innerHTML = currentResult;
        previousResult = result.innerHTML;
    }else{
        currentValue = currentArray.join("");
        console.log(previousResult, currentValue)
        currentResult = parseFloat(currentValue);
        result.innerHTML = currentResult;
        previousResult = result.innerHTML;
        operation.push(multiply)
    }
}

const divide = function(){
    console.log(operation);
    if (operation.length !=0) {
        operation.pop();
        currentValue = currentArray.join("");
        console.log(previousResult, currentValue)
        currentResult = parseFloat(previousResult) / parseFloat(currentValue);
        result.innerHTML = currentResult;
        previousResult = result.innerHTML;
    }else{
        currentValue = currentArray.join("");
        console.log(previousResult, currentValue)
        currentResult = parseFloat(currentValue);
        result.innerHTML = currentResult;
        previousResult = result.innerHTML;
        operation.push(divide)
    }
}

const equal_To = function() {
    console.log(operation)
    if (operation.length !=0) {
        operation.pop();
        currentValue = currentArray.join("");
        console.log(previousResult, currentValue)
        currentResult = parseFloat(previousResult) // parseFloat(currentValue);
        result.innerHTML = currentResult;
        previousResult = result.innerHTML;
    }else{
        currentValue = currentArray.join("");
        console.log(previousResult, currentValue)
        currentResult = parseFloat(currentValue);
        result.innerHTML = currentResult;
        previousResult = result.innerHTML;
        operation.push(equal_To)
    }
}
    

let previousArray = [];
let currentArray = [];
let resultArray = [];
let operation = [];



del.addEventListener("click", ()=>{
    if (currentArray.length > 1){
        previousArray
        currentArray.pop();
        currentOperand.innerHTML = currentArray.join("");
        console.log("Delete clicked");
    }else if (currentArray.length == 1){
        currentArray.pop();
        currentOperand.innerHTML = "0";
    }
})

reset.addEventListener("click", ()=>{
    previousArray = [];
    currentArray = [];
    resultArray = []
    previousOperand.innerHTML = "";
    currentOperand.innerHTML = "0";
    previousResult = 0;
    currentResult = 0;
    result.innerHTML = "";
    console.log('Reset clicked')
    operation = []
    state = "inactive";
})

for (let i=0; i<input.length; i++) {
    input[i].addEventListener("click", function(){
        currentOperand.innerHTML = input[i].innerHTML;
        currentArray.push((currentOperand.innerHTML));
        currentOperand.innerHTML = currentArray.join("");
        state = 'active';
        console.log("state is ", state)
});
    

};



for (let i=0; i<operator.length; i++){
    operator[i].addEventListener("click", ()=>{
        if (state == "active"){
            state="inactive";
            console.log("state is ", state);
            if (operator[i].innerHTML == "+"){//Addition
                if(operation.length !=0){
                    currentOperand.innerHTML = "0";
                    operation[0]();
                    operation.push(add)
                    previousArray = currentArray ;
                    previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                    console.log(operation[-1]);
                    //add();
                    previousArray = [];
                    currentArray = [];
                }else{
                    currentOperand.innerHTML = "0";
                    previousArray = currentArray ;
                    previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                    console.log(operation[0]);
                    add();
                    previousArray = [];
                    currentArray = [];
                }
            }
            else if (operator[i].innerHTML == "-"){//Subtraction
                if(operation.length != 0){
                    currentOperand.innerHTML = "0";
                    operation[0]();
                    operation.push(subtract)
                    previousArray = currentArray ;
                    previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                    console.log(operation[-1]);
                    previousArray = [];
                    currentArray = [];
                }else{
                    currentOperand.innerHTML = "0";
                    previousArray = currentArray ;
                    previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                    console.log(operation[0]);
                    subtract();
                    previousArray = [];
                    currentArray = [];
                }
            }
            else if (operator[i].innerHTML == "/"){//Division
                if(operation.length != 0){
                    currentOperand.innerHTML = "0";
                    operation[0]();
                    operation.push(divide)
                    previousArray = currentArray ;
                    previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                    console.log(operation[-1]);
                    previousArray = [];
                    currentArray = [];
                }else{
                    currentOperand.innerHTML = "0";
                    previousArray = currentArray ;
                    previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                    console.log(operation[0]);
                    divide();
                    previousArray = [];
                    currentArray = [];
                }
            }
            else if (operator[i].innerHTML == "x"){//Multiplication
                if(operation.length != 0){
                    currentOperand.innerHTML = "0";
                    operation[0]();
                    operation.push(multiply)
                    previousArray = currentArray ;
                    previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                    console.log(operation[-1]);
                    previousArray = [];
                    currentArray = [];
                }else{
                    currentOperand.innerHTML = "0";
                    previousArray = currentArray ;
                    previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                    console.log(operation[0]);
                    multiply();
                    previousArray = [];
                    currentArray = [];
                }
            }
            else if (operator[i].innerHTML == "="){//Multiplication
                if(operation.length != 0){
                    currentOperand.innerHTML = "0";
                    operation[0]();
                    //operation.push(equal_To)
                    previousArray = toString(currentResult).split();
                    console.log(previousArray)
                    //previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                    currentOperand.innerHTML = previousResult;
                    console.log(operation[-1]);
                    previousArray = [];
                    currentArray = [];
                }else{
                    currentOperand.innerHTML = "0";
                    previousArray = currentArray ;
                    previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                    console.log(operation[0]);
                    equal_To();
                    previousArray = [];
                    currentArray = [];
                }
            }
        }
    });
};


function actions(){
    if (state == "active"){
        state="inactive";
        console.log("state is ", state);
        if (operator[i].innerHTML == "+"){//Addition
            if(operation.length !=0){
                currentOperand.innerHTML = "0";
                operation[0]();
                operation.push(add)
                previousArray = currentArray ;
                previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                console.log(operation[-1]);
                //add();
                previousArray = [];
                currentArray = [];
            }else{
                currentOperand.innerHTML = "0";
                previousArray = currentArray ;
                previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                console.log(operation[0]);
                add();
                previousArray = [];
                currentArray = [];
            }
        }
        else if (operator[i].innerHTML == "-"){//Subtraction
            if(operation.length != 0){
                currentOperand.innerHTML = "0";
                operation[0]();
                operation.push(subtract)
                previousArray = currentArray ;
                previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                console.log(operation[-1]);
                previousArray = [];
                currentArray = [];
            }else{
                currentOperand.innerHTML = "0";
                previousArray = currentArray ;
                previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                console.log(operation[0]);
                subtract();
                previousArray = [];
                currentArray = [];
            }
        }
        else if (operator[i].innerHTML == "/"){//Division
            if(operation.length != 0){
                currentOperand.innerHTML = "0";
                operation[0]();
                operation.push(divide)
                previousArray = currentArray ;
                previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                console.log(operation[-1]);
                previousArray = [];
                currentArray = [];
            }else{
                currentOperand.innerHTML = "0";
                previousArray = currentArray ;
                previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                console.log(operation[0]);
                divide();
                previousArray = [];
                currentArray = [];
            }
        }
        else if (operator[i].innerHTML == "x"){//Multiplication
            if(operation.length != 0){
                currentOperand.innerHTML = "0";
                operation[0]();
                operation.push(multiply)
                previousArray = currentArray ;
                previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                console.log(operation[-1]);
                previousArray = [];
                currentArray = [];
            }else{
                currentOperand.innerHTML = "0";
                previousArray = currentArray ;
                previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                console.log(operation[0]);
                multiply();
                previousArray = [];
                currentArray = [];
            }
        }
        else if (operator[i].innerHTML == "="){//Multiplication
            if(operation.length != 0){
                currentOperand.innerHTML = "0";
                operation[0]();
                previousArray = currentArray;
                previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " " + currentArray.join("");
                previousArray = [];
                currentArray = [];
            }else{
                currentOperand.innerHTML = "0";
                previousArray = currentArray ;
                previousOperand.innerHTML = previousOperand.innerHTML + previousArray.join("") + " " + operator[i].innerHTML + " ";
                console.log(operation[0]);
                equal_To();
                previousArray = [];
                currentArray = [];
            }
        }
    }
}
