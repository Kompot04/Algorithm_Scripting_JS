//Sum All Numbers in a Range

function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }
    return sumBetween;
}

sumAll([1, 4]);



//Diff Two ArraysPassed
function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {
        for (var i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i]);
            }
        }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



//Seek and DestroyPassed
function destroyer(arr) {
    let valsToRemove = Object.values(arguments).slice(1);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < valsToRemove.length; j++) {
            if (arr[i] === valsToRemove[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(item => item !== null);
}


//Wherefore art thou
function whatIsInAName(collection, source) {

    var srcKeys = Object.keys(source);


    return collection.filter(function(obj) {
        for (var i = 0; i < srcKeys.length; i++) {
            if (!obj.hasOwnProperty(srcKeys[i]) ||
                obj[srcKeys[i]] !== source[srcKeys[i]]
            ) {
                return false;
            }
        }
        return true;
    });
}


whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
    ], { last: "Capulet" }
);



//Spinal Tap CasePassed
function spinalCase(str) {

    var regex = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.replace(regex, "-").toLowerCase();
}

spinalCase("This Is Spinal Tap");



//Pig Latin
function translatePigLatin(str) {
    return str
        .replace(/^[aeiou]\w*/, "$&way")
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

translatePigLatin("consonant");



//Search and ReplacePassed

function myReplace(str, before, after) {

    if (/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.substring(1)
    } else {
        after = after[0].toLowerCase() + after.substring(1)
    }


    return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");




//DNA PairingPassed
function pairElement(str) {

    var paired = [];


    var search = function(char) {
        switch (char) {
            case "A":
                paired.push(["A", "T"]);
                break;
            case "T":
                paired.push(["T", "A"]);
                break;
            case "C":
                paired.push(["C", "G"]);
                break;
            case "G":
                paired.push(["G", "C"]);
                break;
        }
    };


    for (var i = 0; i < str.length; i++) {
        search(str[i]);
    }

    return paired;
}


pairElement("GCG");



//Missing letters
function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {

        var code = str.charCodeAt(i);


        if (code !== str.charCodeAt(0) + i) {

            return String.fromCharCode(code - 1);
        }
    }
    return undefined;
}


fearNotLetter("abce");




//Sorted UnionPassed
function uniteUnique(arr1, arr2, arr3) {

    var finalArray = [];


    for (var i = 0; i < arguments.length; i++) {
        var arrayArguments = arguments[i];


        for (var j = 0; j < arrayArguments.length; j++) {
            var indexValue = arrayArguments[j];


            if (finalArray.indexOf(indexValue) < 0) {
                finalArray.push(indexValue);
            }
        }
    }

    return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);




//Convert HTML EntitiesPassed
function convertHTML(str) {

    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };

    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}


convertHTML("Dolce & Gabbana");



//Sum All Odd Fibonacci NumbersPassed
function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}


sumFibs(4);



//Sum All Primes
function sumPrimes(num) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }



    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            sum += i;
    }
    return sum;
}




//Smallest Common Multiple
function smallestCommons(arr) {

    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;

    let upperBound = 1;
    for (let i = min; i <= max; i++) {
        upperBound *= i;
    }

    for (let multiple = max; multiple <= upperBound; multiple += max) {

        let divisorCount = 0;
        for (let i = min; i <= max; i++) {

            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === numberDivisors) {
            return multiple;
        }
    }
}

smallestCommons([1, 5]);



//Drop it
function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}


dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
});



//SteamrollerPassed
function steamrollArray(arr) {
    const flattenedArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {


            flattenedArray.push(...steamrollArray(arr[i]));
        } else {

            flattenedArray.push(arr[i]);
        }
    }
    return flattenedArray;
};


steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);



//Binary AgentsPassed
function binaryAgent(str) {

    str = str.split(" ");
    var power;
    var decValue = 0;
    var sentence = "";

    for (var s = 0; s < str.length; s++) {

        for (var t = 0; t < str[s].length; t++) {

            if (str[s][t] == 1) {

                power = Math.pow(2, +str[s].length - t - 1);
                decValue += power;


            }
        }

        sentence += String.fromCharCode(decValue);


        decValue = 0;
    }

    return sentence;
}


binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);



//Everything Be True
function truthCheck(collection, pre) {
    return collection.every(function(element) {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
}




truthCheck(
    [
        { user: "Tinky-Winky", sex: "male" },
        { user: "Dipsy", sex: "male" },
        { user: "Laa-Laa", sex: "female" },
        { user: "Po", sex: "female" }
    ],
    "sex"
);



//Arguments Optional
function addTogether() {
    const [first, second] = arguments;
    if (typeof(first) !== "number")
        return undefined;
    if (second === undefined)
        return (second) => addTogether(first, second);
    if (typeof(second) !== "number")
        return undefined;
    return first + second;
}



//Make a Person
var Person = function(firstAndLast) {
    var fullName = firstAndLast;

    this.getFirstName = function() {
        return fullName.split(" ")[0];
    };

    this.getLastName = function() {
        return fullName.split(" ")[1];
    };

    this.getFullName = function() {
        return fullName;
    };

    this.setFirstName = function(name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function(name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function(name) {
        fullName = name;
    };
};

var bob = new Person("Bob Ross");
bob.getFullName();



//Map the Debris
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const newArr = [];

    const getOrbPeriod = function(obj) {
        const c = Math.pow(earthRadius + obj.avgAlt, 3);
        const b = Math.sqrt(c / GM);
        const orbPeriod = Math.round(a * b);

        return { name: obj.name, orbitalPeriod: orbPeriod };
    };

    for (let elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }

    return newArr;
}


orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);