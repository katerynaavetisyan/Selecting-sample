// function that accepts a string as a parameter and 
// converts the first letter of each word into upper case.

function uppercase(str) {
    let array1 = str.split(' ');
    let newarray1 = [];

    for (let x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase()
            + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));