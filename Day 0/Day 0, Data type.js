function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    secondInteger = parseInt(secondInteger);
    console.log(firstInteger + secondInteger);
    const firstDecimal = 4.0;
    secondDecimal = parseFloat(secondDecimal);
    console.log(firstInteger + secondDecimal);
    const firstString = 'HackerRank ';
    console.log(firstString + secondString);
}