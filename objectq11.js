// You need to count the number of occurrences of each unique character of a word 
// "MISSISSIPPI" and store them in an object in key, value pairs.
// Example:-
// Output :-
// {M:1,I:4,S:4,P:2}

var a="MISSISSIPPI"
var d={};
for (i of a){
    c=0
    for (j of a){
        if (i===j){
            c++
        }}
    d[i]=c}
console.log(d)