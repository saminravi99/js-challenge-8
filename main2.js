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

let myArray = [ 3, 10, 30, 43, 50, 5, 2, 10, 20, 0, -1, -17, 30, 40, 50 ];

console.log(smallestNumber(myArray) + " is the smallest number in the myArray" + " and its  index no. is " + myArray.indexOf(smallestNumber(myArray)));