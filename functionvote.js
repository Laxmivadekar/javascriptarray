/*Write a function named eligible_for_vote which takes age as a parameter and
prints if he/she is eligible to vote or not.
( Consider minimum age of voting to be 18. )
If a user given age as less than 18 prints “not eligible “ or
else if a user enters 18 or more than 18 prints “you are eligible”.*

/*18
16
Output :
“you are eligible”
“not eligible”*/


function eligible_for_vote(age){
    if (age==18 || age>18){
        console.log("you are eligible")}
    else{
        console.log("not eligible ")}
}
var n=require('readline-sync')
var k=n.questionInt('enter the age: ')
eligible_for_vote(k)