
 
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
    args.sort();
   return args;

}    
    console.assert(sort(1,2,3)[0] === 1);

    
       
     

// .concat()

var letters =['a','b','c'], numbers = [1,2,3];
var lettersandnumbers = letters.concat(numbers);
console.assert(lettersandnumbers.length === (letters.length + numbers.length));

// .indexOf()

var array = [2, 9, 9];
console.assert(array.indexOf(2) === 0);



// .split()

var names = 'ironman Hulk Thor spiderman hawkeye';
var nameList = names.split(' ', 5);
console.assert(nameList[0] === "ironman");
console.assert(nameList[1] === "Hulk");
console.assert(nameList[2] === "Thor");
console.assert(nameList[3] === "spiderman");
console.assert(nameList[4] === 'hawkeye');



// .join()

var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // assigns 'Wind,Rain,Fire' to myVar1
var myVar2 = a.join(', ');  // assigns 'Wind, Rain, Fire' to myVar2
var myVar3 = a.join(' + '); // assigns 'Wind + Rain + Fire' to myVar3
var myVar4 = a.join('');    // assigns 'WindRainFire' to myVar4

// console.log(myVar4);
// console.log(myVar3 + myVar3 + myVar1);

console.log(myVar3 === myVar3);

// .pop()

var myPopList = ['angel', 'clown', 'mandarin', 'sturgeon'];
var popped = myPopList.pop();

console.assert(popped === 'sturgeon');


// .push()

var doPush = [3,3,5,3,3,2];
var pushed = doPush.push(199,300,400);

console.assert(pushed === 9);

// .slice()

var breeds = ['AKITA', 'Beagal', 'Husky', 'Apple', 'Mango'];
var dogs = breeds.slice(2, 3);

// console.log(dogs[0] === 'Husky')

console.assert(dogs[0] === 'Husky')

// .splice()

    var animals = ['dog', 'cat', 'bird', 'snake'];

// removes 0 elements from index 2, and inserts 'drum'
var removed = animals.splice(2, 0, 'lion');
// myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
// removed is [], no elements removed



console.assert(animals [0] === 'dog');
console.assert(animals [1] === 'cat');
console.assert(animals [2] === 'lion');
console.assert(animals [3] === 'bird');
console.assert(animals [4] === 'snake');

// .shift()

// var animals = ['dog', 'cat', 'bird', 'snake'];



     var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before: ' + myFish);
// "myFish before: angel,clown,mandarin,surgeon"

var shifted = myFish.shift(); 

console.log('myFish after: ' + myFish); 
// "myFish after: clown,mandarin,surgeon" 

console.log('Removed this element: ' + shifted); 
// "Removed this element: angel"

// .unshift()

    var arr = [1, 2];

    arr.unshift(0);

    arr.unshift(-2, -1);

    arr.unshift([-3]);

    console.assert(arr.unshift = -3);

// .filter()

function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

console.assert(filtered = 10);


// .map()


var numbers = [14, 40, 90];
var roots = numbers.map(Math.sqrt);

console.assert(numbers = roots);
 