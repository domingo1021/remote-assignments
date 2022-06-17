function count(input) {
    // your code here
    count_obj = {};
    input.forEach(element => {
       if(!Object.keys(count_obj).includes(element)){
        count_obj[element] = 1;
       }else{
        count_obj[element] += 1;
       }
    });
    return count_obj;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}


function groupByKey(input) {
    // your code here
    count_obj = {};
    input.forEach(element =>{
        if( !Object.keys(count_obj).includes(element.key) ){
            count_obj[element.key] = element.value;
        }else{
            count_obj[element.key] += element.value;
        }
    });
    return count_obj;
}

let input2 = [
{ key: "a", value: 3 },
{ key: "b", value: 1 },
{ key: "c", value: 2 },
{ key: "a", value: 3 },
{ key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}