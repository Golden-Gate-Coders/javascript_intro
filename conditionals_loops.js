// Ruby Conditionals (if)
// if x > 50
//    puts "Number is too high"
// elsif x == 50
//    puts "You got the number"
// end

// Javascript Conditionals and Loops
var num = 20;
var guess = 20;

if (guess < num) {
  console.log("You guessed too low"); 
} else if (guess > num) {
  console.log("You guessed too high!")
} else {
  console.log("You guessed correctly!");
}


// Ruby Equality Check:
// 5 == 5    => true
// 5 == "5"  => false
// 5 != "5"  => true


// Javascript Equality Check:
console.log(5 == 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");


// Ruby Random Number:
// rand(1..10)

// Javascript Random Number (1 - 10):
Math.floor(Math.random() * 10) + 1


// Ruby While Loops:
// i = 0
// while i == 0 
//    puts "i is 0!"
// end

// Javascript While Loop:
var i = 0;
while (i <= 10) {
  console.log("The value of i is: " + i);
  i++;
}
console.log("The final value of i is: " + i);



// Ruby For Loop:
// for i in 0..10
//     puts i
// end
// Each:
// (0..10).each do |i|
//    puts i
// end

// Javascript For Loops:
for (var i = 0; i <= 10; i++) {
  console.log("The value of i is: " + i);
}

var numbers = [2, 3, 6, 1, 5, 7, 8, 10];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}











