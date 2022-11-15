//javascript codes:

//example of how to get 55 in javascript: 

let total = 0, count = 1;
while(count <= 10){
	total += count;
	count += 1;
}
//it adds 1 to total, until it finishes the count (that in this case is until 10); 
console.log(total);

//factorial example: 

function factorial(n){
	if(n == 0){
		return 1;
	}else{
		return factorial(n - 1) * n;
	}
}

console.log(factorial(8))
// 40320

/*Not all operators are symbols. Some are written as words. One example is
the typeof operator, which produces a string value naming the type of the
value you give it.*/

console.log(typeof 43);
//number

console.log(typeof "x")
//string

//odd things in Javascript:

console.log(8 * null)
// 0

console.log("5" - 1)
//4

console.log("5" + 1)
//51

console.log("five" * 2)
//NaN


console.log(false == 0)
//true

//varialbles examples:

let ten = 10; 
console.log(ten * ten)
//100

/*When a binding points at a value, that does not mean it is tied to that
value forever. The = operator can be used at any time on existing bindings to disconnect them from their current value and have them point to a
new one.*/

//example:

let mood = "light";
console.log(mood);
//light

mood = "dark";

console.log(mood);
//dark;

//another example of data bidings:

let LuigisDept = 140;
luigisDept = LuigisDept - 35;
console.log(luigisDept);

//another example that follows the same thing:

let one = 1, two = 2;
console.log(one + two)
//3 

//another example but with variables and const:
//consts are really useful because its value will be forever. So whenever you need to use it, you just have to call it. 


var name = "Pablo";
const greeting = "Hello ";
console.log(greeting + name);
//Hello Pablo

//some examples of functions: 

console.log(Math.max(2,4));
//4

//another example but now with Math Min: 

console.log(Math.min(2,4)+ 100)
//102 

//statiments in a program: 

//that is an example of a program that multiplies the number you've typed by itself:
let theNumber = Number(prompt("Pick a number")); 
console.log("Your number is the square root of " + theNumber * theNumber); 

//conditional execution: 

let theNumber = Number(prompt("Pick a number"));
if(!Number.isNan(theNumber)){
	console.log("Your number is the square root of " + theNumber * theNumber); 
}

//another example of if:

if(1 + 1 = 2) console.log("It is true");
// it is true

//the same example of the other program but with ELSE: 


let theNumber = Number(prompt("Pick a number"));
if(!Number.isNan(theNumber)){
	console.log("Your number is the square root of " + theNumber * theNumber); 
}else{
	console.log("Hey, why did you not give me a number!!??"); 
}

//example with multiple if and elses: 

let num  = Number(prompt("Pls pick up a number")); 

if(num < 10){
	console.log("Hey, you are so young");
}else if(num < 30){
	console.log("You are not so young");
}else{
	console.log("You are too old");
}

//another example, but now using loop: 

let number = 0; 

while(number < 12){
	console.log(number);
	number += 2; 
}

//0, 2, 4, 6, etc... 

//now a program that calculates 2 to 10th power: 

let result = 1; 
let counter = 0; 

while(counter < 10){
	result *= 2; 
	counter += 1; 
}

console.log(result);

//1024

//now a example of a do loop: 

let yourName; 

do{
	yourName = prompt("Type your name: "); 
}while(!yourName);
console.log(yourName); 

//and the result will be: Pablo. But if I didint insert anything the result would be false. 

//Now is the shortest loop, the for loop: 

for(let number = 0; number < 12; number += 2){
	console.log(number); 
}

//the result will be until 12 counting by 2 

let result = 1; 
for(let counter = 0; counter < 10; counter += 1){
	result *= 2; 
}

console.log(result); 


//now the same example but now using BREAK statement: 

for(let current = 20;  ;current += 1){
	if(current % 7 == 0){
		console.log(current);
		break; 
	}
}


//switch statement examples: 

switch(prompt("What is the weather like? ")){
	case "rainy ": 
	  console.log("It is better to stay home"); 
	  break;
	case "sunny ": 
	  console.log("Dress lightly"); 
		break; 
	case "Cloudy": 
	  console.log("Go outside");
		break;
		
	default: 
	  console.log("Undified weather type");
		break; 
}


//defining functions examples: 

const square = function(x){
	return x * x; 
};

console.log(function(2))
//4 


//another example of functions: 

const makeNoise = function(){
	console.log("Pling");
};

//and then when we call it, it will be like: 

makeNoise();
//Pling

//Now a function  of a power and its exponent: 

const power = function(base, exponent){
	let result = 1; 
	for(let count = 0; count < exponent; count++){
		result *= base; 
	}
	return result; 
}

//biding and scopes examples: 

let x = 10; 
if(true){
	let y = 20; 
	var z = 30; 
	console.log(x + y + z)
	//60
}

//y is not visible here 
console.log(x + z);
// 40 

/*Each scope can “look out” into the scope around it, so x is visible
inside the block in the example. The exception is when multiple bindings
have the same name—in that case, code can see only the innermost one. For
example, when the code inside the halve function refers to n, it is seeing its
own n, not the global n.*/

const halv = function(n){
	return n / 2; 
}; 

let n = 10; 

console.log(halv(100))
//50

console.log(n)
//10

//nested scopus example: 

//lexical scoping:
const humus = function(factor){
	const ingredients = function(amount, unit, name){
		let ingredientAmount = amount * factor; 
		if(ingredientAmount > 1){
			unit += "s"; 
		}
		console.log(`${ingredientAmount} ${unit} ${name}`); 
	};
	ingredient(1, "can", "chickpeas"); 
	ingredient(0.25, "cup", "tahini");
	ingredient(1, "clove", "garlic");
	ingredient(2, "tablespoon", "olive Oil");
	ingredient(0.5, "teaspoon", "cumin");
};


//Function as variables:

let lunchMissles = function(){
	missleSystem.launch("now"); 
};

if(safeMode){
	launchMissles = function(){
		/*Do nothing*/
	}
}