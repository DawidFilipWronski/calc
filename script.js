let buttons = document.querySelectorAll('.button');
let operationButtons = document.querySelectorAll('.operation');
let numbers = document.querySelectorAll('.number');
let operationsBox = document.querySelector('.operations');
let resultBox = document.querySelector('.result');
let operation = '';
let currentNumber;
let previousNumber;
let result;

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        selectValue = e.target.textContent;
        if ( operation == '' && currentNumber != undefined ) {
            console.log('wchodze');
            currentNumber += selectValue;
        }
        else if ( currentNumber != undefined && operation != '' ) {
            previousNumber = currentNumber;
            currentNumber = selectValue;
        }                
        else {
            currentNumber = selectValue;
        }
        console.log(currentNumber);
        console.log(previousNumber);
        console.log(operation);
        doMath(operation);
    })
});

function doMath(whatToDo) {
    switch (whatToDo) {
        case '+':
            result = +previousNumber + +currentNumber;
            resultBox.textContent = result;            
            break;
        case '-':
            result = +previousNumber - +currentNumber;
            resultBox.textContent = result;
            break;
        case '*': 
            result = +previousNumber * +currentNumber;
            resultBox.textContent = result;
            break;
        case '/': 
            result = +previousNumber / +currentNumber;
            resultBox.textContent = result;
            break;      
        default:
            break;
    }
}

function setOperation() {
    operation = this.textContent;    
}





































operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', setOperation);
});

buttons.forEach(button => {
    button.addEventListener('click', visualKeyboardEffect);
});

// add opacity 0.5 to button when click and then remove it after 100ms
function visualKeyboardEffect(e) { 
   e.target.classList.toggle('clicked');
   setTimeout(() => {
    e.target.classList.toggle('clicked');
   }, 100);
}





