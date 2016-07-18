    function mergeSort(array) {
    if (array.length <= 1) {
        return array[0];
    }
    const middle = array.length / 2;
    let start = 0, end = array.length - 1;
    console.log(array.length);
    let left = array.split(start, middle);
    let right = array.split(middle, end);
    return mergeSort(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([4, 8, 1, 5, 0, 6, 2]));


