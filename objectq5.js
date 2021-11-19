// Write a program to take 1 input and check whether given input exists in our object or not,
// if it exists print exists or else prints not exist.
// Example :
// dict={“name”:”Raju”, “marks”:56}
// if input is “name” then output will be “exist”
// If input is “class” then output will be “not exists”.

var r=require("readline-sync")
var i=r.question("enter the any name: ")
dict={"name":"Raju", "marks":56}
if (dict.hasOwnProperty(i)){
    console.log("it exists")}
else{
    console.log("it is not exists")
}