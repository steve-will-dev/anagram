// ## Challenge 1: Anagram (Easy)

// Write a program that takes in two words and works out if they are an anagram of each other

var sortedWord1 = "";
var sortedWord2 = "";
var word1 = "";
var word2 = "";

while (i=0, i<=2) {
    word1 = prompt(`please input your first word:`);
    document.getElementById('first').innerHTML = `Your First Word Was ${word1}`;
    sortedWord1 = normWord(word1); // passing word 1 to function to sort
    i++;
    word2 = prompt(`please input your second word:`);
    document.getElementById('second').innerHTML = `Your Second Word Was ${word2}`;
    sortedWord2 = normWord(word2); // passing word 2 to function to sort
    i++;
    break;
};

// sorting function normalise words etc
function normWord(word){
    var sortedWord = word.toLowerCase().split('').sort().join('').trim();
    return sortedWord;
}

// check if anagram and display
if (sortedWord1 === sortedWord2) {
    document.getElementById('output').innerHTML = `These are an anagram of each other`;
} else {
    document.getElementById('output').innerHTML = `These are not an anagram of each other`;

}