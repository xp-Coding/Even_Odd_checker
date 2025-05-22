function checkNumber() {
    const number = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    
    if (!number) {
        resultElement.textContent = 'Enter a valid number';
    } else if(number % 2 === 0){
        resultElement.textContent = number + ' is an Even number';
    }
     else {
        resultElement.textContent = number + ' is an Odd number';
    }
}