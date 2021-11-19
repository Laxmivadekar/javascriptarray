/*MOM
MALAYALAM
121
2002
Sample Input :
var name=[‘m’,’a’,’l’,’a’,’y’,’a’,’l’,’a’,’m’]
sample output:
This is palindrome*/
var x=require('readline-sync')
var a=x.question('enter the string: ');
var str="";
for (var i=0;i<a.length;i++){
    str=a[i]+str
}
console.log(str)
if (a===str){
    console.log('it is a polyndron')
}
else{
    console.log('it is not')
}