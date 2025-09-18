# Workshop 01 excercises
Save Workshop1_example1.html and open it with a web browser (preferably Google Chrome/Firefox/Brave).

You see it’s a plain HTML-file no magic tricks attached. BUT - as a matter of fact a block of JavaScript is being run every time the page loads, but since it doesn’t output anything or modify the page, you can’t see it.


##  1. Developer tools 

###  1. Press F12 to open Developer tools and select “Console” to see what JavaScript interpreter is doing

Console is the place where possible error messages or console logging will be printed.


###  2. Close the window and see the source code of the page with Ctrl+U.

There you can see some JavaScript in the 'script' -block. Next close the source - window.


###  3. Save Workshop1_example1.html and open it with a web browser (preferably Google Chrome/Firefox/Brave).

You see it’s a plain HTML - file no magic tricks attached. BUT - as a matter of fact a block of JavaScript is being run every time the page loads, but since it doesn’t output anything or modify the page, you can’t see it.


###  4. Open the JS Console once again (F12).

Console is also the place where you can enter and run JavaScript commands to your browser. Lets try it out. You can increase the font size by pressing Ctrl and scrolling the mouse wheel at the same time.


##  2. JavaScript warm up

### 1. Functions to display data to the user.

Using Developer tools console 
- Type in document.write("Hello World!); What happens?
- Type in alert(“Hello World”); What happens?
- Type in console.log(“Hello World”); What happens?
- Type in prompt("Anna nimesi...")
- Type in confirm(Haluatko jatkaa?")
Sometimes one has to enter commands which require multiple lines. In these cases, use SHIFT+Enter to change the line without running the command. All the lines will be run consequently.

```bash
document.write("Hello World!); // Press Shift+Enter here
alert("Hello World!"); // Press Shift+Enter here
console.log(“Hello World”) // Enter here
```
Try also typing nonsense to the console. You will see an error message in red.


###  2. JS does not have any built-in print functions. You can output data in the following ways

Writing into an 
- alert box, using window.alert(), prompt("") and confirm()
- the HTML output using document.write().
- the browser console, using console.log().
- 

Try also adding the code in the SCRIPT-section of the example1.html -page and then loading the page.

###  3. Defining variables

Go back to the console and clear it. Then type in the following commands:
```bash
var x = 5;
var y = 6;
var z = x + y;
console.log(z);
alert(z);
document.write(z);
```
With console.log -function you can print data to the same Javascript console you’ve been working on so far. This is very useful when you want to print some debug info.



###  4. Conditionals.

Try out the following snippet of code in your JS console. Play around with it and see what happens. Remember to use Shift+Enter if you have multiple lines of code you want to enter before running the block.
```bash
var x = 50; // Press Shift+Enter here
var order = 'Beer'; // Press Shift+Enter here
if (x > 50) {
document.write("He's over 50!" );
} else if (x <= 50 && x> 30){
document.write("Middle aged man, who ordered some "+order);
} else {
document.write("It seems you're bit underaged.");
}
```
Modify the code so, that it will

Print out HTML-tags to produce formatted output on the page, for example the output could be
He’s over 50
or Middle aged man -tags
Have more paths (else if -statements) for different age ranges
output different messages for each agegroup
output the message to the console as well

###  5. Loops.

Try out the following code and play around with it.
```bash
var arr = [];
for (var i=0; i<15; i++) {
arr.push(Math.random());
```
}
console.log(arr);
Modify the code so, that it will

Output the values generated to the console as they are created
Output the values using document.write, using HTML-tags to format them
Randomize numers between 1-100
output the message to the console as well

###  6. Functions.

Try out the following code and play around with it.
```bash
function addNumbers(a, b) {
return a + b;

}
console.log(addNumbers(5, 10));
```
Modify the code so, that ...

You will assign values to two variables and then call the function with those variables
Check if the sum of the two numbers is over 100, if it is, print out (alert) a message to the user
Output the values and sum using document.write, using HTML-tags to format them
###  7. Objects.

Try out the following code and play around with it.


```bash
// Define an object to hold person data
var person = {
firstName:"John",
lastName:"Doe",
age:50,
eyeColor:"blue"
};
console.log(person.age);
```
Modify the code so, that it will ...

have a field for address and telephone.
have one anonymous method named printInfo, which will print all the information of the person object in the console
create an array with 4 person objects in it. Then loop through the array and print out the first and lastname for each item

##  3. Extras.

Write a JavaScript function that will return the given man’s age (input parameter) as dogs age. It is usually considered that dogs age is man’s age multiplied by seven.


Try to run the following of code snippets in the console. Try to find and correct errors in them? Use Developer Tools for debugging.

Snippet 1
```bash
var i = 5; var j = 10
var k = 25; var l = Joe;
if (i < j) {
console.log("i");
} else if (j > k) {
console.log("k");
else console.log("l);
```
```bash
Snippet 2
var arr = [3, 5, 7];
for (var i = 0; i <=3; ++i){
console.log(arr[i]);
}
```
