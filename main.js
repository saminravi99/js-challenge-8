//Smallest Number in an Array

function smallestNumber(inputArray){
    let smallest = inputArray[0];
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] < smallest){
            smallest = inputArray[i];
        }
    }
    return smallest;
}

let myArray = [ 10, 30, 43, 50, 5, 10, 20, 30, 40, 50 ];

console.log(smallestNumber(myArray) + " is the smallest number in the myArray" + " and its  index no. is " + myArray.indexOf(smallestNumber(myArray)));


// Smallest of 3 numbers

function smallestNumber(num1, num2, num3){
    let smallest = num1;
    if(num2 < smallest){
        smallest = num2;
    }
    if(num3 < smallest){
        smallest = num3;
    }
    return smallest;
}

let firstNumber = 23;
let secondNumber = 45;
let thirdNumber = 10;
console.log("Smallest Number is " + smallestNumber(firstNumber, secondNumber, thirdNumber));


//Average of the sum of numbers in and array

function averageArray(inputArray){
    let sum = 0;
    for(let i = 0; i < inputArray.length; i++){
        sum += inputArray[i];
    }
    return sum / inputArray.length;
}

let myArray = [ 10, 30, 43, 50, 5, 10, 20, 30, 40, 50 ];
console.log( "The average of the sum of numbers in an array is " + averageArray(myArray));


// Find the area of rectangle

function findArea(length, width){
    return length * width;
}

let myLength = 12;
let myWidth = 10;
console.log("The area of the rectangle is " + findArea(myLength, myWidth) + " square meters");


//Second largest number in an array 

function secondLargest(inputArray){
    let largest = inputArray[0];
    let secondLargest = inputArray[0];
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] > largest){
            secondLargest = largest;
            largest = inputArray[i];
        }
        if(inputArray[i] > secondLargest && inputArray[i] < largest){
            secondLargest = inputArray[i];
        }
    }
    return secondLargest;
}

let myArray = [ 10, 30, 43, 50, 5, 10, 20, 30, 40, 50, 49 ];
console.log("The second largest number in an array is " + secondLargest(myArray) + " and its index no. is " + myArray.indexOf(secondLargest(myArray)));