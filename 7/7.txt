let x = prompt("x?", '');
let n = prompt("n?", '');
if (n < 1 && (n % 2 === 1 || n % 2 === 0)) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}

function pow (x, n){
  return (x ** n);
}
