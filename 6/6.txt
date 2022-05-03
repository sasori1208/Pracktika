let count = prompt('Please enter number.', 0),
  currentNumber = 2;
 
while(count != 0) {
    if(isNatural(currentNumber)) {
        console.log(currentNumber);
        count--;
    } 
    currentNumber++;
}

function isNatural(number) {
    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true; 
}    