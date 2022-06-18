function binarySearchPosition(numbers, target) {
    // Recursive edition
    let mid = Math.floor(numbers.length/2);
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
function binarySearchPosition_2(numbers, target){
    // Second edition, search by loop.
    let start = 0 ;
    let end = numbers.length - 1;
    while(start != end){
        let mid = Math.floor((start + end) / 2);
        if(numbers[mid] === target){
            return mid;
        }else if(numbers[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1

}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should
// print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should
// print 3

console.log(binarySearchPosition_2([1, 2, 5, 6, 7], 1)); // should
// print 0
console.log(binarySearchPosition_2([1, 2, 5, 6, 7], 6)); // should
// print 3