
function sortWord(word) {
    return word.split('').sort().join('');
}
function findAnagrams(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr[i];
        let currentSortedWord = sortWord(currentWord);
        
        let isAnagram = false;
        
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                let compareWord = arr[j];
                let compareSortedWord = sortWord(compareWord);
                
                if (currentSortedWord === compareSortedWord) {
                    isAnagram = true;
                    break;
                }
            }
        }
        
        if (isAnagram) {
            result.push(currentWord);
        }
    }

    return result;
}

let arr = ["bat", "tap", "cat", "tab", "pat"];
console.log(findAnagrams(arr));
