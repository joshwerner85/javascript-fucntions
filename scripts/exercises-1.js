
 
/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE
    for (var i = 0; i < array.length; i++) {
        //console.log(array[i]);
         callback(array[i]);
         //we need to call function "callback"
         // a = the current array element

    }
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var total = 0;
    for (var i =0; i < args.length; i++) {
        total += args[i];
    }

    return total;
}
console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);


    // .. do something with each element of args
    var args = [].slice.call(arguments);
    var total = 0;
    for (var i =0; i < args.length; i++) {
        total += args[i];
    }
    var avg = total /args.length;
    return avg;
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var biggestNum = 0;
    for (var i =0; i < args.length; i++) {
        if(args[i] > biggestNum) {
            biggestNum = args [i];
         }
    }
    
    return biggestNum;
    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    //console.log(args);

    var theLongest = 0;
    var longWord = " ";
    for (var i=0; i < args.length; i++) {
        if(args[i].length > theLongest){
            longWord = args [i];
        }
        
    }

        return longWord;


    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( longest("this", "is", "a", "awesome", "function") === "function");

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
function sort(){
    var args = [].slice.call(arguments);
    var sorted = args.sort();
    
    args.sort();
    console.log(args);
    console.log(sorted);

    return sorted + args;


}    

    var foods = ('ham');

    var foods2 = ("ham");


    console.assert (sort (foods) === foods2);
    // console.assert( sort(4 === 4);

// .concat()

function concat(){
    var args = [].slice.call(arguments);
}

// .indexOf()

function indexOf(){
    var args = [].slice.call(arguments);
}

// .split()

function split(){
    var args = [].slice.call(arguments);
}


// .join()

function join(){
    var args = [].slice.call(arguments);
}

// .pop()

function pop(){
    var args = [].slice.call(arguments);
}

// .push()

function push(){
    var args = [].slice.call(arguments);
}

// .slice()

function slice(){
    var args = [].slice.call(arguments);
}

// .splice()

    function splice(){
    var args = [].slice.call(arguments);
}

// .shift()

    function shift(){
    var args = [].slice.call(arguments);
}

// .unshift()

    function unshift(){
    var args = [].slice.call(arguments);
}

// .filter()

function filter(){
    var args = [].slice.call(arguments);
}

// .map()

function map(){
    var args = [].slice.call(arguments);
}