/*Write a programme to generate and print a dictionary that contains a
number (between 1 and n) in the form (x, x*x).
Sample input (n = 5) :
Output : {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}.*/

var r= require("readline-sync")
var n=r.question("enter the number: ")
d={}
for (var i=1;i<=n;i++){
    d[i]=i*i}   //{ '1': 1, '2': 4, '3': 9, '4': 16, '5': 25 }
console.log(d)