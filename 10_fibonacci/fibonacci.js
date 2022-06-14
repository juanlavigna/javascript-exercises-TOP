const fibonacci = function(number) {
    if(number<0) return "OOPS";
    
    let previous = 0
    let previous2 = 1
    for(let i = 1; i < number; i++){
        let temp = previous2
        previous2 += previous   
        previous = temp

    }
    return previous2
};
// 1, 1, 2, 3, 5, 8, 13,  etc.
// Do not edit below this line
module.exports = fibonacci;
