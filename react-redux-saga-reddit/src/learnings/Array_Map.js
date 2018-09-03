var numbers = [4, 9, 16, 25];
console.log(numbers)
console.log(numbers.map(value => {
    console.log("Value pased is : ", value);
    debugger;
    return value+1;
}));
