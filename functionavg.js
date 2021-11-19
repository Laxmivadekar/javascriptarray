/*Write a function named average which takes 3 numbers and prints the
sum of 3 numbers and the average of 3 numbers.
Input:-
Enter first number : 3
Enter second number : 4
Enter third number: 5
Output :
Sum of three numbers :-12
Average of three numbers :-4*/

var sum=0;
//first(f),second(s).third(t)
var n=require('readline-sync');
var f=n.questionInt('enter the no.: ')
var s=n.questionInt('enter the no.: ')
var t=n.questionInt('enter the no.: ')
function average(a,b,c){  
    sum=a+b+c
    console.log("sum",sum)
    console.log("avg",sum/3)
}
average(f,s,t)