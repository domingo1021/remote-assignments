function countAandB(input) {
    // catch if input not array 
    let tmp_list = [];
    try{
        if (Array.isArray(input)){
            input.forEach(element => {
                if(element === "a" || element==="b"){
                    tmp_list.push(element);
                }
            });
        }else{
            throw TypeError;
        }
    }
    catch(e){
        if (e instanceof TypeError){
            console.log(e)
        }
        else{
            console.log(`General exception ${e}`);
        }
    }
    finally{
        return tmp_list.length;
    }
    
}
function toNumber(input) {
    let tmp_list = []
    for(let i=0; i<input.length; i++){
        alphabet = input[i];
        // Capitalization sensitive
        n = (alphabet == alphabet.toLowerCase())?96 : 64;
        tmp_list.push(alphabet.charCodeAt(0)-n);
    }
    return tmp_list;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1‘b’letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
// console.log(toNumber(['E', 'D', 'C', "d", "e"])) // also print [5, 4, 3, 4, 5]
