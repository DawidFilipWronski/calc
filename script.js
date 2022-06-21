let buttons = document.querySelectorAll('.button');
let operationButtons = document.querySelectorAll('.operation');
let numbers = document.querySelectorAll('.number');
let operationsBox = document.querySelector('.operations');
let resultBox = document.querySelector('.result');
let resultButton = document.querySelector('.result-btn');
let resetButton = document.querySelector('.reset');

let calc = {
    firstValue: '' ,
    secondValue: '',
    inputNumber: '',
    operation: '',
    result: '',
    allowToSecond: false,    
};

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if ( typeof calc.result == 'number' ) {
            calc = {
                firstValue: '' ,
                secondValue: '',
                inputNumber: '',
                operation: '',
                result: '',
                allowToSecond: false,
            }
            calc.result = printResult(calc.result, resultBox);
        }
        calc.inputNumber += e.target.textContent;
        console.log( typeof +calc.inputNumber);
        printResult(calc.inputNumber, operationsBox);
                
    })
});

operationButtons.forEach(opButton => {
    opButton.addEventListener('click', (e) => {
        if( calc.firstValue == '' ) {
            calc.firstValue = calc.inputNumber;
            calc.inputNumber = '';
            allowToSecond = true;
            calc.operation = e.target.textContent;
        }
        if ( typeof calc.result == 'number' ) {
            console.log('jestem tutaj');
            calc.firstValue = calc.result + '';
            calc.result = '';
            calc.operation = e.target.textContent;
            calc.inputNumber = '';
            allowToSecond = true;
            console.log(calc.result);
        } 
    })
});

function doMath(a, b, operation) {
    switch (operation) {
        case '+':
            calc.result = +a + +b;
            printResult(calc.result, resultBox);
            break;
        case '-':
            calc.result = +a - +b;
            printResult(calc.result, resultBox);
            break;  
        case '*':
            calc.result = +a * +b;
            printResult(calc.result, resultBox);
            break;
        case '/':
            calc.result = +a / +b;
            printResult(calc.result, resultBox);
            break;          
    
        default:
            break;
    }
}

function printResult(whatToPrint, whereToPrint) {
    whereToPrint.textContent = whatToPrint;
}

function setOperation() {
    operation = this.textContent;    
}

// add opacity 0.5 to button when click and then remove it after 100ms
function visualKeyboardEffect(e) { 
    e.target.classList.toggle('clicked');
    setTimeout(() => {
     e.target.classList.toggle('clicked');
    }, 100);
 }
 function ac() {
    calc = {
    firstValue: '' ,
    secondValue: '',
    inputNumber: '',
    operation: '',
    result: '',
    allowToSecond: false,
    }
    printResult(calc.result,resultBox);
    printResult(calc.inputNumber, operationsBox);
 }
resetButton.addEventListener('click', ac);
operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', setOperation);
});

resultButton.addEventListener('click', () => {
    if ( calc.firstValue.length > 0 && allowToSecond == true ) {
        calc.secondValue = calc.inputNumber;
        calc.inputNumber = '';
        console.log(calc.firstValue);
        console.log(calc.secondValue);
        console.log(calc.operation);
        doMath(calc.firstValue, calc.secondValue, calc.operation);
    }
})

buttons.forEach(button => {
    button.addEventListener('click', visualKeyboardEffect);
});







