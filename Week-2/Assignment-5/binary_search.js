function binarySearchPosition(numbers, target) {
    // your code here
    let mid = Math.floor(numbers.length/2);
    console.log(numbers)
    if(numbers.length == 1 && numbers[mid] !== target){
        return -1
    }
    else{
        if(numbers[mid] === target){
            return mid;
        }else if (numbers[mid] > target){
            return binarySearchPosition(numbers.slice(0, mid), target)
        }else if (numbers[mid] < target){
            let location = binarySearchPosition(numbers.slice(mid, numbers.length), target)
            if (location === -1){
                return -1
            }else{
                return mid + location;
            }
        }
    }    
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should
// print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should
// print 3