/*Write a function named showNumbers() which takes 
1 argument named limit and program starts from o to limit and 
checks the numbers in between 0 to limit and 
prints whether the number is Even or odd like the below.
Input:-
3
Output :
0 EVEN
1 ODD
2 EVEN
3 ODD*/

var a=require('readline-sync')
var n=a.question('enter the limit: ')
function showNumbers(l){
for(var i=0;i<=l;i++){
if (i%2==0){
    console.log(i,"Even")}
else{
    console.log(i,"odd")}}
}
showNumbers(n)