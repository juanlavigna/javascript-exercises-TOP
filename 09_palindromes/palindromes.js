const palindromes = function (word) {
    let newWord = word.toLowerCase().replace(/[^a-z]/g, "");
    let reverseWord = newWord.split("").reverse().join("")
    if (newWord === reverseWord){
        return true
    }else{
        return false
    }
};
palindromes("Menem")
// Do not edit below this line
module.exports = palindromes;
