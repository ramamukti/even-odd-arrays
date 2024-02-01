// Get 100 random values (1 to 50) in an array
function getRandom() {
    let random = [];
    for (let i = 0; i < 100; i++) {
        random.push(Math.floor(Math.random() * 50 + 1)); 
    }
    return random;
}

// Split into two arrays based on the index, array with even index and array with odd index
// Use the push() method to add the new values to the arrays
function splitArray(array) {
    let even = [];
    let odd = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            even.push(array[i]);
        }
        else {
            odd.push(array[i]);
        }
    }
    return [even, odd];
}

// Use the two arrays that have been previously created to get:
// Min
function getMin(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Max
function getMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Total
function getTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

// Average
function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length;
    return average;
}

// Print object keys and values
function printObject(obj) {
    for (let key in obj) {
    console.log(key, ":", obj[key]);    
    }
}

// Compare the two arrays, for example:
// The smaller the even array
// Max is bigger than the odd array
// Total has the same value between the arrays
function compareValue(even, odd) {
    if (even > odd) {
        return "even array is greater than the odd array";
    }
    else if (odd > even) {
        return "odd array is less than the even Array";
    }
    else {
        return "even array is equal to the odd array";
    }
}

// Output
let randomArray = getRandom();
let splittedArray = splitArray(randomArray);
let evenArray = splittedArray[0];
let oddArray = splittedArray[1];
// Array with 100 indexes
console.log("Array with 100 indexes\n", randomArray);
// Even array with 50 indexes
console.log("\nEven array with 50 indexes\n", evenArray);
// Odd array with 50 indexes
console.log("\nOdd array with 50 indexes\n", oddArray);

// Min, Max, Total and Average for each array (even and odd)
console.log("\nMin, Max, Total and Average of Even Array")
let even = {Min: getMin(evenArray), Max: getMax(evenArray), Total: getTotal(evenArray), Average: getAverage(evenArray)};
printObject(even);
console.log("\nMin, Max, Total and Average of Odd Array")
let odd = {Min: getMin(oddArray), Max: getMax(oddArray), Total: getTotal(oddArray), Average: getAverage(oddArray)};
printObject(odd);

// Comparison of min, max, total and average of two values
console.log("\nComparison of min, max, total and average between the values:")
console.log("Min of", compareValue(even.Min, odd.Min));
console.log("Max of", compareValue(even.Max, odd.Max));
console.log("Total of", compareValue(even.Total, odd.Total));
console.log("Average of", compareValue(even.Average, odd.Average));