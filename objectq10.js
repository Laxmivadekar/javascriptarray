// Take 10 student inputs and marks and save them in an object.
// Output :-
// { 'sonu':85, 'Kartik':90, 'Deepak':96, 'Aman':76, 'Somesh':60, 'Umesh':85, 'Amarpal':70, 'Roshan':57, 'Riyaz':98, 'Shabid':56 }
var r=require("readline-sync")
var d={}
for (let i=1;i<=10;i++){
    var st=r.question('enter the student nmae: ')
    var marks=r.question('enter the student nmae: ')
    d[st]=marks}
console.log(d)