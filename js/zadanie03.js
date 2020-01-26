function bigestSumOfTwoElements(array) {
    if (array.length == 1) {
        return array[0];
    }
    if (array.length == 0) {
        return false;
    }
    array.sort();
    return array[array.length-1] + array[array.length-2];

}

console.log(bigestSumOfTwoElements([1,2,3,4])); // => 7
console.log(bigestSumOfTwoElements([])); // => false
console.log(bigestSumOfTwoElements([76])); // => 76
console.log(bigestSumOfTwoElements([23,45,17,12])); // => 68