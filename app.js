// function that accepts a string as a parameter and finds the longest word within the string.

function find_longest_word(str) {
    let array1 = str.match(/\w[a-z]{0,}/gi);
    let result = array1[0];

    for (let x = 1; x < array1.length; x++) {
        if (result.length < array1[x].length) {
            result = array1[x];
        }
    }
    return result;
}
console.log(find_longest_word('Adventures are healthy and fun!'));
