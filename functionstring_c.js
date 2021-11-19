/*Write a function that takes 2 strings as parameters and prints whose length is bigger,
if both lengths are equal print two strings.
Hint :Use len() builtin function.
Input:
is_equal_lenth(“hello”,”welcome”)
is_equal_lenth(“sonu”,”monu”)
Output :
welcome
sonu
Monu*/
var r=require('readline-sync')
var f=r.question('enter the string: ')
var g=r.question('enter the string: ')
function string(a,b){
if (a.length==b.length){
    console.log(a)
    console.log(b)}
else if (a.length>b.length){
    console.log(a)}
else{
    console.log(b)}
}
string(f,g)